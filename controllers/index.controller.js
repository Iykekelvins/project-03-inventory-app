const db = require('../db/queries');

async function createIndexGet(req, res) {
	const categories = await db.getAllCategories();

	res.render('index', { title: 'Movie Inventory App', categories });
}

async function createCategoryGet(req, res) {}

module.exports = {
	createIndexGet,
};
