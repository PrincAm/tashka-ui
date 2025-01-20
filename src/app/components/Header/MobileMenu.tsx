import { FC } from 'react';
import { MobileMenuButtonProps } from './MobileMenuButton';
import { useProduct } from '@/app/context/ProductContext';

type MobileMenuProps = Omit<MobileMenuButtonProps, 'isMenuOpen'>;

const MobileMenu: FC<MobileMenuProps> = ({ setIsMenuOpen }) => {
  const { activeCategory, setActiveCategory } = useProduct();

  return (
    <nav className="md:hidden bg-white py-4 px-6 sm:px-10">
      <div className="flex flex-col space-y-4">
        {['All', 'Women', 'Men', 'Kids'].map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setIsMenuOpen(false);
            }}
            className={`text-lg font-medium ${
              activeCategory === category ? 'text-pink-500' : 'text-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
