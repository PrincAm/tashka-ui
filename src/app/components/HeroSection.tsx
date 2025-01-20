import { RefObject } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  collectionRef: RefObject<HTMLElement>;
}

const HeroSection = ({ collectionRef }: HeroSectionProps) => {
  const handleButtonClick = () => {
    collectionRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-pink-100 via-gray-100 to-purple-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800 leading-tight">
              Bags for Every <span className="text-pink-500">Style</span> and{' '}
              <span className="text-purple-600">Adventure</span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Discover our delightful collection of bags for women, men, and
              kids!
            </p>
            <Button
              onClick={handleButtonClick}
              className="bg-pink-500 hover:bg-pink-600 text-white text-lg px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <Image
              src="https://res.cloudinary.com/dznxs2k2a/image/upload/v1736402617/tashka/prada_idgisl.jpg"
              alt="Stylish bags for all"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-purple-400 text-white text-xl font-bold p-4 rounded-full transform rotate-12">
              New Arrivals!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
