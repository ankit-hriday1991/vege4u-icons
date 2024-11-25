import React from 'react';
import { 
  Carrot, 
  CircleDot,
  Leaf,
  Circle,
  Flower2
} from 'lucide-react';

interface VegetableFiltersProps {
  vegetables: string[];
  onSelect: (vegetable: string) => void;
  selectedVegetable: string | null;
}

const vegetableIcons: Record<string, React.ReactNode> = {
  'Tomatoes': <Circle className="h-6 w-6" />,
  'Potatoes': <Flower2 className="h-6 w-6" />,
  'Carrots': <Carrot className="h-6 w-6" />,
  'Onions': <CircleDot className="h-6 w-6" />,
  'Bell Peppers': <Leaf className="h-6 w-6 rotate-45" />,
  'default': <Leaf className="h-6 w-6" />
};

export default function VegetableFilters({ vegetables, onSelect, selectedVegetable }: VegetableFiltersProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 mb-6">
      <div className="flex space-x-3 min-w-max px-1">
        {vegetables.map((vegetable) => (
          <button
            key={vegetable}
            onClick={() => onSelect(vegetable)}
            className={`flex flex-col items-center p-3 rounded-lg transition-all
              ${selectedVegetable === vegetable 
                ? 'bg-green-500 text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-green-50 hover:text-green-600 shadow'}`}
          >
            {vegetableIcons[vegetable] || vegetableIcons.default}
            <span className="text-xs font-medium mt-1 whitespace-nowrap">
              {vegetable}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}