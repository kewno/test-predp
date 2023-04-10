//import {mainAPI} from "../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {AppStateType, InferActionsTypes} from "./store";

export const actions = {
    setData: (data: any) => ({type: 'SET_DATA', data} as const),
}

type ActionsTypes = InferActionsTypes<typeof actions>
export type DispatchType = Dispatch<ActionsTypes>

let initBrigades = {

}

let brigadesReducer = (state = initBrigades, action: ActionsTypes) => {
    let stateClone = {...state};
    if (action.type === 'SET_DATA') {
        //stateClone.categorys = [...stateClone.categorys]
        //stateClone.categorys = action.categorys
        return stateClone;
    }
}

export default brigadesReducer