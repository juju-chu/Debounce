const delayTime = 2000

// func: 要執行的 function
// delay: 延遲幾秒才執行 
const debounceFunc = function debounce(func, delay) {
    let timeout
    return function () {
        const context = this  // 指向 debounceInput
        const args = arguments  // KeyboardEvent

        // 延遲後要執行的動作
        const later = function () {
            func.apply(context, args)
        }

        // 重新計時
        clearTimeout(timeout)
        timeout = setTimeout(later, delay)
    }
}

const debounceInput = document.getElementById('debounce-input');

// 輸入字
debounceInput.addEventListener('keyup', debounceFunc((e) => {
    console.log(e.target.value);
}, delayTime))
