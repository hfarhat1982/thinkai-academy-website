import React from 'react';
import { GraduationCap, CheckCircle } from 'lucide-react';

interface PrerequisitesSectionProps {
  prerequisites: string[];
  targetAudience: string[];
  className?: string;
}

const PrerequisitesSection: React.FC<PrerequisitesSectionProps> = ({ prerequisites, targetAudience, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${className}`}>
      {/* Prerequisites */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <GraduationCap className="mr-2 h-6 w-6" />
            Prérequis
          </h3>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {prerequisites.map((prerequisite, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{prerequisite}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Target Audience */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-700 px-6 py-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <GraduationCap className="mr-2 h-6 w-6" />
            Public Cible
          </h3>
        </div>
        <div className="p-6">
          <ul className="space-y-3">
            {targetAudience.map((audience, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrerequisitesSection;