import mongoose from 'mongoose';

mongoose.Promise = global.Promise;


// "C:\Program Files\MongoDB\Server\5.0\bin\mongod.exe" --dbpath="c:\data\db"
before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => { done(); })
        .on('error', (error) => {
            console.warn('Warning', error);        
        });
});

beforeEach((done) => {
    const { users, comments, blogposts } = mongoose.connection.collections
    users.drop(() => {
        blogposts.drop(() => {
            comments.drop(() => {
                done();
            })
        })
    });
});

 