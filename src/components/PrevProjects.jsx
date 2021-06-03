import React from "react";

const PrevProjects = () => {
  let project = localStorage.getItem("project");
  let projectTwo = localStorage.getItem("projectTwo");
  let projectThree = localStorage.getItem("projectThree");
  project = JSON.parse(project);
  projectTwo = JSON.parse(projectTwo);
  projectThree = JSON.parse(projectThree);
  return (
    <div>
      {project != undefined ? (
        <React.Fragment>
          <hr />
          <div className="flex justify-around text-2xl p-4">
            <h2>{project != undefined ? project.title : ""}</h2>
            <p>R$ {project != undefined ? project.value : ""}</p>
          </div>
          <hr />
        </React.Fragment>
      ) : null}

      {projectTwo != undefined ? (
        <React.Fragment>
          <div className="flex justify-around text-2xl p-4">
            <h2>{projectTwo != undefined ? projectTwo.title : ""}</h2>
            <p>R$ {projectTwo != undefined ? projectTwo.value : ""}</p>
          </div>
          <hr />
        </React.Fragment>
      ) : null}

      {projectThree != undefined ? (
        <React.Fragment>
          <hr />
          <div className="flex justify-around text-2xl p-4">
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
