const axios = require('axios');

const functions = {
    add: (num1, num2) => {
        return num1 + num2;
    },
    nullValue: () => null,
    undefinedValue: () => undefined,
    falsyValue: () => '',
    truthyValue: () => 'Kunal',
    createUser: () => ({ firstName: 'Kunal', lastName: 'Mukherjee'}),
    fetchFirstUser: () => axios('https://jsonplaceholder.typicode.com/users/1')
                            .then(res => res.data)
                            .catch(err => 'err')
};

module.exports = functions;