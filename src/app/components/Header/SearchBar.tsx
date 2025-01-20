import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar = () => (
  <div className="relative hidden sm:block">
    <Input
      type="search"
      placeholder="Search bags..."
      className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 focus:border-pink-400 focus:ring-pink-400"
    />
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
  </div>
);

export default SearchBar;
