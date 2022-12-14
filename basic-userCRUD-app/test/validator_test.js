import assert from  'assert';
import User from '../src/user.js';

describe('Validating Records', () => {
    it('requires a user name', () => {
        const user = new User({ name: undefined });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'Name is required' )
    })

    it('requires a user name longer than 2 characters', () => {
        const user = new User({ name: 'Ty' });
        const validationResult = user.validateSync();
        const { message } = validationResult.errors.name;

        assert(message === 'Name must be longer than 2 characters'); 
    })

    it('Disallows invalid records from being saved', (done) => {
        const user = new User({ name: 'Ty' });
        user.save()
            .catch((validationResult) => {
                const { message } = validationResult.errors.name;

                assert(message === 'Name must be longer than 2 characters');
                done();
            })
    })
})