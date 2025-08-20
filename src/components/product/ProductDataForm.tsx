import React from "react";

export default function ProductDataForm({ data, onChange }: { data: any; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Product Name</label>
      <input type="text" name="name" value={data.name} onChange={onChange} className="p-2 rounded bg-[#23232a] border border-gray-700 text-white" required />
      <label className="font-medium">Description</label>
      <input type="text" name="description" value={data.description} onChange={onChange} className="p-2 rounded bg-[#23232a] border border-gray-700 text-white" required />
      <label className="font-medium">Brand</label>
      <input type="text" name="brand" value={data.brand} onChange={onChange} className="p-2 rounded bg-[#23232a] border border-gray-700 text-white" required />
      <label className="font-medium">Image URL</label>
      <input type="text" name="imageUrl" value={data.imageUrl} onChange={onChange} className="p-2 rounded bg-[#23232a] border border-gray-700 text-white" required />
      <label className="font-medium">Tags (comma separated)</label>
      <input type="text" name="tags" value={data.tags} onChange={onChange} className="p-2 rounded bg-[#23232a] border border-gray-700 text-white" />
    </div>
  );
}
