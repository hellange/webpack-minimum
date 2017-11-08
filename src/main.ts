import _ from 'lodash';

var hello = document.getElementById("hello");
hello.innerHTML = _.join(['Hello', 'webpack'], ' ');
