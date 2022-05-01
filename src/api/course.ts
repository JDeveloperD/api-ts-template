import faker from '@faker-js/faker';
import { ICourse } from './resources';

export const getCourses = async () => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((): ICourse => {
    return {
      id: faker.datatype.number({ min: 10000000, max: 99999999 }),
      name: faker.commerce.productName(),
      level: faker.random.number({ min: 1, max: 3 }),
      video: {
        id: faker.datatype.number({ min: 10000000, max: 99999999 }),
        thumb: faker.random.image(),
        alt: faker.lorem.text(),
        title: faker.lorem.words(10)
      },
      price: {
        amount: faker.commerce.price(45, 150, 2),
        currencySimbol: '$'
      },
      instructor: {
        id: faker.datatype.number({ min: 10000000, max: 99999999 }),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        photo: faker.internet.avatar(),
        profile: 'instructor'
      }
    };
  });

  return { code: 200, data: courses };
};
