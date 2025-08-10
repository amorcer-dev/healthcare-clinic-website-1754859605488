import React from 'react';

interface WidgetAboutDoctorProps {
  className?: string;
}

export const WidgetAboutDoctor: React.FC<WidgetAboutDoctorProps> = ({ className = '' }) => {
  return (
    <div className={`${className} p-6 bg-white rounded-lg shadow-md`}>
      <h3 className="text-xl font-semibold mb-4">{componentName}</h3>
      <p className="text-gray-600">
        This is a placeholder component for WidgetAboutDoctor (about-doctor-widget).
        In a real implementation, this would contain the actual component logic.
      </p>
    </div>
  );
};

export default WidgetAboutDoctor;
