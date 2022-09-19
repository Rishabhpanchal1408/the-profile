import React from 'react'
import Datalist from './Datalist'
const Education = () => {
    var Data = [
        {
            heads: 'w3schools.com',
            design: 'far fa-calendar-alt text-success float-start pt-1',
            Year: 'Forever',
            p: 'Web Development! All I need to know in one place',
        }, {
            heads: 'London Bussiness School',
            design: 'far fa-calendar-alt text-success float-start pt-1',
            Year: '2013 - 2015',
            p: 'Master Degree',
        }, {
            heads: 'School Of Coding',
            design: 'far fa-calendar-alt text-success float-start pt-1',
            Year: '2010 - 2013',
            p: 'Bachelor Degree',
        }
    ]
    return (
        <>
            <i className='fas fa-certificate fa-3x text-success float-start pe-3 ps-3'></i>
            <h4 className='pt-2  text-muted'>Education</h4>
            <div>
                {
                    Data.map(function (Data, index) {
                        return <Datalist key={index} Data={Data} />
                    })
                }
            </div>
        </>
    )
}

export default Education