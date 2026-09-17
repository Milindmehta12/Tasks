"use client";

import { useSearchParams } from "next/navigation";

export default function Products() {
  const searchParams = useSearchParams();

  const category = searchParams.get("category")
  const price = searchParams.get("price")

  return (
    <div>
      <h1>Products</h1>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </div>
  );
}