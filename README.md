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
