const MongoClient = require('mongodb').MongoClient;

const mockUsers = [
  {
    firstName: 'Seth',
    lastName: 'Platt',
    userName: 'sjp',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'US',
      bio: 'Hi, my name is Seth and I live in Barcelona. I like to code, read, and travel. Lets chat!',
      age: '23',
    },
  },
  {
    firstName: 'William',
    lastName: 'Green',
    userName: 'will-green',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'UK',
      bio: 'Hello! My name is Will, I live in London and I enjoy reading and traveling.',
      age: '23',
    },
  },
  {
    firstName: 'Emma',
    lastName: 'Jones',
    userName: 'EmmaJ',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'AU',
      bio: 'Hi, Im Emma and Im an avid sports fan, especially basketball and football.',
      age: '28',
    },
  },
  {
    firsName: 'Christopher',
    lastName: 'Taylor',
    userName: '99Taylor',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'NZ',
      bio: 'Hello! My name is Chris and I love to travel and try new foods.',
      age: '21',
    },
  },
  {
    firsName: 'Daniel',
    lastName: 'Moore',
    userName: 'danMoore',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'CA',
      bio: 'Hey, Im Daniel and I enjoy listening to music and playing video games.',
      age: '20',
    },
  },
  {
    firsName: 'Paul',
    lastName: 'Anderson',
    userName: 'p-And1001',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'US',
      bio: 'Hello! My name is Paul and I am passionate about photography and nature.',
      age: '29',
    },
  },
  {
    firsName: 'Mark',
    lastName: 'Thomas',
    userName: 'markcthomas',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'CA',
      bio: 'Hi, Im Mark and I enjoy trying new things and meeting new people.',
      age: '28',
    },
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    userName: 'mikeyy',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'IE',
      bio: ' Hey, Im Michael and I like to stay active by going to the gym and playing sports.',
      age: '19',
    },
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    userName: 'emDav32',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'UK',
      bio: ' Hi, I am Emily and I am interested in fashion and design.',
      age: '26',
    },
  },
  {
    firstName: 'Jacob',
    lastName: 'Miller',
    userName: 'JacobiM',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'AU',
      bio: 'Hello! My name is Jacob and I love to cook and bake in my free time.',
      age: '27',
    },
  },
  {
    firstName: 'Madison',
    lastName: 'Wilson',
    userName: 'mads',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'UK',
      bio: 'Hey, Im Madison and I enjoy playing musical instruments and listening to music.',
      age: '18',
    },
  },
  {
    firstName: 'Juan',
    lastName: 'Garcia',
    userName: 'jgarc11',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'ES',
      bio: 'Hola, soy Juan y me encanta el fútbol y la música.',
      age: '22',
    },
  },
  {
    firstName: 'Maria',
    lastName: 'Rodriguez',
    userName: 'Mrod',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'BO',
      bio: 'Hola! Me llamo Maria y me gusta leer y viajar.',
      age: '27',
    },
  },
  {
    firstName: 'Diego',
    lastName: 'Martinez',
    userName: 'dmartinez',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CU',
      bio: ' Hola, soy Diego y soy apasionado de la cocina y la gastronomía.',
      age: '24',
    },
  },
  {
    firstName: 'Isabella',
    lastName: 'Perez',
    userName: 'isaperez',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'DO',
      bio: 'Hola, soy Isabella y me gusta bailar y ir al cine.',
      age: '30',
    },
  },
  {
    firstName: 'Sofia',
    lastName: 'Gonzalez',
    userName: 'Sofia_G',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CR',
      bio: 'Hola! Me llamo Sofia y me encanta el arte y la cultura.',
      age: '19',
    },
  },
  {
    firstName: 'Lucas',
    lastName: 'Rodriguez',
    userName: 'Luca98',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'AR',
      bio: 'Hola, soy Lucas y me gusta estar al aire libre y hacer senderismo.',
      age: '27',
    },
  },
  {
    firstName: 'Mateo',
    lastName: 'Garcia',
    userName: 'mgarcia1',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CL',
      bio: 'Hola, soy Mateo y me gusta el cine y la literatura.',
      age: '25',
    },
  },
  {
    firstName: 'Alicia',
    lastName: 'Martinez',
    userName: 'amartinez1',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'ES',
      bio: 'Hola! Me llamo Alicia y me encanta la moda y el diseño.',
      age: '20',
    },
  },
  {
    firstName: 'Adriana',
    lastName: 'Lopez',
    userName: 'alopez1',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'GT',
      bio: 'Hola, soy Adriana y soy apasionado de la tecnología y los videojuegos.',
      age: '28',
    },
  },
  {
    firstName: 'Sebastian',
    lastName: 'Gonzalez',
    userName: 'sgonzalez2',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CU',
      bio: 'Hola, soy Sebastian y me gusta el yoga y la meditación.',
      age: '27',
    },
  },
  {
    firstName: 'Valeria',
    lastName: 'Perez',
    userName: 'valP',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'PA',
      bio: 'Hola, soy Valeria y me encanta la historia y la arqueología.',
      age: '31',
    },
  },
  {
    firstName: 'Leonardo',
    lastName: 'Sanchez',
    userName: 'lsanch_29',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'MX',
      bio: 'Hola! Me llamo Leonardo y me gusta el arte contemporáneo y la música indie.',
      age: '19',
    },
  },
  {
    firstName: 'Ximena',
    lastName: 'Mendez',
    userName: 'xmendez1',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'UY',
      bio: 'Hola, soy Ximena y soy apasionado de la fotografía y los viajes.',
      age: '26',
    },
  },
  {
    firstName: 'Jose',
    lastName: 'Garcia',
    userName: 'joseee',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'MX',
      bio: 'Hola, soy Jose y me gusta el cine y la literatura.',
      age: '28',
    },
  },
  {
    firstName: 'Paula',
    lastName: 'Fernandez',
    userName: 'Paula39',
    password: '$2a$08$XJgFz1RqIFH.PN6upXf/weCPX4yQq/c6Okz7IJxzliuY7q6B.Gaem',
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'ES',
      bio: 'Hola! Me llamo Paula y me encanta el senderismo y la naturaleza.',
      age: '29',
    },
  },
];

async function seedDB() {
  const uri =
    'mongodb+srv://sethjplatt:welcomE3917rio@lingua.spgqopr.mongodb.net/?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  try {
    await client.connect();
    console.log('Connected correctly to server');

    const collection = await client.db('test').collection('users');

    await collection.drop();

    await collection.insertMany(mockUsers);

    console.log('Database seeded!');
    await client.close();
  } catch (err) {
    console.log(err.stack);
  }
}

seedDB(mockUsers);
