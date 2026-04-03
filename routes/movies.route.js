const { Router } = require('express');
const router = Router();

const {
	createMovieGet,
	createEditMovieGet,
	editMovie,
	deleteMovie,
} = require('../controllers/movies.controller');

router.get('/:id', createMovieGet);
router.get('/:id/edit', createEditMovieGet);
router.post('/:id/edit', editMovie);
router.post('/:id/delete', deleteMovie);

module.exports = router;
