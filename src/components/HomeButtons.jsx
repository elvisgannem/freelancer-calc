import React from 'react'
import { Link } from 'react-router-dom'

const HomeButtons = () => {
    return (
        
        <div className="h-75p flex flex-col justify-center items-center gap-10 lg:flex-row lg:px-24 xl:px-28">

                <button className="bg-two bg-opacity-75 p-6 rounded-md text-white text-xl w-2/3 shadow-lg relative bottom-5 focus:outline-none cursor-pointer md:w-2/4 lg:text-4xl"><Link to='/newproject'><p className="inline-block lg:block">Calcular</p> novo projeto</Link></button>

                <button className="bg-three bg-opacity-75 rounded-md text-white text-lg w-2/3 p-6 shadow-lg relative bottom-5 focus:outline-none cursor-pointer md:w-2/4 lg:text-4xl"><p className="inline-block lg:block">Ver projetos</p> anteriores</button>
            
        </div>
        
    )
}

export default HomeButtons
