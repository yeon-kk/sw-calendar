import {
  ACADEMY_LIST,
  CREW_LIST,
  MONTH,
  MONTH_ACADEMY,
  MONTH_CREW,
  YEAR,
  EXPLAIN,
  CREW_LABEL,
  ACADEMY_LABEL,
  PRE_LABEL,
  ALARM_LABEL,
  YEAR_LABEL,
  MONTH_LABEL,
} from '../../constant/academy';
import styles from './Calendar.module.css';

const Calendar = () => {
  return (
    <article className={styles.calenderContainerLayout}>
      <h2 className={styles.calenderYear}>
        {YEAR}
        {YEAR_LABEL}
      </h2>
      <div className={styles.explain}>
        {EXPLAIN}
        <div className={styles.indexContainer}>
          <div className={`${styles.pre} ${styles.blue}`} />
          <sub>{PRE_LABEL}</sub>
          <div className={`${styles.pre} ${styles.yellow}`} />
          <sub>{ALARM_LABEL}</sub>
        </div>
      </div>
      <div className={styles.calenderLayout}>
        {MONTH.map((value) => (
          <div className={styles.item}>
            <div className={styles.monthLabel}>
              <h3 className={styles.month}>
                {value}
                {MONTH_LABEL}
              </h3>
            </div>
            <div className={styles.monthContents}>
              {MONTH_ACADEMY[value - 1] && <span>{ACADEMY_LABEL}</span>}
              {ACADEMY_LIST.map(({ title, end, url, pre, alarm }) =>
                end.map(
                  (month) =>
                    month === value && (
                      <div className={styles.rowContainer}>
                        <div
                          className={`${styles.pre} ${pre && styles.blue}`}
                        />
                        <div
                          className={`${styles.pre} ${alarm && styles.yellow}`}
                        />
                        <a href={url} target="_blank">
                          {title}
                        </a>
                      </div>
                    )
                )
              )}
              {MONTH_ACADEMY[value - 1] && <br />}
              {MONTH_CREW[value - 1] && <span>{CREW_LABEL}</span>}
              {CREW_LIST.map(({ title, end, url, pre, alarm }) =>
                end.map(
                  (month) =>
                    month === value && (
                      <div className={styles.rowContainer}>
                        <div
                          className={`${styles.pre} ${pre && styles.blue}`}
                        />
                        <div
                          className={`${styles.pre} ${alarm && styles.yellow}`}
                        />
                        <a href={url} target="_blank">
                          {title}
                        </a>
                      </div>
                    )
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};
export default Calendar;
