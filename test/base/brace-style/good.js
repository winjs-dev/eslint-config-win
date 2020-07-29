function foo() {
    return true;
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
} catch(e) {
    handleError();
}

function nop() { return; }

if (foo) { bar(); }

if (foo) { bar(); } else { baz(); }

try { somethingRisky(); } catch(e) { handleError(); }
