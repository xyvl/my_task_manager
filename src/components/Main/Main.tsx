"use client";
import styles from "./main.module.scss";

const Main = () => {
  console.log();
  let data: string = "";
  switch (String(new Date()).slice(0, 3)) {
    case "Mon":
      data += "Понедельник";
      break;
    case "Tue":
      data += "Вторник";
      break;
    case "Wed":
      data += "Среда";
      break;
    case "Thu":
      data += "Четверг";
      break;
    case "Fri":
      data += "Пятница";
      break;
    case "Sat":
      data += "Суббота";
      break;
    case "Sun":
      data += "Воскресенья";
      break;
  }
  data += `, ${new Date().getDay()}`;
  switch (new Date().getMonth()) {
    case 1:
      data += " Январь";
      break;
			case 2:
      data += " Февраль";
      break;
			case 3:
      data += " Март";
      break;
			case 4:
      data += " Апрель";
      break;
			case 5:
      data += " Май";
      break;
			case 6:
      data += " Июнь";
      break;
			case 7:
      data += " Июль";
      break;
			case 8:
      data += " Август";
      break;
			case 9:
      data += " Сентябрь";
      break;
			case 10:
      data += " Октябрь";
      break;
			case 11:
      data += " Ноябрь";
      break;
			case 12:
      data += " Декабрь";
      break;
  }
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Аналитика</h1>
        <p>{data}</p>
        <label>
          <input className={styles.checkbox} type="checkbox"/>
          <span className={styles.circle_checkbox}></span>
        </label>
      </div>
    </div>
  );
};

export default Main;
