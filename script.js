window.onload = _ => {
  let signupForm = document.getElementById('signupForm');//.addEventListener('click', onClick);
  signupForm && signupForm.addEventListener('click', onClick);
  setGreeting();  
};

async function onClick(e) {
  await submitForm('http://localhost:8080/auth/signup').then(result =>{ window.localStorage.setItem('token', JSON.parse(result).token)}).catch(err => console.log(err));
  await getName().then(result => window.localStorage.setItem('name', JSON.parse(result).username)).catch(err => console.log(err));
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

const setGreeting = _ => 
  document.getElementById('greeting').innerHTML = `Hello, ${window.localStorage.name || 'guest'}`;
