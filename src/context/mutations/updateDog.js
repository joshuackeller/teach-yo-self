import { useMutation } from "react-query";
import useTeachYoSelf from "../apis/useTeachYoSelf";

const UpdateDog = async ({ dogName, dogBreed }) => {
  const API = useTeachYoSelf();

  const params = {
    TableName: "Dogs",
    Key: {
      Name: dogName,
    },
    Attributes: {
      Breed: dogBreed,
    },
  };
  console.log("a");
  const dogUpdate = await API.post(`/api/test/${dogName}`, params);
  console.log("b");
  return dogUpdate;
};

const useUpdateDog = () => {
  return useMutation(({ dogName, dogBreed }) =>
    UpdateDog({ dogName, dogBreed })
  );
};

export default useUpdateDog;
