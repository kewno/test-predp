import * as React from 'react';
import {Row, Col} from 'antd';
import SelectElem from "../../ui/SelectElem/SelectElem";
import './brigades-select.sass';

type AttrType = {
    headlineCompound?: string
    headlineDepartment?: string
}

const BrigadesSelect: React.FC<AttrType> = ({headlineCompound, headlineDepartment}) => {

    return (
        <Row className="brigades-select" gutter={[16, 16]}>
            <Col xs={{span: 24}} sm={{ span: 7}} lg={{ span: 4}} xxl={{ span: 2}}>
                <SelectElem
                    headline={headlineCompound}
                    handleChange={() => {}}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' }
                    ]}
                />
            </Col>
            <Col xs={{span: 24}} sm={{ span: 7}} lg={{ span: 4}} xxl={{ span: 2}}>
                <SelectElem
                    headline={headlineDepartment}
                    handleChange={() => {}}
                    options={[
                        { value: 'jack', label: 'Jack' },
                        { value: 'lucy', label: 'Lucy' }
                    ]}
                />
            </Col>
        </Row>
    )
}


export default BrigadesSelect