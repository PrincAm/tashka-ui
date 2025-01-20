import { FC } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface MobileMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
}

const MobileMenuButton: FC<MobileMenuButtonProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => (
  <Button
    variant="ghost"
    size="icon"
    className="md:hidden text-gray-600 hover:text-pink-500"
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    <span className="sr-only">Menu</span>
  </Button>
);

export default MobileMenuButton;
