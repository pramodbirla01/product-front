import React from "react";
import { Input } from "../ui/input";

export default function ProductMetaForm() {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">Tags or Keywords</label>
      <Input type="text" placeholder="Enter tags or keywords" />
      <label className="font-medium mt-2">Status</label>
      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-black dark:text-white">
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <label className="font-medium mt-2">Rating/Reviews</label>
      <Input type="number" placeholder="Enter rating (1-5)" min="1" max="5" />
    </div>
  );
}
