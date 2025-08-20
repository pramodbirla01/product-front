import React from "react";
import { Input } from "../ui/input";

export default function ProductInventoryForm() {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">SKU</label>
      <Input type="text" placeholder="Enter SKU" />
      <label className="font-medium mt-2">Quantity/Stock</label>
      <Input type="number" placeholder="Enter quantity" min="0" />
      <label className="font-medium mt-2">Barcode/QR code</label>
      <Input type="text" placeholder="Enter barcode or QR code" />
    </div>
  );
}
