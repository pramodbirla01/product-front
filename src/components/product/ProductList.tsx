import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="mt-8 text-center text-gray-400">Loading products...</div>;

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.length === 0 ? (
        <div className="col-span-full text-center text-gray-400">No products found.</div>
      ) : (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      )}
    </div>
  );
}
