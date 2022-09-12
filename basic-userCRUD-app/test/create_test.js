import assert from 'assert';
import User from '../src/user.js';

describe('Creating records', () => {
    it('saves a user', () => {
        const mike = new User({ name:  'Mike' });

        mike.save()
    });

});