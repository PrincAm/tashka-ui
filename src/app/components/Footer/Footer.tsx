import About from '@/app/components/Footer/About';
import QuickLinks from '@/app/components/Footer/QuickLinks';
import ContactUs from '@/app/components/Footer/ContactUs';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12 px-6 sm:px-10 lg:px-16">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <About />
        <QuickLinks />
        <ContactUs />
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; 2025 Tashka.cz. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
