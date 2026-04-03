const pool = require('./pool');

async function getAllCategories() {
	const { rows } = await pool.query('SELECT * FROM genres');
	return rows;
}

async function getSingleCategory(categoryId) {
	const { rows } = await pool.query(`SELECT * FROM genres WHERE id = ${categoryId}`);
	return rows;
}

async function getMoviesByCategory(categoryId) {
	const { rows } = await pool.query(
		`SELECT * FROM movies WHERE genre_id = ${categoryId}`,
	);
	return rows;
}

async function getSingleMovie(movieId) {
	const { rows } = await pool.query(`SELECT * FROM movies WHERE id = ${movieId}`);
	return rows;
}

module.exports = {
	getAllCategories,
	getSingleCategory,
	getMoviesByCategory,
	getSingleMovie,
};
