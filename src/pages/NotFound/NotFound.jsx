import React from "react";
import { HeroPages } from "../../components";

const NotFound = () => {
  return (
    <>
      <HeroPages />
      <div className='h-screen grid place-content-center'>
        <h1>404 not found</h1>
      </div>
    </>
  );
};

export default NotFound;
