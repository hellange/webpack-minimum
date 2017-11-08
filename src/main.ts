import _ from 'lodash';
import { person } from "./person";

var hello = document.getElementById("hello");
hello.innerHTML = _.join(['Hello, ', person.firstName, person.lastName], ' ');
