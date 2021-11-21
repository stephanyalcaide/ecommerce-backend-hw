const seedCategories = require('./category-seeds')
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const seedEverything = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedTags();
  console.log('\n----- TAGS SEEDED -----\n');

  await seedProductTags();
  console.log9("SEDPRODUCTTAGES")
  process.exit(0);
};


