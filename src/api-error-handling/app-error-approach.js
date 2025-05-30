// 1. Independent Try-Catch for Each API
async function fetchData() {
  try {
    const res1 = await apiCall1();
    // process res1
  } catch (err) {
    console.error("API 1 failed:", err);
  }

  try {
    const res2 = await apiCall2();
  } catch (err) {
    console.error("API 2 failed:", err);
  }
}



//Use Promise.allSettled
const results = await Promise.allSettled([apiCall1(), apiCall2()]);

results.forEach((result, i) => {
  if (result.status === 'fulfilled') {
    console.log(`API ${i + 1} success:`, result.value);
    // process result.value
  } else {
    console.error(`API ${i + 1} failed:`, result.reason);
    // handle error
  }
});

//3. Retry Failed Requests
async function retryApiCall(apiFunc, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      return await apiFunc();
    } catch (err) {
      if (i === retries - 1) throw err;
    }
  }
}


// Promise.all behavior
// Waits for all promises to fulfill.

// If any promise rejects, Promise.all immediately rejects and the entire call fails.

// You don’t get results of the other promises if one fails.

// 
// Use case	Use                   Promise.all?	Use Promise.allSettled?
// All-or-nothing	                 ✅ Yes	            ❌ No
// Partial success	                 ❌ No	           ✅ Yes
// Need detailed error per API	        ❌ No	       ✅ Yes


// What are Axios Interceptors?
// Request interceptors: Modify or log requests before they are sent.

// Response interceptors: Handle or transform responses globally.

// Error interceptors: Centralize error handling for all API calls.


/*

import axios from 'axios';

// Create an axios instance
const api = axios.create({
  baseURL: 'https://your.api.base.url',
});

// Request interceptor
api.interceptors.request.use(config => {
  // e.g. add auth token
  config.headers.Authorization = 'Bearer your-token';
  return config;
}, error => {
  return Promise.reject(error);
});

// Response interceptor
api.interceptors.response.use(response => {
  // any global response transformation
  return response;
}, error => {
  // Central error handling
  if (error.response) {
    console.error('API error status:', error.response.status);
    // You can handle 401 (unauthorized), 403, 500 etc here globally
  } else {
    console.error('Network or CORS error:', error.message);
  }
  return Promise.reject(error); // still reject to let caller handle if needed
});

*/