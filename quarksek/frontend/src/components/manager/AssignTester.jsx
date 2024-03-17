import React, { useState } from 'react';
import M_Layout from './M_Layout';
import { Link } from 'react-router-dom';
import { SelectTestingStatus } from './SelectTestingStatus';

const AssignTester = () => {
  const [testers] = useState([
    { id: 1, message: "1) Tester", status: "under work" },
    { id: 2, message: "2) Tester", status: "under work" },
    { id: 3, message: "3) Tester", status: "available" },
    { id: 4, message: "4) Tester", status: "available" }
  ]);

  const [showSelectStatus, setShowSelectStatus] = useState(false);

  const [availableMessage, setAvailableMessage] = useState('');

  const handleAvailableClick = () => {
    setAvailableMessage('Sending request...');
    
  };

  const handleUnderWorkClick = () => {
    setShowSelectStatus(true);
  };

  const handleSelectTestingStatusClick = () => {
    // Implement logic to handle opening the testing status selection modal
    // For now, let's just log a message
    console.log("Select testing status clicked");
  };

  const handleStatusUpdate = () => {
    // Implement logic to update the status
    console.log("Status updated successfully!");
  };

  let workingCount = 0;
  let availableCount = 0;
  
  return (
    <M_Layout>
      <div className="container mx-auto py-4">
        <div className="ml-8">
          <h1 className="text-2xl font-bold">Available Tester</h1>
          <table className="mt-4 fixed lg:w-1/4 md:w-1/2 ">
            <thead>
              <tr>
                <th className="px-4 py-2">Tester</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {testers.map((tester) => {
                if (tester.status === "under work") {
                  workingCount++;
                } else if (tester.status === "available") {
                  availableCount++;
                }
                return (
                  <tr key={tester.id}>
                    <td className="border px-4 py-2">{tester.message}</td>
                    <td className="border px-4 py-2"> 
                      {tester.status === "under work" ? (
                        <div>
                          <button className="bg-orange-400 hover:bg-green-600 text-white py-1 px-3 rounded" onClick={handleUnderWorkClick}>
                            Under Work
                          </button>
                          {showSelectStatus && <SelectTestingStatus />}
                        </div>
                      ) : (
                        <button className="bg-green-700 w-28 hover:bg-green-600 text-white py-1 px-3 rounded" onClick={handleAvailableClick}>
                         Available
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {availableMessage && <p className="text-lg font-bold mt-72 ml-8">{availableMessage}</p>}
        </div>
      </div>
    </M_Layout>
  );
};

export default AssignTester;
