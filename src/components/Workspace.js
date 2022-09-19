import React from 'react'

const Workspace = (props) => {
  return (
    <>
            <div className='ms-3 mt-5 '>
                <h4 className='text-muted'>{props.work.head}</h4>
                <i className={props.work.logo}></i>
                <h6 className='pt-1 ps-4 text-success'>{props.work.date}</h6>
                <p>{props.work.para}</p>
            </div>
        </>
  )
}

export default Workspace