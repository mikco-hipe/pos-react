import React, { useState, useEffect } from 'react';

interface ViewAllProps {
  initialViewAll: boolean;
  initialNavigate: string;
  onViewAllChange: (viewAll: boolean) => void;
}

const ViewAll: React.FC<ViewAllProps> = ({ initialViewAll, initialNavigate, onViewAllChange }) => {
  const [viewAll, setViewAll] = useState<boolean>(initialViewAll);
  const [navigate, setNavigate] = useState<string>(initialNavigate);

  useEffect(() => {
    onViewAllChange(viewAll);
  }, [viewAll, onViewAllChange]);

  const handleClick = () => {
    setViewAll((prevViewAll) => !prevViewAll);
    setNavigate((prevNavigate) => (prevNavigate === 'View All' ? 'View Less' : 'View All'));
  };

  return (
    <div className='view_all'>
      <button className='view_all_btn' onClick={handleClick}>{navigate}</button>
    </div>
  );
};

export default ViewAll;
