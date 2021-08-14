
// // single element selectors
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));
// // multiple element selectors
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('.item'));
// console.log(document.getElementsByTagName('.li'));
// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// // btn.style.background = 'red';
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     console.log('click');
//     console.log(e.target.id);
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello<h1>';

// });
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'please enter fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}