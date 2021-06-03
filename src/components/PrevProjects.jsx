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
    <div className="flex flex-col text-xl md:text-2xl ">
      {project != undefined ? (
        <React.Fragment>
          <hr />
          <div className="flex justify-around pt-2 pb-2 ">
            <h2 className="w-10">{project != undefined ? project.title : ""}</h2>
            <p className="w-24">R$ {project != undefined ? project.value : ""}</p>
          </div>
          <hr />
        </React.Fragment>
      ) : null}

      {projectTwo != undefined ? (
        <React.Fragment>
          <div className="flex justify-around pt-2 pb-2 ">
            <h2 className="w-10">{projectTwo != undefined ? projectTwo.title : ""}</h2>
            <p className="w-24">R$ {projectTwo != undefined ? projectTwo.value : ""}</p>
          </div>
          <hr />
        </React.Fragment>
      ) : null}
      
      {projectThree != undefined ? (
        <React.Fragment>
          <hr />
          <div className="flex justify-around pt-2 pb-2">
            <h2>{projectThree != undefined ? projectThree.title : ""}</h2>
            <p>R$ {projectThree != undefined ? projectThree.value : ""}</p>
          </div>
          <hr />
        </React.Fragment>
      ) : null}
    </div>
  );
};

export default PrevProjects;
