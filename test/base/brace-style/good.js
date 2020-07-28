function nop() {
    return;
}

if (foo) {
    bar();
}

if (foo) {
    bar();
} else {
    baz();
}

try {
    somethingRisky();
} catch (e) {
    handleError();
}
