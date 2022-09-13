import assert from 'assert';
import User from '../src/user.js';

describe('Reading users from the database', () => {
    // declare the user variable, for scoping purposes
    let mike;

    beforeEach((done) => {
        //create the instance of the user
        mike = new User({ name:  'Mike' });

        mike.save()
            .then(() => { done(); })
    })
    
    // using .find()
    it('Finds all the users with the name of Mike', (done) => {
        User.find({name: 'Mike' })
            .then((users) => { 
                assert(users[0]._id.toString() === mike._id.toString());
            });
            done();
    });

    // using .findOne() 
    it('Find a user with a particular id', (done) => {
        User.findOne({_id: mike._id})
            .then((user) => {
                assert(user.name === 'Mike');
                done();
            })
    })
});