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
