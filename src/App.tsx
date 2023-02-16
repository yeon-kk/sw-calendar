import { useState } from 'react';
import style from './App.module.css';
import Calendar from './pages/calendar';

const ACADEMY = '부트캠프';
const LOGO = '로고';
const TIMETABLE = '시간표';
const ACADEMY_INDEX = 0;
const LOGO_INDEX = 1;
const TIMETABLE_INDEX = 2;

function App() {
  const [clicked, setClicked] = useState(1);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const value = e.currentTarget.name;
    let index = LOGO_INDEX;
    if (value === ACADEMY) {
      index = ACADEMY_INDEX;
    }
    if (value === TIMETABLE) {
      index = TIMETABLE_INDEX;
    }
    setClicked(index);
    console.log(index);
  };
  return (
    <div>
      <nav className={style.navLayout}>
        <button
          className={`${style.navButton} ${
            clicked === ACADEMY_INDEX ? style.clickedButton : ''
          }`}
          name={ACADEMY}
          onClick={handleClick}
        >
          {ACADEMY}
        </button>
        <button
          className={`${style.navButton} ${
            clicked === LOGO_INDEX ? style.clickedButton : ''
          }`}
          name={LOGO}
          onClick={handleClick}
        >
          {LOGO}
        </button>
        <button
          className={`${style.navButton} ${
            clicked === TIMETABLE_INDEX ? style.clickedButton : ''
          }`}
          name={TIMETABLE}
          onClick={handleClick}
        >
          {TIMETABLE}
        </button>
      </nav>
      {clicked === ACADEMY_INDEX && <Calendar />}
    </div>
  );
}

export default App;
