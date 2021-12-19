/* eslint-disable no-unused-vars */
import cuid from "cuid";
import faker from "faker";

export default function makeFakeUser(overrides) {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    location: {
      latitude: faker.address.latitude(),
      longtitude: faker.address.longitude(),
    },
    gender: "male",
    age: faker.datatype.number(18, 99),
    img: [
      faker.image.people(320, 240),
      faker.image.people(320, 240),
      faker.image.people(320, 240),
    ],
    bio: faker.lorem.words(),
    interests: [
      faker.lorem.words(1),
      faker.lorem.words(1),
      faker.lorem.words(1),
    ],
    id: cuid(),
  };

  return {
    ...user,
    ...overrides,
  };
}
