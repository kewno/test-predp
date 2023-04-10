import * as React from 'react';
import SelectElem from "../ui/SelectElem/SelectElem";
import CardElem from "../ui/CardElem/CardElem";
import { Col, Row } from 'antd';

const UiKit = () => {
    return (
        <div className='ui-kit'>
            <Row gutter={16}>
                <Col span={8}>col-8</Col>
                <Col xs={{span: 4}} lg={{ span: 2}}>
                    <SelectElem
                        headline='Заголовок'
                        handleChange={() => {}}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' }
                        ]}
                    />
                </Col>
            </Row>
            <div className='ui-kit__select'>
                <SelectElem
                handleChange={() => {}}
                options={[
                    { value: 'jack', label: 'Jack' },
                    { value: 'lucy', label: 'Lucy' }
                ]}
                />
            </div>
            <div className='ui-kit__card'>
                <CardElem headline='Газпром'/>
            </div>
        </div>
    )
}


export default UiKit