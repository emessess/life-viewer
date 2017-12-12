const db = require('../server/db');
const {User, Organism, Image} = require('../server/db/models');

async function seed () {
  await db.sync({force: true});
  console.log('db synced!');

  const users = await Promise.all([
    User.create({name: 'Murphy Brown', email: 'cody@email.com', password: '123'}),
    User.create({name: 'Cody Guy', email: 'murphy@email.com', password: '123'})
  ]);

  const organisms = await Promise.all([
    Organism.create({
      name: 'Bobcat',
      kingdom: 'TestK',
      phylum: 'TestP',
      class: 'TestC',
      order: 'TestO',
      genus: 'TestG',
      species: 'TestS'
    }),
    Organism.create({
      name: 'Manta Ray',
      kingdom: 'TestK',
      phylum: 'TestP',
      class: 'TestC',
      order: 'TestO',
      genus: 'TestG',
      species: 'TestS'
    })
  ]);

  const images = await Promise.all([
    Image.create({
      url: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Dharavandhoo_Thila_-_Manata_Black_Pearl.JPG', 
      organismId: 2
    }),
    Image.create({
     url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bobcat2.jpg/1200px-Bobcat2.jpg', 
     organismId: 1
    })
  ]);


  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${organisms.length} organisms`);
  console.log(`seeded ${images.length} images`);
  console.log(`seeded successfully`);
}

seed()
  .catch(err => {
    console.error(err.message);
    console.error(err.stack);
    process.exitCode = 1;
  })
  .then(() => {
    console.log('closing db connection');
    db.close();
    console.log('db connection closed');
  });

console.log('seeding...');
