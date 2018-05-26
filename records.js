const setAverage = _ => {
  document.getElementById('average').innerHTML += (window.sessionStorage.average);
  window.sessionStorage.removeItem('average');
};

const setMax = _ => {
  document.getElementById('max').innerHTML += (window.sessionStorage.max);
  window.sessionStorage.removeItem('max');
}

const setMin = _ => {
  document.getElementById('min').innerHTML += (window.sessionStorage.min);
  window.sessionStorage.removeItem('min');
}

const setRecords = _ => {
  document.getElementById('records').innerHTML = window.sessionStorage.records;
  window.sessionStorage.removeItem('records');
};

window.onload = _ => {
  setAverage();
  setMax();
  setMin();
  setRecords();
};
