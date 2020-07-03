function CallContacts() {

    class Contacts {
        constructor(data) {
            this.name = data.name;
            this.phone = data.pgone;
            this.email = data.email;
        }

        get cont() {
            return [this.name, this.phone, this.email];
        }

        set cont(data) {
            this.name = data.name;
            this.phone = data.pgone;
            this.email = data.email;
        }

        addContact(input1, input2, input3) {
            let elemCont = {
                ul: document.querySelector('ul'),
                li: document.createElement('li'),
                contName: document.createElement('div'),
                contPhone: document.createElement('div'),
                contEmail: document.createElement('div'),
                buttDel: document.createElement('button'),
            };

            elemCont.li.classList.add('contacts_item');
            elemCont.contName.classList.add('contacts_name');
            elemCont.contPhone.classList.add('contacts_phone');
            elemCont.contEmail.classList.add('contacts_email');
            elemCont.buttDel.classList.add('button_del');

            elemCont.contName.innerHTML = input1;
            elemCont.contPhone.innerHTML = input2;
            elemCont.contEmail.innerHTML = input3;
            elemCont.buttDel.innerHTML = 'X';

            elemCont.ul.appendChild(elemCont.li);
            elemCont.li.appendChild(elemCont.contName);
            elemCont.li.appendChild(elemCont.contPhone);
            elemCont.li.appendChild(elemCont.contEmail);
            elemCont.li.appendChild(elemCont.buttDel);


            elemCont.buttDel.addEventListener('click', function() {
                this.closest('li').remove();
            });
        }

        clearInput() {
            inputName.value = '';
            inputPhone.value = '';
            inputEmail.value = '';
        };
    }

    let contacts = new Contacts('');

    let inputName = document.querySelector('input[name="name"]'),
        inputPhone = document.querySelector('input[name="phone"]'),
        inputEmail = document.querySelector('input[name="email"]'),
        buttAdd = document.querySelector('.contacts_add'),
        buttClear = document.querySelector('.contacts_clear');

    buttAdd.addEventListener('click', function() {
        if(inputName.value != '' && inputPhone.value != '' && inputEmail.value != '') {
            contacts.addContact(inputName.value, inputPhone.value, inputEmail.value);
            contacts.clearInput();
        } else {
            alert('Вы ввели не все данные о контакте!');
        }
    });

    buttClear.addEventListener('click', function() {
        let ul = document.querySelector('ul');
        ul.innerHTML = '';
    });
}

window.addEventListener('load', CallContacts);


// function Contacts() {

//     function addContact(input1, input2, input3) {
//         let elemCont = {
//             ul: document.querySelector('ul'),
//             li: document.createElement('li'),
//             contName: document.createElement('div'),
//             contPhone: document.createElement('div'),
//             contEmail: document.createElement('div'),
//             buttDel: document.createElement('button'),
//         };

//         elemCont.li.classList.add('contacts_item');
//         elemCont.contName.classList.add('contacts_name');
//         elemCont.contPhone.classList.add('contacts_phone');
//         elemCont.contEmail.classList.add('contacts_email');
//         elemCont.buttDel.classList.add('button_del');

//         elemCont.contName.innerHTML = input1;
//         elemCont.contPhone.innerHTML = input2;
//         elemCont.contEmail.innerHTML = input3;
//         elemCont.buttDel.innerHTML = 'X';

//         elemCont.ul.appendChild(elemCont.li);
//         elemCont.li.appendChild(elemCont.contName);
//         elemCont.li.appendChild(elemCont.contPhone);
//         elemCont.li.appendChild(elemCont.contEmail);
//         elemCont.li.appendChild(elemCont.buttDel);


//         elemCont.buttDel.addEventListener('click', function() {
//             this.closest('li').remove();
//         });
//     };

//     function clearInput() {
//         inputName.value = '';
//         inputPhone.value = '';
//         inputEmail.value = '';
//     };

//     let inputName = document.querySelector('input[name="name"]'),
//         inputPhone = document.querySelector('input[name="phone"]'),
//         inputEmail = document.querySelector('input[name="email"]'),
//         buttAdd = document.querySelector('.contacts_add'),
//         buttClear = document.querySelector('.contacts_clear');

//     buttAdd.addEventListener('click', function() {
//         if(inputName.value != '' && inputPhone.value != '' && inputEmail.value != '') {
//             addContact(inputName.value, inputPhone.value, inputEmail.value);
//             clearInput();
//         } else {
//             alert('Вы ввели не все данные о контакте!');
//         }
//     });

//     buttClear.addEventListener('click', function() {
//         let ul = document.querySelector('ul');
//         ul.innerHTML = '';
//     });

// };

// Contacts();

