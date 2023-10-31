import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Define a function to fetch data from your Flask backend
    async function fetchData() {
      try {
        const response = await fetch('/api/data');
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
        } else {
          throw new Error('Network response was not ok');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }

    // Call the fetchData function when the component mounts
    fetchData();
  }, []); // The empty array means this effect runs once after the initial render


  const handleButtonClick = () => {
    // Send a GET request to the backend when the button is clicked
    fetch('/api/backend-action', {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          // Handle a successful response from the backend
          console.log('Backend action was triggered successfully.');
        } else {
          console.error('Backend action request failed.');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
    <div>
      <h1>React App</h1>
      <p>Data from Flask:</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <div>
        <button onClick={handleButtonClick}>Trigger Backend Action</button>
      </div>
    </div>
  );
}

export default App;
