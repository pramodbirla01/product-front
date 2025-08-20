import React from "react";
import ProductImageForm from "./ProductImageForm";
import ProductCategoryForm from "./ProductCategoryForm";
import ProductPricingForm from "./ProductPricingForm";
import ProductInventoryForm from "./ProductInventoryForm";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductMetaForm from "./ProductMetaForm";
import { Button } from "../ui/button";

export default function ProductForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-[#18181b] max-w-4xl mx-auto mt-8 text-white">
      <h2 className="text-lg font-bold mb-6">Add Product</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Block 1: Basic Info */}
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-2">
          <ProductImageForm />
        </div>
        {/* Block 2: Category & Pricing */}
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-2">
          <ProductCategoryForm />
          <ProductPricingForm />
        </div>
        {/* Block 3: Inventory & Details */}
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-2">
          <ProductInventoryForm />
        </div>
        {/* Block 4: Meta */}
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-2">
          <ProductDetailsForm />
          <ProductMetaForm />
        </div>
        {/* Actions (spans both columns) */}
        <div className="md:col-span-2 flex gap-2 justify-end mt-2">
          <Button type="button" variant="outline" onClick={onClose} className="bg-transparent border-gray-600 text-white hover:bg-gray-800">Cancel</Button>
          <Button type="submit" className="bg-white text-black hover:bg-gray-200">Save</Button>
        </div>
      </form>
    </div>
  );
}
