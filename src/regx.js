const reg1 = /(?!^)(?=(\d{3})+$)/g;
console.log('123456789'.replace(reg1, '-'))

const reg2 = /(?<=(\d{3})+$)/g;
console.log('123456789'.replace(reg2, '-'))

let p1 = new Promise((resolve) => {
    console.log(111)
    setTimeout(resolve, 1000)
});

p1.then((res) => {
    console.log(222);
})