import * as React from 'react';
import './brigades.sass';
import BrigadesSelect from "./BrigadesSelect/BrigadesSelect";
import BrigadesTiles from "./BrigadesTiles/BrigadesTiles";
import {AppDispatch, AppStateType} from "../../redux/store";
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {
    setDataBrigadesThunkCreator,
    setDataConnectionThunkCreator,
    setDataDepartmentsThunkCreator
} from "../../redux/brigadesReducer";
import Preloader from "../ui/Preloader/Preloader";


const Brigades = () => {

    let dispatch: AppDispatch = useDispatch()

    useEffect(() => {
        dispatch(setDataConnectionThunkCreator())
        dispatch(setDataDepartmentsThunkCreator())
        dispatch(setDataBrigadesThunkCreator())
    }, []);

    let isFetchPreloader = useSelector((state: AppStateType) => state.brigades.isFetchPreloader)

    return (
        <div className="brigades">
            <BrigadesSelect
                headlineCompound='Соединение'
                headlineDepartment='Департамент'/>
            {isFetchPreloader ?
                <BrigadesTiles />
                :
                <Preloader/>}
        </div>
    )
}


export default Brigades