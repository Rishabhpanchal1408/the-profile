import React from 'react'

const Skills = () => {
    return (
        <>
            <div className="container mb-3 mt-3">
            <i class="fas fa-asterisk fa-2x float-start text-success"></i>
            <h4 className='text-muted ps-5 mb-3 '>Skills</h4>
                <div class="container pt-2">
                    <h4>Adobe Photoshop</h4>
                    <div class="progress">
                        <div class="progress-bar bg-success adobe">90%</div>
                    </div>
                </div>
                <div class="container pt-2">
                    <h4>Photography</h4>
                    <div class="progress">
                        <div class="progress-bar bg-success photo">80%</div>
                    </div>
                </div>
                <div class="container pt-2">
                    <h4>Illustrator</h4>
                    <div class="progress">
                        <div class="progress-bar bg-success illustrator">75%</div>
                    </div>
                </div>
                <div class="container pt-2">
                    <h4>Media</h4>
                    <div class="progress">
                        <div class="progress-bar bg-success media">50%</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills