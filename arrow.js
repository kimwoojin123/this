function outer() {
    return 'hello';
}

const outerTwo = function () {
    return 'bye';
};

console.log(outer());
console.log(outerTwo());
