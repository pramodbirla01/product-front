import React from "react";
import { Select } from "../ui/select";

export default function ProductCategoryForm() {
  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="font-medium">Category</label>
      <Select>
        <option value="">Select category</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </Select>
    </div>
  );
}
