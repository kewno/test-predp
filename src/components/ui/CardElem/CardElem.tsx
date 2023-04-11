import * as React from 'react'
import { Card} from 'antd'
import './card-elem.sass'
import {CheckCircleOutlined, StopOutlined} from "@ant-design/icons";

type AttrType = {
    title?: string
    headline: string
    compound?: number
    cluster?: number
    field?: string
    well?: number
}

const CardElem: React.FC<AttrType> = ({title,headline, compound, cluster, field, well}) => {

    return (
        <div className="card-elem">
            <Card size="small" title={title}>
                <h3 className="card-elem__headline">{headline}</h3>
                {compound === 1 ?
                    // eslint-disable-next-line react/jsx-no-undef
                    <p className={`card-elem__text card-elem__text--connect`}><b>Соединение:</b> {'В норме'} <CheckCircleOutlined /></p>
                    :
                    // eslint-disable-next-line react/jsx-no-undef
                    <p className={`card-elem__text card-elem__text--no-connect`}><b>Соединение:</b> {'Нет связи'} <StopOutlined /></p>
                }

                <p className="card-elem__text"><b>Кластер:</b> {cluster}</p>
                <p className="card-elem__text"><b>Поле:</b> {field}</p>
                <p className="card-elem__text"><b>Скважина:</b> {well}</p>
            </Card>
        </div>
    )
}


export default CardElem