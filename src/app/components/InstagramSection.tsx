import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

const images = [
  'https://res.cloudinary.com/dznxs2k2a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736409506/tashka/tamara-bellis-AreMq4SKhPA-unsplash_dt8gk9.jpg',
  'https://res.cloudinary.com/dznxs2k2a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736409506/tashka/arno-senoner-iUvQRvdIhsY-unsplash_no7xnu.jpg',
  'https://res.cloudinary.com/dznxs2k2a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736409505/tashka/leisara-studio-eTioxo1Yx4A-unsplash_u2dhmm.jpg',
  'https://res.cloudinary.com/dznxs2k2a/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1736409504/tashka/nassim-boughazi-4frKet-PJss-unsplash_jrcje7.jpg',
];

const InstagramSection = () => {
  const openInstagramProfile = () => {
    window.open('https://www.instagram.com/tashka.cz', '_blank');
  };

  return (
    <section className="py-16 px-6 sm:px-10 lg:px-16 bg-gradient-to-r from-purple-100 via-gray-100 to-pink-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">
          Follow Our Stylish Journey!
        </h2>
        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
          Join our Instagram community for daily inspiration, behind-the-scenes
          peeks, and exclusive offers!
        </p>
        <div className="flex flex-col items-center space-y-6">
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            onClick={openInstagramProfile}
          >
            <Instagram className="w-5 h-5" />
            <span>Follow @tashka.cz</span>
          </Button>
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 w-full max-w-4xl"
            onClick={openInstagramProfile}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="aspect-square relative w-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              >
                <Image
                  src={src}
                  alt={`Instagram Post ${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
