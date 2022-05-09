import faker from '@faker-js/faker';
import { User } from '@api/resources';
import type { NextApiHandler } from 'next';

const credentialsAuth: NextApiHandler<User> = (req, res) => {
  const { method } = req;
  // GET any not OK
  if (method !== 'POST') {
    res.status(405).end();
    return;
  }

  // POST - ok
  // validar credenciales
  const { email, password } = req.body;
  if (email === 'mail@mail.com' && password === process.env.NEXTAUTH_SECRET) {
    const estudent: User = {
      id: faker.datatype.number({ min: 10000000, max: 99999999 }),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email(),
      photo: faker.internet.avatar(),
      profile: 'student'
    };

    return res.status(200).json(estudent);
  }

  res.status(401).end();
};

export default credentialsAuth;
