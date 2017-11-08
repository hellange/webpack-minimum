import { person } from './person';

const hello = document.getElementById("hello");

if (hello) {
    hello.innerHTML = 'Hello, ' + person.firstName + ' ' + person.lastName;
}
