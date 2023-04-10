import * as React from 'react';
import { Card} from 'antd';
import './card-elem.sass';

type AttrType = {
    headline?: string
    compound?: number
    cluster?: number
    field?: string
    well?: number
}

const CardElem: React.FC<AttrType> = ({headline, compound, cluster, field, well}) => {
    let headlineClass = 'card-elem__text--connect',
        headlineText = 'В норме'

    if (compound === 0) {
        headlineClass = 'card-elem__text--no-connect'
        headlineText = 'Нет связи'
    }

    return (
        <div className="card-elem">
            <Card size="small" title={headline}>
                <h3 className="card-elem__headline">{headline}</h3>
                <p className={`card-elem__text ${headlineClass}`}><b>Соединение:</b> {headlineText}</p>
                <p className="card-elem__text"><b>Кластер:</b> {cluster}</p>
                <p className="card-elem__text"><b>Поле:</b> {field}</p>
                <p className="card-elem__text"><b>Скважина:</b> {well}</p>
            </Card>
        </div>
    )
}


export default CardElem