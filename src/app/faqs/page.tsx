import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>How long does shipping take?</AccordionTrigger>
          <AccordionContent>
            Shipping times vary depending on your location. Domestic orders
            typically arrive within 3-5 business days, while international
            orders may take 7-14 business days.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We offer a 30-day return policy for all unused items in their
            original condition. Please see our Shipping & Returns page for more
            details.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Are your bags waterproof?</AccordionTrigger>
          <AccordionContent>
            While many of our bags are water-resistant, not all are fully
            waterproof. Please check the product description for specific
            details on each bag's water resistance level.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Do you offer international shipping?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we ship to most countries worldwide. Shipping costs and
            delivery times may vary depending on the destination.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
