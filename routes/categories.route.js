const { Router } = require('express');
const {
	getCategory,
	createEditCategoryGet,
	editCategory,
	deleteCategory,
	createAddMovieGet,
	addMovieToCategory,
	createCategoryGet,
	createCategory,
} = require('../controllers/categories.controller');

const router = Router();

router.get('/add', createCategoryGet);
router.post('/add', createCategory);
router.get('/:id', getCategory);
router.get('/:id/edit', createEditCategoryGet);
router.post('/:id/edit', editCategory);
router.post('/:id/delete', deleteCategory);
router.get('/:id/movies/add', createAddMovieGet);
router.post('/:id/movies/add', addMovieToCategory);

module.exports = router;
