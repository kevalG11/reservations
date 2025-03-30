import { Card, CardContent } from '@shadcn/ui/card';
import { ReactNode } from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon?: ReactNode;
  change?: string;
}

export default function StatsCard({ title, value, icon, change }: StatsCardProps) {
  return (
    <Card className="p-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-gray-500">{title}</h3>
        <div className="text-2xl font-bold">{value}</div>
        {change && <div className="text-sm text-green-500">{change}</div>}
      </div>
      {icon && <div className="text-3xl">{icon}</div>}
    </Card>
  );
}
