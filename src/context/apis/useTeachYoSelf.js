import axios from "axios";

const useTeachYoSelf = () => {
  const api = axios.create();
  return api;
};

export default useTeachYoSelf;
