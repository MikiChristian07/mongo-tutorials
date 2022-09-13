import assert from 'assert';
import User from '../src/user.js';

describe('Creating records', () => {
    it('saves a user', (done) => {
        const mike = new User({ name:  'Mike' });

        mike.save()
            .then((success) => {
                assert(!mike.isNew);
            })
            done();
    });

});