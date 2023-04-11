import * as React from 'react'
import './preloader.sass'
import preloader from './../../../image/preloader.svg'

const Preloader = () => {

    return (
        <div className='preloader'>
            <img className='preloader__img' src={preloader} alt="preloader"/>
        </div>
    )
}


export default Preloader