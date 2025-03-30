import { Card } from '@shadcn/ui/card';

interface TableProps {
  headers: string[];
  rows: any[][];
}

export default function Table({ headers, rows }: TableProps) {
  return (
    <Card className="p-4">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header} className="border-b p-2">{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="p-2 border-b">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
