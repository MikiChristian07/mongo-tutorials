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
    })


    function assertName(operation, done){
        operation
            .then(() => User.find({}))
            .then((users) => {
                assert(users.length === 1);
                assert(users[0].name === 'Alex'); 
        })
        done();
    }

    it('instance type using set and save', (done) => {
        mike.set('name', 'Alex');
        assertName(mike.save(), done());            
    })

    it('A model instance can update', (done) => {
        assertName(mike.updateOne({ name: 'Alex' }), done())
    })

    it('A model class can update one recores', (done) => {
        assertName(User.updateOne({ name: 'Alex' }), done())
    })
    
    it('A model class can find a record with an id and update', (done) => {
        assertName(User.findByIdAndDelete({ name: 'Alex' }), done())
    })
});