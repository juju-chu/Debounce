const delayTime = 300;

const debounceFunc = function debounce(func, delay) {
    let timeout;
    return function () {
        const later = function () {
            func()
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, delay)
    };
};

function doSomething() {
    console.log('doSomething');
}

debounceFunc(doSomething, delayTime)();