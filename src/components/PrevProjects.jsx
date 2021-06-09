import React from "react";
/* eslint eqeqeq: 0 */

const PrevProjects = () => {
  let project = localStorage.getItem("project");
  let projectTwo = localStorage.getItem("projectTwo");
  let projectThree = localStorage.getItem("projectThree");
  project = JSON.parse(project);
  projectTwo = JSON.parse(projectTwo);
  projectThree = JSON.parse(projectThree);

  return (

    <div className="bg-principal-image w-full h-full bg-no-repeat bg-cover bg-center bg-local flex justify-center items-center">
      <div className="flex flex-col gap-6 md:gap-8">
        {project != undefined ? (
          <React.Fragment>
            <h2 className="text-white text-2xl md:text-3xl">
              {project != undefined ? project.title : ''} - <strong>R$ {project != undefined ? project.value : ''}</strong>
            </h2>
          </React.Fragment>
        ) : null}

        {projectTwo != undefined ? (

        <h2 className="text-white text-2xl md:text-3xl">
          {projectTwo != undefined ? projectTwo.title : ''} - <strong>R$ {projectTwo != undefined ? projectTwo.value : ''}</strong>
        </h2>

        ) : null}

        {projectThree != undefined ? (

        <h2 className="text-white text-2xl md:text-3xl">
          {projectThree != undefined ? projectThree.title : ''} - <strong>R$ {projectThree != undefined ? projectThree.value : ''}</strong>
        </h2>

        ) : null }
      </div>
    </div>
  );
};

export default PrevProjects;
