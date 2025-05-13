
const input = document.querySelector('#favchap');
input.focus();
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {

    if (input.value.trim() != '') {

        const li = document.createElement('li');
        li.textContent = input.value;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);
        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
    else
        alert("Enter a Book and Chapter");
});

// What else would you add to increase this applications usability?
// I added a Clean Button
const cleanInputButton = document.createElement('button');
cleanInputButton.textContent = 'Clean';

const main = document.querySelector('main');

main.appendChild(cleanInputButton);
cleanInputButton.addEventListener('click', function () {
    input.value = '';
    input.focus();
});



