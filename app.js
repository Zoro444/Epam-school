import faker from "faker";
import lodash from "lodash";

const fakeUsers = [];

for (let i = 0; i < 10; i++) {
   fakeUsers[i] = {
     name: faker.name.findName(),
     email: faker.internet.email(),
     phone: faker.phone.phoneNumber(),
   }
}

console.log(fakeUsers);

const sortedUsers = lodash.sortBy(fakeUsers, 'name');

console.log(sortedUsers);
