import React, { useState } from 'react';

const DropdownChange = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleFirstDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center">
      <select className="ml-4 mr-2 px-2 py-1 border rounded" onChange={handleFirstDropdownChange}>
        <option value="Under Triage">Under Triage</option>
        <option value="Accepted">Accepted</option>
        <option value="Need More Info">Need More Info</option>
        <option value="Fixed">Fixed</option>
        <option value="Not Reproducible">Not Reproducible</option>
        <option value="Invalid">Invalid</option>
      </select>

      {/* Conditionally render the second dropdown based on the selected value of the first dropdown */}
      {selectedOption === 'Accepted' && (
        <select className="px-2 py-1 border rounded">
          <option value="Need More Info">Need More Info</option>
          <option value="Fixed">Fixed</option>
        </select>
      )}
    </div>
  );
};

export default DropdownChange;
