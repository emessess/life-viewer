/**
 * Welcome to the seed file! This seed file uses a newer language feature called...
 *
 *                  -=-= ASYNC...AWAIT -=-=
 *
 * Async-await is a joy to use! Read more about it in the MDN docs:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
 *
 * Now that you've got the main idea, check it out in practice below!
 */
const db = require('../server/db');
const {User, Organism, Image} = require('../server/db/models');

async function seed () {
  await db.sync({force: true});
  console.log('db synced!');
  // Whoa! Because we `await` the promise that db.sync returns, the next line will not be
  // executed until that promise resolves!

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


  // Wowzers! We can even `await` on the right-hand side of the assignment operator
  // and store the result that the promise resolves to in a variable! This is nice!
  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${organisms.length} organisms`);
  console.log(`seeded ${images.length} images`);
  console.log(`seeded successfully`);
}

// Execute the `seed` function
// `Async` functions always return a promise, so we can use `catch` to handle any errors
// that might occur inside of `seed`
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

/*
 * note: everything outside of the async function is totally synchronous
 * The console.log below will occur before any of the logs that occur inside
 * of the async function
 */
console.log('seeding...');
