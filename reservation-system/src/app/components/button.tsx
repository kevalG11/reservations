import { Button as ShadCNButton } from '@shadcn/ui/button';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

export default function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <ShadCNButton 
      className={`p-2 ${variant === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
      onClick={onClick}
    >
      {label}
    </ShadCNButton>
  );
}
