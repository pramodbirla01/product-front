import React from "react";
import { Input } from "../ui/input";

export default function ProductInventoryForm() {
  return (
    <div className="flex flex-col gap-2">
  <label className="font-medium">Quantity/Stock</label>
  <Input type="number" placeholder="Enter quantity" min="0" />
    </div>
  );
}
