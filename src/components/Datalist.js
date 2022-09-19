import React from 'react'

const Datalist = (props) => {
    return (
        <>
            <div className=' ms-3 mt-5 '>
                <h4 className='text-muted'>{props.Data.heads}</h4>
                <i className={props.Data.design}></i>
                <h6 className='pt-1 ps-4 text-success'>{props.Data.Year}</h6>
                <h6 >{props.Data.p}</h6>              
            </div>
        </>
    )
}

export default Datalist