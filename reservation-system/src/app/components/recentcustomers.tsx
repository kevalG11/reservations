import { Card } from '@shadcn/ui/card';

interface Customer {
  name: string;
  time: string;
}

interface RecentCustomersProps {
  customers: Customer[];
}

export default function RecentCustomers({ customers }: RecentCustomersProps) {
  return (
    <Card className="p-4">
      <h3 className="text-lg font-bold mb-4">Recent Customers</h3>
      {customers.map((customer, index) => (
        <div key={index} className="py-2 border-b border-gray-200">
          <div className="font-semibold">{customer.name}</div>
          <div className="text-sm text-gray-500">{customer.time}</div>
        </div>
      ))}
    </Card>
  );
}
