import React, { useState } from 'react'

const NewProjectForm = () => {

    const [value, changePrice] = useState(0)

    function validateForm(){

        // capture in variable the value of the form

        let hoursForm = document.getElementById('hoursForm').value
        let perHourForm = document.getElementById('perHourForm').value
        let workspaceForm = document.getElementById('workspaceForm').value
        let experienceForm = document.getElementById('experienceForm').value

        //doing the price calculation


        // const hours = hoursForm * perHourForm
        // const workspace = (workspaceForm / 2000) * perHourForm
        // const result = (hours + workspace) * experienceForm

        let workspaceResult = ((workspaceForm / 2000) * perHourForm) * hoursForm 

        let resultWExp = (hoursForm * perHourForm) + workspaceResult

        let resultPerc = resultWExp * 0.05

        let resultExp = (resultPerc * experienceForm)

        let result = resultExp + resultWExp

        return result.toFixed(2)

        
    }

    //prevent the default state in a form
    function handleSubmit(e){
         e.preventDefault()
    }

    return (
        <div className="h-4/5 md:flex md:flex-col md:justify-center md:relative md:bottom-12">
            
                <form id="newProjectForm" onSubmit={handleSubmit} className="text-center pt-2 md:flex md:flex-col md:justify-center md:items-center">

                    <div className="md:flex md:w-70p md:justify-center md:items-end">
                    

                        <div className="md:w-60">

                            <p className="md:text-sm">Quantas horas você vai gastar neste projeto?</p>
                            <input type="text" id="hoursForm" className="w-4/5 border-gray-400 border bg-indigo-50 rounded-md mb-6 sm:w-3/5 md:w-52 outline-none" />

                        </div>

                        <div className="md:w-60">

                            <p className="md:text-sm">Quanto você quer ganhar por hora?</p>
                            <input type="text" id="perHourForm" className="w-4/5 border-gray-400 border bg-indigo-50 rounded-md mb-6 sm:w-3/5 md:w-52 outline-none" />
                            
                        </div>

                    </div>

                    <div className="md:flex md:w-70p md:justify-center md:items-end">
                        
                        

                        <div className="md:w-60">

                            <p className="md:text-sm">Qual o valor das suas ferramentas?</p>
                            <input type="text" id="workspaceForm" className="w-4/5 border-gray-400 border bg-indigo-50 rounded-md mb-6 sm:w-3/5 md:w-52 outline-none" />

                        </div>

                        <div className="md:w-60">

                            <p className="md:text-sm">Qual a sua experiencia em anos?</p>
                            <input type="text" id="experienceForm" className="w-4/5 border-gray-400 border bg-indigo-50 rounded-md mb-6 sm:w-3/5 md:w-52 outline-none" />
                            
                        </div>

                    </div>


                    <div className="md:flex md:w-70p md:justify-center md:items-center">
                        
                        <div className="md:w-60">

                        {/* <Link to='result' className=""> */}
                                <input type="submit" value="Calcular" onClick={() => changePrice(validateForm())} className="block m-auto mt-8 w-4/5 py-2 bg-two outline-none cursor-pointer rounded-lg text-white font-semibold text-xl sm:w-3/5 md:w-52 md:mt-0" />
                            {/* </Link> */}

                        </div>

                    </div>

                </form>

                <div className="text-center mt-6">
                    
                    <p className="text-one text-5xl">R$ <strong className="text-black block text-3xl">{value}</strong></p>
                </div>      

                      
            
        </div>

    )
}

export default NewProjectForm
