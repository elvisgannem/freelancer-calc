import React from 'react'

const Result = () => {

    return (
        <div className="h-4/5 flex justify-center items-center flex-col relative">
            <h1 className="text-7xl text-center text-one mb-12 md:text-8xl">R$ <strong className="text-6xl block text-black md:inline-block md:text-7xl">0,00</strong></h1>
            <p className="absolute bottom-0 text-gray-400">Entenda como o cálculo é feito.</p>
        </div>
    )
}

export default Result
