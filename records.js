const setAverage = _ => {
  document.getElementById('average').innerHTML += (window.localStorage.average);
  window.localStorage.removeItem(average);
};

const setMax = _ => {
  document.getElementById('max').innerHTML += (window.localStorage.max);
  window.localStorage.removeItem(max);
}

const setMin = _ => {
  document.getElementById('min').innerHTML += (window.localStorage.min);
  window.localStorage.removeItem(min);
}

const setRecords = _ => {
  document.getElementById('records').innerHTML = window.localStorage.records;
  window.localStorage.removeItem(records);
};

window.onload = _ => {
  setAverage();
  setMax();
  setMin();
  setRecords();
};
