import React from "react";
import { Input } from "../ui/input";

export default function ProductPricingForm() {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Price</label>
      <Input type="number" placeholder="Enter price" min="0" step="0.01" />
      <label className="font-medium mt-2">Discount/Sale Price</label>
      <Input type="number" placeholder="Enter discount price" min="0" step="0.01" />
    </div>
  );
}
