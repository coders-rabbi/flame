"use client";

import { useState, useEffect } from "react";

// ডাটা টাইপ ডিক্লেয়ারেশন
export interface TProduct {
  id: number;

  basicInfo: {
    productName: string;
    shortDescription: string;
    longDescription: string;
  };

  pricingInventory: {
    price: number;
    discountPrice: number;
    sku: string;
    stockKeepingUnit: number;
    stockStatus: string;
  };

  variation: {
    size: string[];
    color: string;
    material: string;
  };

  media: {
    mainImage: string;
    galleryImages: string[];
    thumbnailImage: string;
  };

  organization: {
    category: string;
    searchTags: string[];
    brand: string;
  };

  advanceInfo: {
    rating: number;
    reviews: number;
    weight: string;
    dimensions: string;
    warrantyReturnPolicy: string;
  };
}

const useProducts = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://al-arafatfoundation-server.vercel.app/products",
        );

        if (!response.ok) {
          throw new Error("ডাটা ফেচ করতে সমস্যা হয়েছে!");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
