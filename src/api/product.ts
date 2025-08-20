import axios from "axios";

export const addProduct = async (data: any) => {
  const res = await axios.post("http://localhost:5000/product", data);
  return res.data;
};

export const fetchProducts = async () => {
  const res = await axios.get("http://localhost:5000/product");
  return res.data;
};
