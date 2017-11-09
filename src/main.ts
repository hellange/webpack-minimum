import { Component } from '@angular/core';
import { person } from './person';


@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { }


const hello = document.getElementById("hello");

if (hello) {
    hello.innerHTML = 'Hello, ' + person.firstName + ' ' + person.lastName;
}
