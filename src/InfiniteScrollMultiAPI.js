import React, { useState, useEffect, useRef, useCallback } from 'react';
import { mockApi1, mockApi2 } from './mock-api';

//how to handle infinite scrolling for multiple APIs
export default function InfiniteScrollMultiAPI() {
  const [data1, setData1] = useState([]);
  const [page1, setPage1] = useState(1);
  const [hasMore1, setHasMore1] = useState(true);

  const [data2, setData2] = useState([]);
  const [page2, setPage2] = useState(1);
  const [hasMore2, setHasMore2] = useState(true);

  const [loading, setLoading] = useState(false);
  const observer = useRef();

  const fetchData = useCallback(async () => {
    if (loading) return;
    if (!hasMore1 && !hasMore2) return;

    setLoading(true);

    const p1 = hasMore1 ? mockApi1(page1) : Promise.resolve({ items: [], hasMore: false });
    const p2 = hasMore2 ? mockApi2(page2) : Promise.resolve({ items: [], hasMore: false });

    try {
      const [res1, res2] = await Promise.all([p1, p2]);

      setData1(prev => [...prev, ...res1.items]);
      setData2(prev => [...prev, ...res2.items]);

      setPage1(prev => (res1.hasMore ? prev + 1 : prev));
      setPage2(prev => (res2.hasMore ? prev + 1 : prev));

      setHasMore1(res1.hasMore);
      setHasMore2(res2.hasMore);
    } catch (err) {
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore1, hasMore2, page1, page2]);

  // Intersection Observer to load more when bottom div appears
  const loadMoreRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchData();
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, fetchData]);

  // Merge and sort by createdAt descending
  const mergedList = [...data1, ...data2].sort((a, b) => b.createdAt - a.createdAt);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Infinite Scroll with Multiple APIs</h2>
      <ul>
        {mergedList.map(item => (
          <li key={item.id} className="p-3 mb-2 border rounded shadow-sm bg-white">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.createdAt.toLocaleString()}</p>
          </li>
        ))}
      </ul>

      <div ref={loadMoreRef} className="h-12 flex justify-center items-center">
        {loading && <p>Loading...</p>}
        {!loading && !hasMore1 && !hasMore2 && <p>No more data.</p>}
      </div>
    </div>
  );
}