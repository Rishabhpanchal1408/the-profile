import React from 'react'

const Icons = (props) => {
    return (
        <>
            <div className='col-4 mt-4 ps-2 mb-4'>
                <i className={props.icons.icon}></i>
                <h5 className='text-muted  ps-5'>{props.icons.heading}</h5>
            </div>
        </>
    )
}

export default Icons