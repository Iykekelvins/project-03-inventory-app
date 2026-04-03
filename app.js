const express = require('express');
const path = require('node:path');
require('dotenv').config();

const indexRoutes = require('./routes/index.route');
const categoriesRoutes = require('./routes/categories.route');
const moviesRoutes = require('./routes/movies.route');

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// routes
app.use('/', indexRoutes);
app.use('/categories', categoriesRoutes);
app.use('/movies', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
	if (err) {
		throw err;
	}
	console.log(`Server running on PORT: ${PORT}`);
});
