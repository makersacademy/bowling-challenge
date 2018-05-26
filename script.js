const HOME = 'http://localhost:8080/';

window.onload = _ => {
  let signup = document.getElementById('signup');
  let login = document.getElementById('login');
  let logout = document.getElementById('logout');
  let gameView = document.getElementById('gameView');
  let gameRec = document.getElementById('gameRec');
  gameRec && gameRec.addEventListener('click', onSaveGame);
  gameView && gameView.addEventListener('click', onShowGames);
  signup && signup.addEventListener('click', onClick);
  login && login.addEventListener('click', onLogin); 
  logout && logout.addEventListener('click', onLogout);
  setGreeting();  
};

async function onSaveGame(e) {
  await saveGame();
  redirect(HOME);
  e.preventDefault();
};

async function onShowGames(e) {
  await requestGames().then(result => processResultRec(result)).catch(err => console.log(err));
  redirect(`${HOME}showRecords`);
  e.preventDefault();
};

async function onClick(e) {
  await submitUserDetails('auth/signup').then(result => processResult(result)).catch(err => console.log(err));
  redirect(HOME);
  e.preventDefault();
};

async function onLogin(e) {
  await submitUserDetails('auth/login').then(result => processResult(result)).catch(err => console.log(err));
  redirect(HOME);
  e.preventDefault();
};
const submitUserDetails = ext => {
  const url = `${HOME}${ext}`;
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const params = `username=${name}&password=${password}`;
  const headers = { 'Content-type': 'application/x-www-form-urlencoded' }
  return sendRequest('POST', url, params, headers);
};

const saveGame = _ => {
  const score = document.getElementById('score').value;
  const params = `score=${score}`;
  const url = `${HOME}gamerecords/new`;
  const headers = { 'x-access-token': token(), 'Content-type': 'application/x-www-form-urlencoded' };
  return sendRequest('POST', url, params, headers);
};
 
const requestGames = _ => sendRequest('GET', `${HOME}gamerecords`,'', {'x-access-token': token() });

const sendRequest = (method, url, params='', headers={}) => {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        xhr.status == 200 ? res(xhr.responseText) : rej(xhr.statusText);
      }
    };
    for(let head in headers) { xhr.setRequestHeader(head, headers[head]) };
    xhr.send(params);
  });
};

const onLogout = _ => {
  window.sessionStorage.clear();
  redirect(HOME);
}

const setGreeting = _ => 
  document.getElementById('greeting').innerHTML = `Hello, ${window.sessionStorage.name || 'guest'}`;

const token = _ => window.sessionStorage.token;

const setStorage = result => {for(let key in result) { window.sessionStorage.setItem(key, result[key]); }};

const processResult = result => {
  result = JSON.parse(result);
  setStorage(result);
};

const processResultRec = result => {
  result = JSON.parse(result);
  setStorage(result);
  const records = result.records.reduce((p,n) => `${p}<li> DATE: ${n.date} || SCORE: ${n.score}</li>`,'');
  window.sessionStorage.setItem('records', records);
}

const redirect = address => window.location.href = address;
