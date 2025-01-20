import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function SizeGuidePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Size Guide</h1>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Size</TableHead>
              <TableHead>Length (cm)</TableHead>
              <TableHead>Width (cm)</TableHead>
              <TableHead>Height (cm)</TableHead>
              <TableHead>Capacity (L)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Small</TableCell>
              <TableCell>30</TableCell>
              <TableCell>20</TableCell>
              <TableCell>40</TableCell>
              <TableCell>15</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Medium</TableCell>
              <TableCell>35</TableCell>
              <TableCell>25</TableCell>
              <TableCell>45</TableCell>
              <TableCell>25</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Large</TableCell>
              <TableCell>40</TableCell>
              <TableCell>30</TableCell>
              <TableCell>50</TableCell>
              <TableCell>35</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Note: Measurements may vary slightly due to the handmade nature of our
        products. If you're between sizes, we recommend choosing the larger size
        for a more comfortable fit.
      </p>
    </div>
  );
}
