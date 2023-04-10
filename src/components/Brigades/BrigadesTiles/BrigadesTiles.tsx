import * as React from 'react';
import {Row, Col} from 'antd';
import CardElem from "../../ui/CardElem/CardElem";
import './brigades-tiles.sass';

type AttrType = {
    tiles: any[]
}

const BrigadesTiles: React.FC<AttrType> = ({tiles}) => {

    return (
        <Row className="brigades-tiles" gutter={[16, 16]} >
            {tiles.map((el: any )=> {
                return <Col xxl={{ span: 4}} xl={{ span: 6}} md={{ span: 8}} sm={{ span: 12}} xs={{ span: 24}}>
                    <CardElem headline={el.headline}/>
                </Col>
            })}
        </Row>
    )
}


export default BrigadesTiles