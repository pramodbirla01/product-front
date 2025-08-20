import axios from "axios";

export const fetchCategories = async () => {
  const res = await axios.get("http://localhost:5000/category");
  return res.data;
};

export const addCategory = async (name: string) => {
  const res = await axios.post("http://localhost:5000/category", { name });
  return res.data;
};
