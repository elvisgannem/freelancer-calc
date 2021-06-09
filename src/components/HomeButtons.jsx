import React from "react";
import { Link } from "react-router-dom";

const HomeButtons = () => {
  return (

    <div className="bg-principal-image w-full h-full bg-no-repeat bg-cover bg-center bg-local flex justify-center items-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-white text-2xl text-center md:text-3xl">
          Calculadora Freelancer
        </h1>
        <div className="flex gap-px justify-center">
          <Link to="/newproject">
            <button className="btn rounded-l-md">
              Novo projeto
            </button>
          </Link>

          <Link to="/prev">
          <button className="btn rounded-r-md">
            Ver projetos
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeButtons;
