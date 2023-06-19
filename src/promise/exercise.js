export function delay(time, message) {
  return new Promise((resuelve, rechaza) => {
    if (true) {
      window.setTimeout(() => resuelve(message), time);
      /*así no: window.setTimeout(resuelve(message), time)*/
    }
  });
}
