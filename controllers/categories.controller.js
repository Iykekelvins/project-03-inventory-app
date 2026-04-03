const {
	editCategoryName,
	deleteCategoryName,
	addMovie,
	createNewCategory,
} = require('../db/mutations');
const { getSingleCategory, getMoviesByCategory } = require('../db/queries');

async function getCategory(req, res) {
	const id = req.params.id;

	const [category, movies] = await Promise.all([
		getSingleCategory(id),
		getMoviesByCategory(id),
	]);

	res.render('category', { category: category[0], movies });
}

async function createEditCategoryGet(req, res) {
	const category = await getSingleCategory(req.params.id);

	res.render('edit-category', { category: category[0] });
}

function createCategoryGet(req, res) {
	res.render('add-category');
}

async function createCategory(req, res) {
	const { name } = req.body;
	await createNewCategory(name);
	res.redirect('/');
}

async function editCategory(req, res) {
	const { name } = req.body;
	const id = req.params.id;

	await editCategoryName(id, name);
	res.redirect(`/categories/${id}`);
}

async function deleteCategory(req, res) {
	const id = req.params.id;

	await deleteCategoryName(id);
	res.redirect('/');
}

async function createAddMovieGet(req, res) {
	const category = await getSingleCategory(req.params.id);

	res.render('add-movie', { category: category[0] });
}

async function addMovieToCategory(req, res) {
	const id = req.params.id;
	const { title, year } = req.body;

	await addMovie(title, year, id);
	res.redirect(`/categories/${id}`);
}

module.exports = {
	getCategory,
	createEditCategoryGet,
	editCategory,
	deleteCategory,
	createAddMovieGet,
	addMovieToCategory,
	createCategoryGet,
	createCategory,
};
