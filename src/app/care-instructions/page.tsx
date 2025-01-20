import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplet, Sun, Wind, Brush } from 'lucide-react';

export default function CareInstructionsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Care Instructions</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Droplet className="mr-2" /> Water Resistance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              While many of our bags are water-resistant, avoid submerging them
              in water. Use a waterproof spray for added protection against
              light rain.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Sun className="mr-2" /> Sun Exposure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Prolonged sun exposure can fade colors. When not in use, store
              your bag in a cool, dry place away from direct sunlight.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Brush className="mr-2" /> Cleaning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              For light cleaning, use a soft, damp cloth. For tougher stains,
              use a mild soap solution. Always test on a small, inconspicuous
              area first.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Wind className="mr-2" /> Storage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Store your bag stuffed with tissue paper to maintain its shape.
              Use the provided dust bag for long-term storage to protect from
              dust and moisture.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
