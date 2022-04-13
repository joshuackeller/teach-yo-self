import useUpdateDog from "../../../context/mutations/updateDog";
import { useState, useEffect } from "react";

const { default: useDog } = require("../../../context/queries/useDog");

const DogsSinglePage = ({ dogName }) => {
  const { data: dog } = useDog(dogName);
  const { mutate: updateDog } = useUpdateDog();
  const [dogBreed, setDogBreed] = useState();

  useEffect(() => {
    setDogBreed(dog?.Breed);
  }, [dog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDog({
      dogName,
      dogBreed,
    });
  };

  return (
    <div className="p-10 space-y-4">
      <div className="text-xl text-center font-bold">Doges Webpage</div>
      {dog ? (
        <>
          {" "}
          <div>Name: {dog?.Name}</div>
          <div>Breed: {dog?.Breed}</div>
          <img src={dog?.Image} width={400} alt="doggy dog" />
        </>
      ) : (
        <div>Loading...</div>
      )}
      {/* <form onSubmit={handleSubmit}>
        <label>Dog Breed</label>
        <br />
        <input
          className="border border-gray-800"
          value={dogBreed}
          onChange={(e) => setDogBreed(e.target.value)}
        />
        <br />
        <button className="bg-blue-600 text-white rounded shadow" type="submit">
          Make Changes
        </button>
      </form> */}
    </div>
  );
};

export default DogsSinglePage;
