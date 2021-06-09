import React, { useState } from "react";
/* eslint eqeqeq: 0 */
const NewProjectForm = () => {
  const [value, changePrice] = useState(0);

  //add the projects to the local storage

  function defineProject(project) {
    if (localStorage.project == undefined) {
      localStorage.setItem("project", JSON.stringify(project));
    } else {
      if (localStorage.projectTwo == undefined) {
        localStorage.setItem("projectTwo", JSON.stringify(project));
      } else {
        localStorage.setItem("projectThree", JSON.stringify(project));
      }
    }
  }

  function validateForm() {
    // capture in variable the value of the form

    let hoursForm = document.getElementById("hoursForm").value;
    let perHourForm = document.getElementById("perHourForm").value;
    let workspaceForm = document.getElementById("workspaceForm").value;
    let experienceForm = document.getElementById("experienceForm").value;
    let projectTitle = document.getElementById("projectTitle").value;

    //doing the price calculation

    // const hours = hoursForm * perHourForm
    // const workspace = (workspaceForm / 2000) * perHourForm
    // const result = (hours + workspace) * experienceForm

    let workspaceResult = (workspaceForm / 2000) * perHourForm * hoursForm;

    let resultWExp = hoursForm * perHourForm + workspaceResult;

    let resultPerc = resultWExp * 0.05;

    let resultExp = resultPerc * experienceForm;

    let result = resultExp + resultWExp;

    let project = {
      title: projectTitle,
      value: result.toFixed(2),
    };

    defineProject(project);

    return result.toFixed(2);
  }

  //prevent the default state in a form
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (

    <div className="bg-principal-image w-full h-full bg-no-repeat bg-cover bg-center bg-local flex justify-center items-center">
      <form
        className="flex flex-col items-center gap-2"
        id="newProjectForm"
        onSubmit={handleSubmit}
      >
        
          
            <p className="text-white text-sm">
              Quantas horas vai gastar neste projeto?
            </p>
            <input
              required
              type="text"
              className="rounded w-2/3 opacity-75 focus:outline-none md:w-4/5"
              id="hoursForm"
            />
          
          
            <p className="text-white text-sm">
              Quanto você quer ganhar por hora?
            </p>
            <input
              required
              type="text"
              id="perHourForm"
              className="rounded w-2/3 opacity-75 focus:outline-none  md:w-4/5"
            />
          
        

        
          
            <p className="text-white text-sm">
              Qual o valor das suas ferramentas?
            </p>
            <input
              required
              type="text"
              id="workspaceForm"
              className="rounded w-2/3 opacity-75 focus:outline-none  md:w-4/5"
            />
          
          
            <p className="text-white text-sm">
              Qual a sua experiencia em anos?
            </p>
            <input
              required
              type="text"
              id="experienceForm"
              className="rounded w-2/3 opacity-75 focus:outline-none  md:w-4/5"
            />
          
        

        
          
            <p className="text-white">Coloca um titulo</p>
            <input
              required
              type="text"
              id="projectTitle"
              className="rounded w-2/3 opacity-75 focus:outline-none  md:w-4/5"
            />
          

          
            <input
              type="submit"
              value="Calcular"
              className="w-2/3 mt-3 py-1 rounded bg-green-500 text-white font-medium  md:w-4/5"
              onClick={() => changePrice(validateForm())}
            />
          
        

        <h2 className="text-2xl mt-3 text-white font-bold md:text-4xl md:mt-6">
          R$ {value}
        </h2>
      </form>
    </div>
  );
};

export default NewProjectForm;
