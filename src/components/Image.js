import React from 'react'
import Education from './Education'
import Icons from './Icons'
import Languages from './Languages'
import Skills from './Skills'
import WorkExperience from './WorkExperience'

const Image = () => {
    var icons = [
        {
            icon: 'fas fa-briefcase fa-2x float-start text-success',
            heading: 'Designer',
        }, {
            icon: 'fas fa-house fa-2x float-start text-success',
            heading: 'London,UK',
        }, {
            icon: 'fas fa-envelope fa-2x float-start text-success',
            heading: 'ex@mail.com',
        }, {
            icon: 'fas fa-phone fa-2x float-start text-success',
            heading: '1224435534',

        }
    ]
    return (
        <>
            <div className='row mx-auto ms-5 mt-3 mb-3'>
                <div className='col-md-3  col-sm-12 border shadow  ps-0 pe-0'>
                    <img className='girl' src="https://www.w3schools.com/w3images/avatar_hat.jpg" />
                    <h3 className='text-center'>Jane Doe</h3>
                    <div className='container ms-2 mt-4'>
                        {
                            icons.map(function (icons, index) {
                                return <Icons key={index} icons={icons} />
                            })
                        }
                    </div>
                    <hr />

                    {/* Skills */}

                    <div className="container">
                        <Skills />
                    </div>
                    <hr />

                    {/* Languages */}

                    <div className="container">
                        <Languages />
                    </div>

                </div>
                <div className='container col-md-8 col-sm-12 ms-3 me-3 mx-auto'>

                    {/* <WorkExperience / Education column-8 */}

                    <div className='border shadow mb-2 p-4'>
                        <WorkExperience />
                    </div>
                    <div className='border shadow mb-2 p-4'>
                        <Education />
                    </div>
                </div>
            </div>

            {/* Footer */}

            <footer className='bg-success text-center p-4'>
                <h5>Find Me On Social Media</h5>
                <p>
                    <i className='fab fa-facebook-f text-white p-1'></i>
                    <i className='fab fa-twitter text-white p-1'></i>
                    <i className='fab fa-instagram text-white p-1'></i>
                    <i className='fab fa-snapchat text-white p-1'></i>
                    <i className='fab fa-pinterest text-white p-1'></i>
                    <i className='fab fa-linkedin text-white p-1'></i>
                </p>
                <p>
                    powered by <a href='https://www.w3schools.com/' className='text-white'>w3.School</a>
                </p>
            </footer>
        </>
    )
}

export default Image