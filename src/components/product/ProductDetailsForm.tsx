import React from "react";
import { Input } from "../ui/input";

export default function ProductDetailsForm() {
  return (
    <div className="flex flex-col gap-2">
  <label className="font-medium">Brand/Manufacturer</label>
  <Input type="text" placeholder="Enter brand or manufacturer" />
  <label className="font-medium mt-2">Weight</label>
  <Input type="text" placeholder="Enter weight" />
    </div>
  );
}
