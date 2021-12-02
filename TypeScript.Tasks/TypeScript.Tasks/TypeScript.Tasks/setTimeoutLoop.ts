export class SetTimeoutLoopExample {
    execute() {
        // 10, 10, 10, 10, 10, 10, 10, 10, 10, 10
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                console.log(i);
            }, 0);
        }

        // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        for (let i = 0; i < 10; i++) {
            setTimeout(function () {
                console.log(i);
            }, 0);
        }
    }
}