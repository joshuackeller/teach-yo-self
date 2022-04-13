const { useQuery } = require("react-query");
const { default: useTeachYoSelf } = require("../apis/useTeachYoSelf");

export const GetDog = async (name) => {
  const API = useTeachYoSelf();
  const { data: dog } = await API.get(`/api/test/${name}`);
  return dog;
};

export const KEY = "DOG";

const useDog = (dogName) => {
  return useQuery([KEY, dogName], () => GetDog(dogName));
};

export default useDog;
