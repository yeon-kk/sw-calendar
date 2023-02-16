import { ACADEMY_LIST, MONTH } from '../../constant/academy';
import styles from './Calendar.module.css';

const YEAR = 2023;

const Calendar = () => {
  return (
    <article className={styles.calenderContainerLayout}>
      <h2 className={styles.calenderYear}>{YEAR}년</h2>
      <div className={styles.calenderLayout}>
        {MONTH.map((value) => (
          <div className={styles.item}>
            <h3>{value}월</h3>
            {ACADEMY_LIST.map(
              (academy) =>
                parseInt(academy.end) === value && (
                  <div>
                    <a href={academy.url}>{academy.title}</a>
                  </div>
                )
            )}
          </div>
        ))}
      </div>
    </article>
  );
};
export default Calendar;
