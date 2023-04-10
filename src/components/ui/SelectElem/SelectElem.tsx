import * as React from 'react';
import { Select} from 'antd';
import './select-elem.sass';

type AttrType = {
    options: Options[],
    headline?: string
    handleChange: () => void,
    disabled?: boolean, // for select
    allowClear?: boolean
}

type Options = {
    value: string,
    label: string,
    disabled?: boolean // for 'options' in select
}

const SelectElem: React.FC<AttrType> = ({options, headline, handleChange, disabled, allowClear}) => {
    return (
        <div className='select-elem'>
            <p className="select-elem__headline">{headline}</p>
            <Select
                onChange={handleChange}
                allowClear={allowClear}
                disabled={disabled}
                options={options}
            />
        </div>
    )
}


export default SelectElem