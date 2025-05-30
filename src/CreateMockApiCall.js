import React, { useState, useEffect } from 'react';

function simulateApi(delay = 2000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: 'Hello from the simulated API!' });
    }, delay);
  });
}

export default function ApiSimulator() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    simulateApi(3000)  
      .then(response => {
        setData(response);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Simulated API Call</h2>

      {loading && <p className="text-blue-600">Loading...</p>}

      {!loading && data && (
        <div className="p-4 bg-green-100 rounded">
          <p>{data.message}</p>
        </div>
      )}

      {!loading && !data && (
        <p className="text-gray-500">No data fetched yet.</p>
      )}
    </div>
  );
}
// This component simulates an API call with a delay and displays the result.