import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  dataKey1: string;
  dataKey2: string;
}

export default function Chart({ data, dataKey1, dataKey2 }: ChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey={dataKey1} stroke="#8884d8" />
        <Line type="monotone" dataKey={dataKey2} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
