import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

const Logo = () => (
  <Link href="/" className="flex items-center space-x-4">
    <ShoppingBag className="h-10 w-10 text-pink-400" />
    <span
      className="text-3xl font-bold text-gray-800"
      style={{ fontFamily: "'Pacifico', cursive" }}
    >
      Tashka.cz
    </span>
  </Link>
);

export default Logo;
