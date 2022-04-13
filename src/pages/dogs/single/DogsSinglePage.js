import useUpdateDog from "../../../context/mutations/updateDog";
import { useState, useEffect } from "react";

const { default: useDog } = require("../../../context/queries/useDog");

const DogsSinglePage = ({ dogName }) => {
  const { data: dog } = useDog(dogName);

  return (
    <div className="p-10 space-y-4">
      <div className="text-xl text-center font-bold">Doges Webpage</div>
      {dog ? (
        <>
          {" "}
          <div>Name: {dog?.Name}</div>
          <div>Breed: {dog?.Breed}</div>
          <div>Is Alive? {dog?.IsLiving ? "True": "False"</div>
          <img src={dog?.Image} width={400} alt="doggy dog" />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default DogsSinglePage;
