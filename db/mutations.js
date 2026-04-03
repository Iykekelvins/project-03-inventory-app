const pool = require('./pool');

async function editCategoryName(id, name) {
	const { rows } = await pool.query(
		'SELECT * FROM genres WHERE LOWER(name) = LOWER($1)',
		[name],
	);

	if (rows.length > 0 && rows[0].id !== parseInt(id)) {
		throw new Error('Category already exists');
	}

	await pool.query('UPDATE genres SET name=$1 WHERE id=$2', [name, id]);
}

async function createNewCategory(name) {
	const { rows } = await pool.query(
		'SELECT * FROM genres WHERE LOWER(name) = LOWER($1)',
		[name],
	);

	if (rows.length > 0) {
		throw new Error('Category already exists');
	}

	await pool.query('INSERT INTO genres (name) VALUES ($1)', [name]);
}

async function deleteCategoryName(id) {
	const { rows } = await pool.query('SELECT * FROM genres WHERE id = $1', [id]);

	if (rows.length === 0) {
		throw new Error('Category may have already been deleted');
	}

	await pool.query('DELETE FROM genres WHERE id = $1', [id]);
}

async function addMovie(title, year, genre_id) {
	const { rows } = await pool.query(
		'SELECT * FROM movies WHERE LOWER(title) = LOWER($1)',
		[title],
	);

	if (rows.length > 0) {
		throw new Error('Movie already exists');
	}

	await pool.query(
		'INSERT INTO movies (title, year, genre_id) VALUES ($1, $2, $3)',
		[title, year, genre_id],
	);
}

async function editMovieDetails(id, title, year) {
	const { rows } = await pool.query(
		'SELECT * FROM movies WHERE LOWER(title) = LOWER($1)',
		[title],
	);

	if (rows.length > 0 && rows[0].id !== parseInt(id)) {
		throw new Error('Movie already exists');
	}

	await pool.query('UPDATE movies SET title=$1, year=$2 WHERE id=$3', [
		title,
		year,
		id,
	]);
}

async function deleteMovieInfo(id) {
	const { rows } = await pool.query('SELECT * FROM movies WHERE id = $1', [id]);

	if (rows.length === 0) {
		throw new Error('Movie may have already been deleted');
	}

	await pool.query('DELETE FROM movies WHERE id = $1', [id]);
}

module.exports = {
	editCategoryName,
	createNewCategory,
	deleteCategoryName,
	addMovie,
	editMovieDetails,
	deleteMovieInfo,
};
