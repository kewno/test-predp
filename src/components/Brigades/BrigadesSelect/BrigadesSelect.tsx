import * as React from 'react';
import {Row, Col} from 'antd';
import SelectElem from "../../ui/SelectElem/SelectElem";
import './brigades-select.sass';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../redux/store";
import {
    actions
} from "../../../redux/brigadesReducer";
type AttrType = {
    headlineCompound?: string
    headlineDepartment?: string
}



const BrigadesSelect: React.FC<AttrType> = ({headlineCompound, headlineDepartment}) => {

    let dispatch = useDispatch()

    let departments = useSelector((state: AppStateType) => state.brigades.departments)
    let connection = useSelector((state: AppStateType) => state.brigades.connection)

    return (
        <Row className="brigades-select" gutter={[16, 16]}>
            <Col xs={{span: 24}} sm={{ span: 7}} lg={{ span: 4}} xxl={{ span: 2}}>
                <SelectElem
                    headline={headlineCompound}
                    handleChange={(value) => {dispatch(actions.setActiveSelect({value, label: 'connection'}))}}
                    options={connection}
                    allowClear
                />
            </Col>
            <Col xs={{span: 24}} sm={{ span: 7}} lg={{ span: 4}} xxl={{ span: 2}}>
                <SelectElem
                    headline={headlineDepartment}
                    handleChange={(value) => {dispatch(actions.setActiveSelect({value, label: 'department'}))}}
                    options={departments}
                    allowClear
                />
            </Col>
        </Row>
    )
}


export default BrigadesSelect