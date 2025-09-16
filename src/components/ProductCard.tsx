"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";

type Props = { product: Product };

export function ProductCard({ product }: Props) {
  return (
    <Card className="hover:shadow-lg transition cursor-pointer">
      <CardContent className="p-6 text-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />
        <h3 className="text-xl font-medium mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-gray-800 font-semibold mb-4">{product.price}</p>
        <Button className="rounded-2xl px-6 py-2 text-lg">Add to Cart</Button>
      </CardContent>
    </Card>
  );
}
