export class ReduceExample {
    execute() {
        const arr = [
            { name: 'width', value: 10 },
            { name: 'height', value: 20 }
        ];

        console.log(JSON.stringify(arr));

        const res = arr.reduce((acc, item) => {
            acc[item.name] = item.value;
            return acc;
        }, {})

        console.log(JSON.stringify(res));
    }
}