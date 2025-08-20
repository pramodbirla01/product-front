import axios from "axios";

export const addVariant = async (data: any) => {
  const res = await axios.post("http://localhost:5000/variant", data);
  return res.data;
};
