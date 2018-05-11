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
  window.location.href='http://localhost:8080/';
  e.preventDefault();
};

async function onShowGames(e) {
  await requestGames().then(result => { res = JSON.parse(result); for(let i in res) {window.localStorage.setItem(i, res[i]);}; const s = res.records.reduce((p,n) => `${p}<li>date: ${n.date} score: ${n.score}</li>`, ''); console.log(s); window.localStorage.setItem('records', s)});
  window.location.href="http://localhost:8080/showRecords";
  e.preventDefault();
};

async function onClick(e) {
  await submitForm('http://localhost:8080/auth/signup').then(result =>{ window.localStorage.setItem('token', JSON.parse(result).token)}).catch(err => console.log(err));
  await getName().then(result => window.localStorage.setItem('name', JSON.parse(result).username)).catch(err => console.log(err));
  window.location.href="http://localhost:8080/";
  e.preventDefault();
};

async function onLogin(e) {
  await submitForm('http://localhost:8080/auth/login').then(result => {console.log('RESULT IS ', result);window.localStorage.setItem('token', JSON.parse(result).token)}).catch(err => console.log(err));
  await getName().then(result => {console.log('NAME IS ', name);window.localStorage.setItem('name', JSON.parse(result).username)}).catch(err => console.log(err));
  window.location.href="http://localhost:8080/";
  e.preventDefault();
};

async function getName() {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/auth/me', true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          res(xhr.responseText);
        } else {
          rej(xhr.statusText);
        }
      }
    };
    xhr.setRequestHeader('x-access-token', window.localStorage.token);
    xhr.send();
  });
};
  
const submitForm = url => {
  const name = document.getElementById('name').value;
  const password = document.getElementById('password').value;
  const params = `username=${name}&password=${password}`;
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          res(xhr.responseText);
        } else {
          rej(xhr.statusText);
         }
      }
    };
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send(params);
  });
};

const saveGame = _ => {
  const score = document.getElementById('score').value;
  const params = `score=${score}`;
  console.log('SCORE IN FE ', params);
  const url = 'http://localhost:8080/gamerecords/new';
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
          res();
      } else {
          rej(xhr.statusText);
      }
    }
  };
  xhr.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
  xhr.setRequestHeader('x-access-token', window.localStorage.token);
  xhr.send(params);
  });
};
 
const requestGames = _ => {
  const url = 'http://localhost:8080/gamerecords';
  const token = window.localStorage.token;
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = _ => {
      if(xhr.readyState == 4) {
        if(xhr.status == 200) {
        res(xhr.responseText);
      } else {
        rej(xhr.statusText);
      }
    }
  };
  xhr.setRequestHeader('x-access-token', token);
  xhr.send();
});
};

const onLogout = _ => {
  window.localStorage.clear();
  window.location.href="http://localhost:8080";
}

const setGreeting = _ => 
  document.getElementById('greeting').innerHTML = `Hello, ${window.localStorage.name || 'guest'}`;
