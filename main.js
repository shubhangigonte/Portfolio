const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('signUp');
signUpButton.addEventListener('click', () => 
container.classList.add('right-panel-active'));
// const signInButton: HTMLElement
signInButton.addEventListener('click', () => 
container.classList.remove('right-panel-active'));

