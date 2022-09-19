import React from 'react'
import Workspace from './Workspace'

const WorkExperience = () => {
    var workList = [
        {
            head: 'Front End Developer / w3schools.com',
            logo: 'far fa-calendar-alt text-success float-start pt-1',
            date: 'Jan-25',
            para: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
        }, {
            head: 'Web Developer /something.com',
            logo: 'far fa-calendar-alt text-success float-start pt-1',
            date: 'Mar 2012 - Dec 2014',
            para: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
        }, {
            head: 'Graphic Designer / designsomething.com',
            logo: 'far fa-calendar-alt text-success float-start pt-1',
            date: 'Jun 2010 - Mar 2012',
            para: 'Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste.',
        }
    ]
    return (
        <>
            <i className='fas fa-suitcase fa-3x text-success float-start pe-3 ps-3'></i>
            <h4 className='pt-2  text-muted'>Work Experience</h4>
            <div>
                {
                    workList.map(function (work, index) {
                        return <Workspace key={index} work={work} />
                    })
                }
            </div>
        </>
    )
}

export default WorkExperience