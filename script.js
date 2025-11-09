console.log('Im gonna be king of the pirates trust.');

let sayhiButton = document.getElementById('sayhi-button');

sayhiButton.addEventListener('click', sayusersname);

function sayusersname() {
  let nametextbox = document.getElementById('users-name');
  let username = nametextbox.value;

  let greeting = document.getElementById('greeting');
  greeting.innerText = 'Oh, thats a nice name! Hey there, ' + username;
}
 