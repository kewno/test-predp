import * as React from 'react';
import './brigades.sass';
import { Card} from 'antd';
import BrigadesSelect from "./BrigadesSelect/BrigadesSelect";
import BrigadesTiles from "./BrigadesTiles/BrigadesTiles";

type AttrType = {
    headline?: string
    compound?: number
    cluster?: number
    field?: string
    well?: number
}

const Brigades: React.FC<AttrType> = ({headline, compound, cluster, field, well}) => {
    return (
        <div className="brigades">
            <BrigadesSelect
                headlineCompound='Соединение'
                headlineDepartment='Департамент'/>

            <BrigadesTiles tiles={[{headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},
                {headline: 'Газпром'}, {headline: 'Газпром'},

                {headline: 'Газпром'}, {headline: 'Газпром'},]}/>
        </div>
    )
}


export default Brigades