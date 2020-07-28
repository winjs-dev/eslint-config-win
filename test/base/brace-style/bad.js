function foo() {
    return true;
}

if (foo) {
    bar();
}

try {
    somethingRisky();
} catch (e) {
    handleError();
}

if (foo) {
    bar();
} else {
    baz();
}
