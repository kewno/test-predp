//import {mainAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";
import {brigadesAPI} from "../api/api";
import {
    ActiveSelect,
    BrigadesProcessed,
    ConnectionProcessed,
    DataBrigades,
    DataConnection,
    DataDepartments,
    DepartmentsProcessed, SelectItem
} from "../types/types";

export const actions = {
    setBrigades: (brigades: DataBrigades[]) => ({type: 'SET_BRIGADES', brigades} as const),
    setConnection: (connection: DataConnection[]) => ({type: 'SET_CONNECTION', connection} as const),
    setDepartments: (departments: DataDepartments[]) => ({type: 'SET_DEPARTMENTS', departments} as const),
    toggleFetchPreloader: () => ({type: 'TOGGLE_FETCH_PRELOADER'} as const),
    setActiveSelect: (selectItem: SelectItem) => ({type: 'SET_ACTIVE_SELECT', selectItem} as const),
    filterBrigades: () => ({type: 'FILTER_BRIGADES'} as const),
}

type ActionsTypes = InferActionsTypes<typeof actions>
export type DispatchType = Dispatch<ActionsTypes>


//export type initBrigadesType = typeof initBrigades

export type initBrigadesType = {
    brigades: BrigadesProcessed[]
    departments: DepartmentsProcessed[]
    connection: ConnectionProcessed[]
    isFetchPreloader: boolean

    activeSelect: ActiveSelect
    brigadesLayout: BrigadesProcessed[]
}

let initBrigades: initBrigadesType = {
    brigades: [] as BrigadesProcessed[],
    departments: [{value: '0', label: 'Лукойл'}, {value: '1', label: 'Роснефть'}, {value: '2', label: 'Газпром нефть'}] as DepartmentsProcessed[],
    connection: [] as ConnectionProcessed[],
    isFetchPreloader: true,
    activeSelect: {
        department: '',
        connection: ''
    },
    brigadesLayout: [] as BrigadesProcessed[]
}

export const setDataBrigadesThunkCreator = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: DispatchType) => {
        let response = await brigadesAPI.getBrigades()
        dispatch(actions.setBrigades(response))
        dispatch(actions.toggleFetchPreloader())
    }
}

export const setDataConnectionThunkCreator = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: DispatchType) => {
        let response = await brigadesAPI.getConnectionState()
        dispatch(actions.setConnection(response))
    }
}

export const setDataDepartmentsThunkCreator = () : ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes> => {
    return async (dispatch: DispatchType) => {
        let response = await brigadesAPI.getDepartments()
        dispatch(actions.setDepartments(response))
    }
}

export const getNameDepartment = (id: string): string => {
    let activeDepartment: string = ''

    initBrigades.departments.map((el) => {
        if (el.value === id) {
            activeDepartment = el.label
        }
    })
    return activeDepartment
}

const filterBrigades = (brigades: BrigadesProcessed[], select: ActiveSelect): BrigadesProcessed[] => { //
    let brigadesArr: BrigadesProcessed[] = []

    if (select.department !== '' && select.connection !== '') {
        brigadesArr = brigades.filter(function (el) {
            return el.department.toString() === select.department && el.connection.toString() === select.connection
        })
    } else if (select.department !== '') {
        brigadesArr = brigades.filter(function (el) {
            return el.department.toString() === select.department
        })
    } else if (select.connection !== '') {
        brigadesArr = brigades.filter(function (el) {
            return el.connection.toString() === select.connection
        })
    } else {
        brigadesArr = brigades
    }
    return brigadesArr
}

let brigadesReducer = (state = initBrigades, action: ActionsTypes) => {
    let stateClone = {...state}
    if (action.type === 'SET_BRIGADES') {
        stateClone.brigades = [...stateClone.brigades]
        stateClone.brigadesLayout = [...stateClone.brigadesLayout]
        let brigadesArr: BrigadesProcessed[] = []

        action.brigades.map(el => {
            brigadesArr.push({
                brigade_name: el.brigade_name,
                connection: el.connectionStateId,
                department: el.department.id,
                id: el.id,
                position: {cluster: el.position.cluster, field: el.position.field, well: el.position.well}
            })
        })
        stateClone.brigades = brigadesArr
        stateClone.brigadesLayout = brigadesArr
    } else if (action.type === 'SET_CONNECTION') {
        stateClone.connection = [...stateClone.connection]
        let connectionArr: DepartmentsProcessed[] = []
        action.connection.map(el => {
            connectionArr.push({label: el.name, value: el.connectionStateId.toString()})
        })
        stateClone.connection = connectionArr
    } else if (action.type === 'SET_DEPARTMENTS') {
        stateClone.departments = [...stateClone.departments]
        let departmentsArr: DepartmentsProcessed[] = []
        action.departments.map(el => {
            departmentsArr.push({label: el.name, value: el.id.toString()})
        })
        stateClone.departments = departmentsArr
    } else if (action.type === 'TOGGLE_FETCH_PRELOADER') {
        stateClone.isFetchPreloader = !stateClone.isFetchPreloader
    } else if (action.type === 'SET_ACTIVE_SELECT') {
        stateClone.activeSelect = {...stateClone.activeSelect}
        if (action.selectItem.value === undefined) {
            // @ts-ignore
            stateClone.activeSelect[`${action.selectItem.label}`] = ''
        } else {
            // @ts-ignore
            stateClone.activeSelect[`${action.selectItem.label}`] = action.selectItem.value
        }

        //stateClone.brigadesLayout = [...stateClone.brigadesLayout]
        //stateClone.brigadesLayout = filterBrigades(stateClone.brigades)
    } else if (action.type === 'FILTER_BRIGADES') {
        //stateClone.brigadesLayout = [...stateClone.brigadesLayout]
        stateClone.brigadesLayout = stateClone.brigades
        stateClone.brigadesLayout = filterBrigades(stateClone.brigadesLayout, stateClone.activeSelect)
        //stateClone.brigadesLayout = filterBrigades()
        //console.log(stateClone.activeSelect)
        //stateClone
    }
    return stateClone
}

export default brigadesReducer