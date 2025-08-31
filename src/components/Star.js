import React, { useState } from 'react';
//تعداد ستاره های روشن در صفحه را میشمارد
//Counts the number of bright stars on the screen
const soundFiles = [
  null,
  '/sounds/sound1.mp3',
  '/sounds/sound2.mp3',
  '/sounds/sound3.mp3',
  '/sounds/sound4.mp3',
  '/sounds/sound5.mp3',
  '/sounds/sound6.mp3',
  '/sounds/sound7.mp3',
  '/sounds/sound8.mp3',
  '/sounds/sound9.mp3',
  '/sounds/sound10.mp3',
  '/sounds/sound11.mp3',
  '/sounds/sound12.mp3',
  '/sounds/sound13.mp3',
  '/sounds/sound14.mp3',
  '/sounds/sound15.mp3',
  '/sounds/sound16.mp3',
  '/sounds/sound17.mp3',
  '/sounds/sound18.mp3',
  '/sounds/sound19.mp3',
  '/sounds/sound20.mp3',
];

const numberToWords = (num) => {
  const words = [
    '', 'یک', 'دو', 'سه', 'چهار', 'پنج',
    'شش', 'هفت', 'هشت', 'نه', 'ده',
    'یازده', 'دوازده', 'سیزده', 'چهارده', 'پانزده',
    'شانزده', 'هفده', 'هجده', 'نوزده', 'بیست',
    'بیست و یک', 'بیست و دو', 'بیست و سه', 'بیست و چهار',
    'بیست و پنج', 'بیست و شش', 'بیست و هفت', 'بیست و هشت',
    'بیست و نه', 'سی', 'سی و یک', 'سی و دو', 'سی و سه',
    'سی و چهار', 'سی و پنج', 'سی و شش', 'سی و هفت',
    'سی و هشت', 'سی و نه', 'چهل', 'چهل و یک', 'چهل و دو',
    'چهل و سه', 'چهل و چهار', 'چهل و پنج', 'چهل و شش',
    'چهل و هفت', 'چهل و هشت', 'چهل و نه', 'پنجاه'
  ];
  return num < words.length ? words[num] : 'شمارش فراتر از حد است';
};

const Star = () => {
  const [selectedStars, setSelectedStars] = useState([]);

  const renderStars = (count) => {
    return Array.from({ length: count }).map((_, index) => (
      <div
        className={`star ${selectedStars.includes(index) ? 'starrr' : ''}`}
        key={index}
        onClick={() => handleStarClick(index)}
      >
        <div className="svg-container">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="star">
            <path d="M12 2L14.09 8.26L20.18 8.27L15.64 12.14L17.73 18.4L12 14.77L6.27 18.4L8.36 12.14L3.82 8.27L9.91 8.26L12 2Z" />
          </svg>
        </div>
      </div>
    ));
  };

  const handleStarClick = (starIndex) => {
    const updatedStars = selectedStars.includes(starIndex)
      ? selectedStars.filter(index => index !== starIndex)
      : [...selectedStars, starIndex];

    setSelectedStars(updatedStars);

    const selectedCount = updatedStars.length;
    if (selectedCount > 0 && selectedCount < soundFiles.length) {
      const audio = new Audio(soundFiles[selectedCount]);
      audio.play();
    }
  };

  return (
    <div className='appstar'>
      {renderStars(20)}
      <br />
      <div className='number'>
        {selectedStars.length > 0 ? (
          <h1>{selectedStars.length}</h1>
        ) : (
          <h1><p>بشمار</p></h1>
        )}
      </div>

      <div className='numberr'>
        {selectedStars.length > 0 ? (
          <h1>{numberToWords(selectedStars.length)}</h1>
        ) : (
          <h1><p>بشمار</p></h1>
        )}
      </div>
    </div>
  );
};

export default Star;
