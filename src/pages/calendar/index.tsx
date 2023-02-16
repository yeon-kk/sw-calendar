import { ACADEMY_LIST, MONTH } from '../../constant/academy';
import styles from './Calendar.module.css';

const YEAR = 2023;
const EXPLAIN = '대략적인 월단위 표시이기 때문에 꼭 확인하셔야 합니다.';
const Calendar = () => {
  return (
    <article className={styles.calenderContainerLayout}>
      <h2 className={styles.calenderYear}>{YEAR}년</h2>
      <div className={styles.explain}>{EXPLAIN}</div>
      <div className={styles.calenderLayout}>
        {MONTH.map((value) => (
          <div className={styles.item}>
            <h3 className={styles.month}>{value}월</h3>
            {ACADEMY_LIST.map(
              (academy) =>
                parseInt(academy.end) === value && (
                  <div className={styles.rowContainer}>
                    <div
                      className={`${styles.pre} ${academy.pre && styles.blue}`}
                    />
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
