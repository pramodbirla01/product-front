"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import ProductForm from "./ProductForm";

export default function ProductMain() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      <div className="flex items-start justify-start p-6">
        <Button
          onClick={() => setOpen(true)}
          className="bg-white text-black hover:bg-gray-200 border border-gray-300 px-6 py-2 rounded-lg shadow-md transition-colors"
        >
          Add Product
        </Button>
      </div>
      {open && <ProductForm onClose={() => setOpen(false)} />}
    </div>
  );
}
