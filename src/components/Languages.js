import React from 'react'

const Languages = () => {
    return (
        <>
            <div className="container mb-5">
            <i class="fas fa-globe-americas fa-2x float-start text-success"></i>
            <h4 className='text-muted ps-5 mb-3'>languages</h4>
                <div class="container pt-2">
                    <h5>English</h5>
                    <div class="progress">
                        <div class="progress-bar bg-success english"></div>
                    </div>
                </div>
                <div class="container pt-2">
                    <h5>Spanish</h5>
                    <div class="progress">
                        <div class="progress-bar bg-success spanish"></div>
                    </div>
                </div>
                <div class="container pt-2">
                    <h5>German</h5>
                    <div class="progress">
                        <div class="progress-bar bg-success german"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Languages