import assert from 'assert';
import User from '../src/user.js';

describe('Deleting a User', () => {
    let mike;

    beforeEach((done) => {
        mike = new User({ name:  'Mike' });

        mike.save().
            then(() => done() );
    });
    
    it('model instance remove', (done) => {
        mike.delete({ name: 'Mike' })
        .then(() => User.findOne({ name:  'Mike' }))
        .then((user) => {
            assert (user === null);
        })
        done();
    }) 

    it('class method remove', (done) => {
        User.deleteOne({ name: 'Mike' })
            .then(() => User.findOne({ name:  'Mike' }))
            .then((user) => {
                assert (user === null);
            })
            done();
        
    });
    
    it('model instance findOneandRemove', (done) => {
        User.findOneAndRemove({ name: 'Mike' })
            .then(() => { User.findOne({ name: 'Mike' }) })
            .then((user) => { user === null });
            done();
    });

    it('model instance findByIdandRemove', (done) => {
        User.findByIdAndDelete( mike._id )
        .then(() => { User.findOne({ name: 'Mike' }) })
        .then((user) => { user === null });
        done();
    });
    
    
})