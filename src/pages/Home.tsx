import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import bannerImage from '@/assets/banner-deals.jpg';

const Home = () => {
  const rollbackProducts = products.filter(p => p.isRollback);
  const featuredProducts = products.slice(0, 12);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-walmart-gray-light/20">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-primary via-walmart-blue-light to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-pattern-hero opacity-30"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Save money. Live better.
              </h1>
              <p className="text-xl mb-6 opacity-90">
                Shop thousands of items with everyday low prices and free shipping on orders $35+
              </p>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                <Button size="lg" className="bg-walmart-yellow text-walmart-yellow-foreground hover:bg-walmart-yellow/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Shop Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/quick-delivery">
                  <Button size="lg" className="bg-sale-red text-sale-red-foreground hover:bg-sale-red/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Get In 10 Mins
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/gamification">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    Rewards Hub
                    <TrendingUp className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  Weekly Ad
                </Button>
              </div>
            </div>
            <div className="relative z-10">
              <img
                src={bannerImage}
                alt="Great Deals"
                className="rounded-lg shadow-2xl w-full transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 bg-walmart-yellow text-walmart-yellow-foreground px-4 py-2 rounded-full font-bold text-lg shadow-lg animate-pulse">
                Save Big!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4 py-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-walmart-yellow/5 to-transparent"></div>
        <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <Card className="hover:shadow-lg transition-all duration-300 h-full transform hover:scale-105 hover:bg-gradient-to-br hover:from-walmart-yellow/10 hover:to-primary/10 border-2 hover:border-walmart-yellow/30">
                <CardContent className="p-4 text-center">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Rollback Deals */}
      <section className="bg-gradient-to-r from-walmart-gray-light via-background to-walmart-gray-light relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-rollback"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Badge className="bg-gradient-to-r from-sale-red to-red-600 text-sale-red-foreground text-lg px-4 py-2 shadow-lg animate-pulse">
                Rollbacks
              </Badge>
              <h2 className="text-2xl font-bold">Great Value, Every Day</h2>
            </div>
            <Link to="/deals">
              <Button variant="outline" className="hover:bg-sale-red hover:text-sale-red-foreground transition-all duration-300 shadow-md hover:shadow-lg">
                View All Deals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {rollbackProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 fill-walmart-yellow text-walmart-yellow" />
            <h2 className="text-2xl font-bold">Top Picks for You</h2>
          </div>
          <div className="flex gap-3">
            <Link to="/district">
              <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Walmart Spot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Services Banner */}
      <section className="bg-gradient-to-br from-primary via-walmart-blue-light to-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-services"></div>
        <div className="container mx-auto px-4 py-12">
          <div className="text-center relative z-10">
            <h2 className="text-3xl font-bold mb-4">More Ways to Shop</h2>
            <p className="text-xl mb-8 opacity-90">
              Pickup, delivery, and more services to make shopping easier
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-primary-foreground text-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-walmart-yellow">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-walmart-yellow/10 rounded-full -mr-8 -mt-8"></div>
                  <div className="text-3xl mb-2">🚚</div>
                  <h3 className="font-bold mb-2">Free Delivery</h3>
                  <p className="text-sm">On orders $35+ or with Walmart+</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-walmart-yellow">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-walmart-yellow/10 rounded-full -mr-8 -mt-8"></div>
                  <div className="text-3xl mb-2">🏪</div>
                  <h3 className="font-bold mb-2">Store Pickup</h3>
                  <p className="text-sm">Order online, pickup in store</p>
                </CardContent>
              </Card>
              <Card className="bg-primary-foreground text-primary hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 hover:border-walmart-yellow">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-walmart-yellow/10 rounded-full -mr-8 -mt-8"></div>
                  <div className="text-3xl mb-2">⚡</div>
                  <h3 className="font-bold mb-2">Same-Day Delivery</h3>
                  <p className="text-sm">Get it today with Walmart+</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;