import React, { useEffect, useState } from "react";
import { fetchCategories, addCategory } from "../../api/category";

export default function CategoryForm({ selected, onSelect }: { selected: string; onSelect: (id: string) => void }) {
  const [categories, setCategories] = useState<any[]>([]);
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories().then(setCategories);
  }, []);

  const handleAdd = async () => {
    if (!newCategory.trim()) return;
    setLoading(true);
    const cat = await addCategory(newCategory);
    setCategories((prev) => [...prev, cat]);
    setNewCategory("");
    setLoading(false);
    onSelect(cat.id);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Category</label>
      <select
        className="p-2 rounded bg-[#23232a] border border-gray-700 text-white"
        value={selected}
        onChange={e => onSelect(e.target.value)}
      >
        <option value="">Select category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <div className="flex gap-2 mt-2">
        <input
          type="text"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="p-2 rounded bg-[#23232a] border border-gray-700 text-white flex-1"
        />
        <button type="button" onClick={handleAdd} disabled={loading} className="bg-white text-black px-3 py-1 rounded">
          Add
        </button>
      </div>
    </div>
  );
}
