import Link from 'next/link';

const QuickLinks = () => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
    <ul className="space-y-2">
      <li>
        <Link
          href="/faqs"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          FAQs
        </Link>
      </li>
      <li>
        <Link
          href="/shipping-returns"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Shipping & Returns
        </Link>
      </li>
      <li>
        <Link
          href="/size-guide"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Size Guide
        </Link>
      </li>
      <li>
        <Link
          href="/care-instructions"
          className="text-gray-300 hover:text-white transition-colors duration-300"
        >
          Care Instructions
        </Link>
      </li>
    </ul>
  </div>
);

export default QuickLinks;
