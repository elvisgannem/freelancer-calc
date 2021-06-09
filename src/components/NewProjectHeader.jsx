import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NewProjectHeader = () => {

    
    return (
        <div className="absolute p-2 md:p-4">

            <Link to="/"><FontAwesomeIcon icon={faArrowLeft} className="text-white text-2xl md:text-3xl"/></Link>

        </div>
    )
}

export default NewProjectHeader
