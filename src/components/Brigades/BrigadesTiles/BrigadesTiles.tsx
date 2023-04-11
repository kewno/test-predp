import * as React from 'react';
import {Row, Col} from 'antd';
import CardElem from "../../ui/CardElem/CardElem";
import './brigades-tiles.sass';
import {BrigadesProcessed} from "../../../types/types";
import {useEffect} from "react";
import {actions, getNameDepartment} from "../../../redux/brigadesReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";


const BrigadesTiles = () => {

    let selected = useSelector((state: AppStateType) => state.brigades.activeSelect)
    let brigades = useSelector((state: AppStateType) => state.brigades.brigadesLayout)

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.filterBrigades())
    }, [selected]);

    return (
        <Row className="brigades-tiles" gutter={[16, 16]} >
            {brigades.map((el: BrigadesProcessed )=> {
                let nameDepartment = getNameDepartment(el.department.toString())

                return <Col key={el.id} xxl={{ span: 4}} xl={{ span: 6}} md={{ span: 8}} sm={{ span: 12}} xs={{ span: 24}}>
                    <CardElem
                        title={el.brigade_name}
                        headline={nameDepartment}
                        compound={el.connection}
                        cluster={el.position.cluster}
                        field={el.position.field}
                        well={el.position.well}
                    />
                </Col>
            })}
        </Row>
    )
}


export default BrigadesTiles