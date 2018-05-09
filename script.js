window.onload = _ => {
  let signupForm = document.getElementById('signupForm');//.addEventListener('click', onClick);
  signupForm && signupForm.addEventListener('click', onClick);
};

async function onClick(e) {
  await submitForm('http://localhost:8080/auth/signup').then(result =>{ window.localStorage.setItem('token', JSON.parse(result).token)}).catch(err => console.log(err));
  e.preventDefault();
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
