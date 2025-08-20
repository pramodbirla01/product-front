import React, { useState } from "react";

export default function VariantForm({ variants, setVariants }: { variants: any[]; setVariants: (v: any[]) => void }) {
  const [variant, setVariant] = useState({ price: "", salePrice: "", stock: "", weight: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVariant({ ...variant, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (!variant.price || !variant.stock) return;
    setVariants([...variants, variant]);
    setVariant({ price: "", salePrice: "", stock: "", weight: "" });
  };

  const handleRemove = (idx: number) => {
    setVariants(variants.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="font-medium">Add Variant</label>
      <div className="flex gap-2">
        <input type="number" name="price" value={variant.price} onChange={handleChange} placeholder="Price" className="p-2 rounded bg-[#23232a] border border-gray-700 text-white w-24" />
        <input type="number" name="salePrice" value={variant.salePrice} onChange={handleChange} placeholder="Sale Price" className="p-2 rounded bg-[#23232a] border border-gray-700 text-white w-24" />
        <input type="number" name="stock" value={variant.stock} onChange={handleChange} placeholder="Stock" className="p-2 rounded bg-[#23232a] border border-gray-700 text-white w-24" />
        <input type="number" name="weight" value={variant.weight} onChange={handleChange} placeholder="Weight" className="p-2 rounded bg-[#23232a] border border-gray-700 text-white w-24" />
        <button type="button" onClick={handleAdd} className="bg-white text-black px-3 py-1 rounded">Add Variant</button>
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {variants.map((v, idx) => (
          <div key={idx} className="bg-[#23232a] border border-gray-700 rounded p-2 flex flex-col min-w-[150px] relative">
            <span>Price: {v.price}</span>
            {v.salePrice && <span>Sale: {v.salePrice}</span>}
            <span>Stock: {v.stock}</span>
            {v.weight && <span>Weight: {v.weight}</span>}
            <button type="button" onClick={() => handleRemove(idx)} className="absolute top-1 right-1 text-xs text-red-400">x</button>
          </div>
        ))}
      </div>
    </div>
  );
}
