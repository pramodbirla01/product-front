import React from "react";
import { Input } from "../ui/input";

export default function ProductImageForm() {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Product Image</label>
      <Input type="file" accept="image/*" />
      <label className="font-medium mt-2">Product Name</label>
      <Input type="text" placeholder="Enter product name" />
      <label className="font-medium mt-2">Description</label>
      <Input type="text" placeholder="Enter description" />
    </div>
  );
}
