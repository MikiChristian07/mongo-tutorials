import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
    .once('open', () => console.log('Connected to the database...'))
    .on('error', (error) => {
        console.warn('Warning', error);        
    })