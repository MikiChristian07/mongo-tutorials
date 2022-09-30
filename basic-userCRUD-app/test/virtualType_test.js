import assert from 'assert';
import User from '../src/user.js';

describe('Virtual Types', () => {
    it('postCount returns the number of posts', (done) => {
        const mike = new User({ 
            name: 'Mike',
            posts: [{ title: 'Post Title' }]
        });

        mike.save()
            .then(() => User.findOne({ name: 'Mike' }))
            .then((user) => {
                assert(mike.postCount === 1);
                done();
            })        
    })
});