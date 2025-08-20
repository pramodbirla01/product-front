import React from "react";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="bg-[#23232a] border border-gray-700 rounded-lg p-4 flex flex-col items-center w-64 shadow-md">
      <img
        src={product.imageUrl || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-32 h-32 object-cover rounded mb-2 border border-gray-800"
      />
      <h3 className="text-lg font-bold mb-1 text-center">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-1 text-center">{product.brand}</p>
      <p className="text-gray-300 text-sm mb-1 text-center">{product.description}</p>
      <div className="flex flex-wrap gap-1 mb-2 justify-center">
        {product.tags && product.tags.map((tag: string, idx: number) => (
          <span key={idx} className="bg-gray-700 text-xs px-2 py-0.5 rounded-full">{tag}</span>
        ))}
      </div>
      {product.variants && product.variants.length > 0 && (
        <div className="w-full mt-2">
          <div className="text-xs text-gray-400 mb-1">Variants:</div>
          {product.variants.map((v: any, idx: number) => (
            <div key={idx} className="bg-gray-800 rounded p-2 mb-1 flex flex-col items-center">
              <span>Price: <b>₹{v.price}</b></span>
              {v.salePrice && <span>Sale: <b>₹{v.salePrice}</b></span>}
              <span>Stock: {v.stock}</span>
              {v.weight && <span>Weight: {v.weight}g</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
