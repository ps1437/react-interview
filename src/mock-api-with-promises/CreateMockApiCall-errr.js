import React, { useState, useEffect } from 'react';
import { simulateApi } from './mockapi';



export default function ApiSimulatorWithError() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setData(null);

    simulateApi(3000)
      .then(response => {
        setData(response);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Simulated API Call</h2>

      {loading && <p className="text-blue-600">Loading...</p>}

      {error && (
        <p className="text-red-600 font-semibold">
          Error: {error}
        </p>
      )}

      {!loading && data && !error && (
        <div className="p-4 bg-green-100 rounded">
          <p>{data.message}</p>
        </div>
      )}

      {!loading && !data && !error && (
        <p className="text-gray-500">No data fetched yet.</p>
      )}
    </div>
  );
}
