import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const NewProjectHeader = () => {

    
    return (
        <div className="">

            <div className="flex justify-between p-2 md:justify-start">
                <Link to='/'><FontAwesomeIcon icon={faArrowLeft} className="text-4xl"/></Link>
                
                
                    <h2 className="text-2xl pr-4 md:ml-8">Calcular novo projeto</h2>
                

            </div>

            <hr className="h-5p border-8 border-two mt-2" />

        </div>
    )
}

export default NewProjectHeader
