/*eslint space-before-function-paren: "error"*/
/*eslint-env es6*/

function foo1 () {
    // ...
}

var bar = function () {
    // ...
};

var bar2 = function foo () {
    // ...
};

class Foo {
    constructor () {
        // ...
    }
}

var foo = {
    bar () {
        // ...
    }
};

var foo = async () => 1;
