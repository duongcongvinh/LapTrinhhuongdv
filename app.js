require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const supplierRoutes = require('./routes/supplierRoutes');
const productRoutes = require('./routes/productRoutes');

const app = express();

// configs
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

// connect DB
mongoose.connect(MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// middlewares
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => res.render('index'));
app.use('/suppliers', supplierRoutes);
app.use('/products', productRoutes);

// start
app.listen(PORT, () => console.log(`🚀 Server running: http://localhost:${PORT}`));
