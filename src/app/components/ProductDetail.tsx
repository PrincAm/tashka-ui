'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import {
  ShoppingCart,
  ArrowLeft,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/app/context/CartContext';
import { useRouter } from 'next/navigation';

import { Product } from '@/app/components/ProductCard';

const ProductDetail = (product: Product) => {
  const [quantity, setQuantity] = useState<number | string>(1);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { id, name, prices, description, images, metadata } = product;

  const price = prices[0].unit_amount;

  const handleAddToCart = () => {
    const validQuantity =
      typeof quantity === 'string' ? parseInt(quantity, 10) : quantity;

    if (isNaN(validQuantity)) {
      toast({
        title: 'Error',
        description: 'Invalid quantity. Please enter a valid number.',
      });
      return;
    }

    console.log(validQuantity);

    addToCart({
      id,
      name,
      price,
      quantity: validQuantity,
    });

    toast({
      title: 'Added to Cart',
      description: `${quantity} x ${name} added to your cart.`,
    });
  };

  const incrementQuantity = () => {
    setQuantity((prev) => {
      const numericValue =
        prev === '' ? 0 : typeof prev === 'string' ? parseInt(prev, 10) : prev;
      return Math.min(numericValue + 1, Number(metadata.quantity));
    });
  };

  const decrementQuantity = () => {
    setQuantity((prev) => {
      const numericValue =
        prev === '' ? 0 : typeof prev === 'string' ? parseInt(prev, 10) : prev;
      return Math.max(numericValue - 1, 1);
    });
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value; // Get the raw input value as a string

    // Validate and set quantity only if it's a number or empty
    if (/^\d*$/.test(value)) {
      const numericValue = parseInt(value, 10);

      if (
        !isNaN(numericValue) &&
        numericValue >= 1 &&
        numericValue <= Number(metadata.quantity)
      ) {
        setQuantity(numericValue); // Valid range: Update quantity
      } else if (value === '') {
        setQuantity(''); // Allow empty input for ongoing edits
      }
    }
  };

  const handleQuantityBlur = () => {
    // Set default value to 1 if the input is empty
    if (quantity === '' || (typeof quantity === 'number' && quantity < 1)) {
      setQuantity(1);
    }
  };

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const technicalSpecs = [
    { label: 'Height', value: metadata.height, unit: 'cm' },
    { label: 'Width', value: metadata.width, unit: 'cm' },
    { label: 'Depth', value: metadata.depth, unit: 'cm' },
    { label: 'Volume', value: metadata.volume, unit: 'l' },
    { label: 'Weight', value: metadata.weight, unit: 'kg' },
  ];

  return (
    <div className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-6xl mx-auto">
        <CardContent className="p-6 sm:p-10">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-6 text-gray-600 hover:text-pink-500"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="relative">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {images.map((src, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%]">
                      <div className="relative h-96 md:h-[500px] rounded-lg">
                        <Image
                          src={src}
                          alt={`${name} - Image ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollPrev}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
                onClick={scrollNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
              <div className="flex justify-center mt-4 space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === selectedIndex ? 'bg-pink-500' : 'bg-gray-300'
                    }`}
                    onClick={() => emblaApi?.scrollTo(index)}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">{name}</h1>
              <p className="text-2xl font-bold text-gray-800">
                {price?.toFixed(2)} Kč
              </p>
              <p className="text-gray-600">{description}</p>
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="quantity-select"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Quantity
                  </label>
                  <div className="flex items-center">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={decrementQuantity}
                      className="rounded-r-none"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      id="quantity-input"
                      value={quantity}
                      onChange={handleQuantityChange}
                      onBlur={handleQuantityBlur}
                      min="1"
                      max="99"
                      className="w-16 text-center rounded-none"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={incrementQuantity}
                      className="rounded-l-none"
                      aria-label="Increase quantity"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-pink-500 hover:bg-pink-600 text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">
                  Technical Specifications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {technicalSpecs.map(
                    (spec, index) =>
                      spec.value && (
                        <div key={index} className="flex justify-between">
                          <span className="font-medium">{spec.label}:</span>
                          <div>
                            <span>{spec.value}</span>
                            <span> {spec.unit}</span>
                          </div>
                        </div>
                      )
                  )}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDetail;
