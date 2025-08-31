import React from 'react';
import Star from './components/Star';
//تعداد ستاره های روشن را میشمارد
//Counts the number of bright stars


function App() {
  // لیست حباب‌ها با مقادیر '--i'
  const bubbleValues = [
    12, 24, 10, 14, 23, 18, 16, 20, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, 28, 11,
    12, 24, 10, 14, 23, 18, 16, 19, 20, 22, 25, 18, 21, 15, 13, 26, 17, 13, 28,
    12, 24, 10, 14, 23, 18, 16, 20, 20, 22, 25, 18, 21, 13, 28,
    12, 24, 10, 14, 23, 18, 16, 20, 20, 22, 25, 18, 21
  ];

  return (
    <div className="app">
      <div className="container">
        <div className="bubbles">
          {bubbleValues.map((value, index) => (
            <span key={index} style={{ '--i': value }}></span>
          ))}
         
        </div>
      </div>
      
      <div className="components">
        <Star />
      </div>
    </div>
  );
}

export default App;
