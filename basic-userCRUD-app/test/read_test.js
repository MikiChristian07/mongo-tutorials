import assert from 'assert';
import User from '../src/user.js';

describe('Reading users from the database', () => {
    // declare the user variable, for scoping purposes
    let mike;

    beforeEach(() => {
        //create the instance of the user
        mike = new User({ name:  'Mike' });

        mike.save()
            .then(() => { done(); })
    })
    
    it('Finds all the users with the name of Mike', (done) => {
        User.find({name: 'Mike' })
            .then((users) => { 
                console.log(users);
            });
        done();
    });
});