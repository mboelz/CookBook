import React from 'react';
import Image404 from '../Assets/img/404-marshmallow.png';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[90.1vh]">
      <div>
        <img
          src={Image404}
          alt="404"
          className="w-20 animate-spin animate-bounce"
        />
      </div>
      <div className="bg-[#B3DEE2] text-center rounded-xl text-xl font-bold m-4 p-4">
        <h1 className="text-xl font-bold text-center">
          Oh nooo, page not found
        </h1>
        <h2 className="text-xl text-center">Programmer was lazy</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
