const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');

const mockPassword = bcrypt.hashSync('mock_Password*', 8);

const mockUsers = [
  {
    firstName: 'Seth',
    lastName: 'Platt',
    userName: 'sethjplatt',
    password: mockPassword,
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'US',
      bio: 'Hi, my name is Seth and I live in Barcelona. I like to code, read, and travel. Lets chat!',
      age: '23',
    },
  },
  {
    firstName: 'Will',
    lastName: 'Green',
    userName: 'will-green',
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'AU',
      bio: 'Hi, Im Emma and Im an avid sports fan, especially basketball and football.',
      age: '28',
    },
  },
  {
    firsName: 'Chris',
    lastName: 'Taylor',
    userName: '99Taylor',
    password: mockPassword,
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'NZ',
      bio: 'Hello! My name is Chris and I love to travel and try new foods.',
      age: '21',
    },
  },
  {
    firsName: 'Dan',
    lastName: 'Moore',
    userName: 'danMoore',
    password: mockPassword,
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
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'CA',
      bio: 'Hi, Im Mark and I enjoy trying new things and meeting new people.',
      age: '28',
    },
  },
  {
    firstName: 'Mike',
    lastName: 'Brown',
    userName: 'mikeyy',
    password: mockPassword,
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
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'en',
    learnLanguage: 'es',
    info: {
      country: 'AU',
      bio: 'Hello! My name is Jacob and I love to cook and bake in my free time.',
      age: '27',
    },
  },
  {
    firstName: 'Madie',
    lastName: 'Wilson',
    userName: 'mads',
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'ES',
      bio: 'Vivo en España, me encanta el fútbol y la música.',
      age: '22',
    },
  },
  {
    firstName: 'Maria',
    lastName: 'Rodriguez',
    userName: 'Mrod',
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CU',
      bio: 'Soy apasionado de la cocina y la gastronomía. Quiero mejorar mi inglés',
      age: '24',
    },
  },
  {
    firstName: 'Isa',
    lastName: 'Perez',
    userName: 'isaperez',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'DO',
      bio: 'Hola, soy de Republica Dominicana y me gusta bailar y ir al cine.',
      age: '30',
    },
  },
  {
    firstName: 'Sofia',
    lastName: 'Gonzalez',
    userName: 'Sofia_G',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CR',
      bio: 'Me encanta el arte y la cultura. Charlemos',
      age: '19',
    },
  },
  {
    firstName: 'Lucas',
    lastName: 'Rodriguez',
    userName: 'Luca98',
    password: mockPassword,
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
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CL',
      bio: 'Me llamo Mateo y me gusta el cine y la literatura.',
      age: '25',
    },
  },
  {
    firstName: 'Alicia',
    lastName: 'Martinez',
    userName: 'amartinez1',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'ES',
      bio: 'Me encanta la moda y el diseño. Soy de España.',
      age: '20',
    },
  },
  {
    firstName: 'Adriana',
    lastName: 'Lopez',
    userName: 'alopez1',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'GT',
      bio: 'Hola, soy Adriana y soy apasionado de la tecnología y los videojuegos.',
      age: '28',
    },
  },
  {
    firstName: 'Seb',
    lastName: 'Gonzalez',
    userName: 'sgonzalez2',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'CU',
      bio: 'Hola, soy Sebastian y me gusta el yoga y la meditación.',
      age: '27',
    },
  },
  {
    firstName: 'Val',
    lastName: 'Perez',
    userName: 'valP',
    password: mockPassword,
    nativeLanguage: 'es',
    learnLanguage: 'en',
    info: {
      country: 'PA',
      bio: 'Hola, soy Valeria y me encanta la historia y la arqueología.',
      age: '31',
    },
  },
  {
    firstName: 'Leo',
    lastName: 'Sanchez',
    userName: 'lsanch_29',
    password: mockPassword,
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
    password: mockPassword,
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
    password: mockPassword,
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
    password: mockPassword,
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
  const uri = process.env.DB_CONNECTION_STRING;

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
