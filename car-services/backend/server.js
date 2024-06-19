import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import userRoutes from './routes/users.js';

// Get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const dbURI = 'mongodb+srv://Junior:Jonathan101@cluster0.kooqsc3.mongodb.net/users?retryWrites=true&w=majority&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000';
mongoose.connect(dbURI, {
    useNewUrlParser: true, // Even though deprecated, ensures compatibility
    useUnifiedTopology: true // Even though deprecated, ensures compatibility
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/dist')));

// Routes
app.use('/api', userRoutes);

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
