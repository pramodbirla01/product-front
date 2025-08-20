
import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductDataForm from "./ProductDataForm";
import CategoryForm from "./CategoryForm";
import VariantForm from "./VariantForm";
import { addProduct } from "../../api/product";
import { addVariant } from "../../api/variant";

export default function ProductForm({ onClose }: { onClose: () => void }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    brand: "",
    imageUrl: "",
    tags: "",
    categoryId: ""
  });
  const [categoryId, setCategoryId] = useState("");
  const [variants, setVariants] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleProductChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async () => {
    setLoading(true);
    try {
  const tagsArr = product.tags.split(",").map((t: string) => t.trim()).filter(Boolean);
      const prodRes = await addProduct({
        ...product,
        tags: tagsArr,
        categoryId: categoryId
      });
      // Add all variants
      for (const v of variants) {
        await addVariant({ ...v, productId: prodRes.id });
      }
      onClose();
    } catch (err) {
      alert("Failed to add product or variants");
    }
    setLoading(false);
  };

  return (
    <div className="p-6 border border-gray-800 rounded-lg bg-[#18181b] max-w-2xl mx-auto mt-8 text-white">
      <h2 className="text-lg font-bold mb-6">Add Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-4">
          <CategoryForm selected={categoryId} onSelect={setCategoryId} />
        </div>
        <div className="border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-4">
          <ProductDataForm data={product} onChange={handleProductChange} />
        </div>
        <div className="md:col-span-2 border border-gray-700 rounded-lg p-4 bg-[#23232a] flex flex-col gap-4">
          <VariantForm variants={variants} setVariants={setVariants} />
        </div>
      </div>
      <div className="flex gap-2 justify-end mt-4">
        <Button type="button" variant="outline" onClick={onClose} className="bg-transparent border-gray-600 text-white hover:bg-gray-800">Cancel</Button>
        <Button type="button" className="bg-white text-black hover:bg-gray-200" onClick={handleAddProduct} disabled={loading || !categoryId || !product.name || !variants.length}>
          {loading ? "Saving..." : "Add Product"}
        </Button>
      </div>
    </div>
  );
}
