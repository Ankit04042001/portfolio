import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import './css/project.css'

function Project(props: any) {
    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className='project p-2'>
                <a href={props.projectLink}>
                    <abbr title={props.projectName}>
                        <div className='thumbnail'>
                            <img src={props.thumbnail} />
                            <div className='outer-layer'>
                                <p>{props.projectName}<br />
                                    {props.projectTitle} <span className='launch-icon'><LaunchIcon /></span></p>
                            </div>
                        </div>
                    </abbr>
                </a>
            </div>
        </div>
    )
}

export default Project