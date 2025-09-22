import { auth } from './firebase-config.js';
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

document.querySelector('.auth-form')?.addEventListener('submit', async function(e) {
  e.preventDefault();
  const username = this.username.value.trim();
  const password = this.password.value;
  try {
    await signInWithEmailAndPassword(auth, username + '@neurotech.com', password);
    showSuccessMessage('¡Login exitoso! Redirigiendo...');
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 2000);
  } catch (error) {
    alert('Error en el login: ' + error.message);
  }
});

function showSuccessMessage(msg) {
  let div = document.createElement('div');
  div.textContent = msg;
  div.style.position = 'fixed';
  div.style.top = '50%';
  div.style.left = '50%';
  div.style.transform = 'translate(-50%, -50%)';
  div.style.background = 'rgba(10,35,66,0.98)';
  div.style.color = '#00eaff';
  div.style.fontSize = '2rem';
  div.style.fontWeight = 'bold';
  div.style.padding = '2rem 3rem';
  div.style.borderRadius = '24px';
  div.style.boxShadow = '0 6px 32px #00eaff33, 0 1.5px 0 #00eaff44';
  div.style.zIndex = '9999';
  document.body.appendChild(div);
} 