const { editMovieDetails, deleteMovieInfo } = require('../db/mutations');
const { getSingleMovie } = require('../db/queries');

async function createMovieGet(req, res) {
	const movie = await getSingleMovie(req.params.id);

	res.render('movie', { movie: movie[0] });
}

async function createEditMovieGet(req, res) {
	const movie = await getSingleMovie(req.params.id);

	res.render('edit-movie', { movie: movie[0] });
}

async function editMovie(req, res) {
	const { title, year } = req.body;
	const id = req.params.id;

	await editMovieDetails(id, title, year);
	res.redirect(`/movies/${id}`);
}

async function deleteMovie(req, res) {
	const id = req.params.id;

	const movie = await getSingleMovie(id);

	await deleteMovieInfo(id);
	res.redirect(`/categories/${movie[0].genre_id}`);
}

module.exports = { createMovieGet, createEditMovieGet, editMovie, deleteMovie };
