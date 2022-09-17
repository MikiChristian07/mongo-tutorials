import assert from 'assert';
import User from '../src/user.js';

describe('Upadating users in the database', () => {
    // declare the user variable, for scoping purposes
    let mike;

    beforeEach((done) => {
        //create the instance of the user
        mike = new User({ name:  'Mike' });

        mike.save()
            .then(() => { done(); })
    })dkkdkkkjdbdkakim
});