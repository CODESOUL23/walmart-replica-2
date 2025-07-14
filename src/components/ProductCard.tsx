import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group hover:shadow-xl transition-all duration-300 h-full transform hover:scale-105 hover:bg-gradient-to-br hover:from-background hover:to-walmart-yellow/5 border hover:border-walmart-yellow/30">
        <CardContent className="p-3">
          {/* Product Image */}
          <div className="relative mb-3">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-32 sm:h-36 object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
            />
            {product.isRollback && (
              <Badge className="absolute top-1 left-1 bg-gradient-to-r from-sale-red to-red-600 text-sale-red-foreground text-xs px-2 py-1 shadow-lg animate-pulse">
                Rollback
              </Badge>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
          </div>

          {/* Product Info */}
          <div className="space-y-1.5">
            <h3 className="font-medium text-xs sm:text-sm line-clamp-2 text-foreground group-hover:text-primary transition-colors duration-300">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center space-x-1">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-2.5 w-2.5 ${
                      i < 4 ? 'fill-walmart-yellow text-walmart-yellow' : 'text-muted-foreground'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground hidden sm:inline">(124)</span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-1 flex-wrap">
              <span className="text-sm sm:text-base font-bold text-foreground">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full mt-2 bg-walmart-yellow text-walmart-yellow-foreground hover:bg-walmart-yellow/90 shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              size="sm"
            >
              <ShoppingCart className="h-3 w-3 mr-1" />
              <span className="text-xs">Add to Cart</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;