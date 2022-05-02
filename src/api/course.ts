import faker from '@faker-js/faker';
import { Course } from './resources';

export const getCourses = async () => {
  const courses = [1, 2, 3, 4, 5, 6, 7, 8].map((): Course => {
    return {
      id: faker.datatype.number({ min: 10000000, max: 99999999 }),
      name: faker.commerce.productName(),
      level: faker.datatype.number({ min: 1, max: 3 }),
      video: {
        id: faker.datatype.number({ min: 10000000, max: 99999999 }),
        thumb: faker.image.image(1280, 768, true),
        alt: faker.lorem.text(),
        title: faker.lorem.words(10)
      },
      price: {
        amount: faker.commerce.price(45.99, 173.99, 2),
        currencySimbol: '$'
      },
      discount: {
        amount: faker.commerce.price(45.99, 173.99, 2),
        currencySimbol: '$'
      },
      instructor: {
        id: faker.datatype.number({ min: 10000000, max: 99999999 }),
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
        photo: faker.internet.avatar(),
        profile: 'instructor'
      },
      totalStudents: faker.datatype.number({ min: 143, max: 9873 }),
      excerpt: faker.lorem.paragraph(75),
      rating: faker.datatype.number({ min: 2, max: 5 })
    };
  });

  return { code: 200, data: courses };
};
