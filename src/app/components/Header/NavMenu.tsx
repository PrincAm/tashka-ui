'use client';

import { useRouter } from 'next/navigation';

import { useProduct } from '@/app/context/ProductContext';

const NavMenu = () => {
  const { activeCategory, setActiveCategory } = useProduct();
  const router = useRouter();

  const handleButtonClick = async (category: string) => {
    if (router && location.pathname !== '/') {
      await router.push('/');
    }
    setActiveCategory(category);
  };

  return (
    <nav className="hidden md:flex space-x-6">
      {['All', 'Women', 'Men', 'Kids'].map((category) => (
        <button
          key={category}
          onClick={() => handleButtonClick(category)}
          className={`text-lg font-medium transition-colors duration-300 ${
            activeCategory === category
              ? 'text-pink-500 border-b-2 border-pink-500'
              : 'text-gray-600 hover:text-pink-500'
          }`}
        >
          {category}
        </button>
      ))}
    </nav>
  );
};

export default NavMenu;
