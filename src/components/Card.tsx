import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, children, icon, className = '' }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg ${className}`}>
      <div className="p-6">
        {icon && <div className="mb-4">{icon}</div>}
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Card;