## 1. 
```
(function () {
	console.log(1);
	setTimeout(function () { console.log(2); }, 1000);
	setTimeout(function () { console.log(3); }, 0);
	console.log(4);	
})();
```
**Вывод:** 1432

## 2.
```
for (var i = 0; i < 5; i++) {
	setTimeout(function() { console.log(i); }, i * 1000);
}
```

**Вывод:** 55555

## 3.
```
const details = {
    message: 'Hello World!'
}

function getMessage() {
    return this.message
}

getMessage.apply(details) // Hello World!
```

```
const person = {
    name: 'Marko Polo'
}

function greeting(greetingMessage) {
    return `${greetingMessage} ${this.name}`
}

greeting.apply(person, ['Hello']) // Hello Marko Polo
```

```
const obj1 = {
    result: 0
}

const obj2 = {
    result: 0
}

function reduceAdd() {
    let result = 0
    for (let i = 0, len = arguments.length; i < len; i++) {
        result += arguments[i]
    }
    this.result = result
}

reduceAdd.apply(obj1, [1, 2, 3, 4, 5]) // 15
reduceAdd.call(obj2, 1, 2, 3, 4, 5) // 15
```

## 4.
```
const employee = {
    firstName: 'Marko',
    lastName: 'Polo',
    position: 'Software Developer',
    yearHired: 2017
}

let { firstName, lastName, position, yearHired } = employee
let { firstName: fName, lastName: lName, position, yearHired } = employee
let { firstName = 'Mark', lastName: lName, position, yearHired } = employee
```

## 5.
```
fs.readFile('somefile.txt', function(e,data){
    // код
    fs.readFile('directory', function(e, files){
        // код
        fs.mkdir('directory', function(e){
            // код
        })
    })
})
```

```
promReadFile('file/path')
.then(data => {
    return promReaddir('directory')
})
.then(data => {
    return promMkdir('directory')
})
.catch(e => {
    console.error(e)
})
```

## 6.
```
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);

let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});

p.then(function(){
    console.log('Обработка промиса');
});

console.log('Конец скрипта');
```

```
Создание промиса
Конец скрипта
Обработка промиса
Таймаут
```

## 7.
```
console.log('main1');

process.nextTick(function() {
    console.log('process.nextTick1');
});

setTimeout(function() {
    console.log('setTimeout');
    process.nextTick(function() {
        console.log('process.nextTick2');
    });
}, 0);

new Promise(function(resolve, reject) {
    console.log('promise');
    resolve();
}).then(function() {
    console.log('promise then');
});

console.log('main2');
```
