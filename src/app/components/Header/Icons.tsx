import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';

const Icons = () => {
  const { getTotalItems } = useCart();
  const router = useRouter();
  const totalItems = getTotalItems();

  const handleCartClick = () => {
    router.push('/cart'); // Navigates to the cart page
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-gray-600 hover:text-pink-500 transition-colors duration-300 relative"
      onClick={handleCartClick}
    >
      <ShoppingBag className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </Button>
  );
};

export default Icons;
