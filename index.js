const timerRefs = {
  daysSpan: document.querySelector('[data-value="days"]'),
  hoursSpan: document.querySelector('[data-value="hours"]'),
  minutesSpan: document.querySelector('[data-value="mins"]'),
  secondsSpan: document.querySelector('[data-value="secs"]'),
};

class CountdownTimer {
  constructor(date) {
    this.selector = date.selector;
    this.targetDate = date.targetDate;
    this.deltaTime = 0;
  }
  pad(value) {
    return String(value).padStart(2, "0");
  }
  updateClockFace(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    timerRefs.daysSpan.textContent = days;
    timerRefs.hoursSpan.textContent = hours;
    timerRefs.minutesSpan.textContent = mins;
    timerRefs.secondsSpan.textContent = secs;
  }
  start() {
    setInterval(() => {
      const currentDate = Date.now();
      // console.log(currentDate);
      this.deltaTime = this.targetDate - currentDate;
      // console.log(this.deltaTime);
      this.updateClockFace(this.deltaTime);
    }, 1000);
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Oct 15, 2020"),
}).start();

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
