import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);        
        });
});

beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
    // calling done to go to the next code piece 
        done();
    });
});

 