export class LodashGetExample {
    execute() {
        const data = {
            user: {
                fullName: {
                    firstName: 'Lev',
                    lastName: 'Tolstoy',
                }
            }
        };

        const get = (path, obj) => path
            .split('.')
            .reduce((o, k) => o && o[k], obj);

        console.log(get('user.fullName.firstName', data));
        console.log(get('user.fullName.lastName', data));
        console.log(get('user.firstBook.title', data));
    }
}