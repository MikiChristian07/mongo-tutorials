import assert from 'assert';
import User from "../src/user.js";

describe('Subdocuments', () => {
    it('can create a new Subdocument', (done) => {
        const mike = new User({ 
            name: 'Mike',
            posts: [{ title: 'First PostTitle'}]
        });

        mike.save()
            .then(() => User.findOne({ name: 'Mike' }))
            .then((user) => {
                assert(user.posts[0].title === 'First PostTitle');
            done();
        })
        
    });

    it('Can add subdocuments to an existing record', (done) => {
        const mike = new User({
            name: 'Mike',
            posts: []
        })

        mike.save()
            .then(() => User.findOne({ name: 'Mike'}))
            .then((user) => {
                user.posts.push({ title: 'New Post' });
                // implicity return user.save
                return user.save();
            }) 
            .then(() => User.findOne({ name: 'Mike'}))
            .then((user) => {
                assert(user.posts[0].title === 'New Post')
                console.log(user);
            })
            done();
    });

    it('can remove an exisiting subdocuments', (done) => {
        const mike = new User({
            name: 'Mike',
            post: 'New Title'
        })

        mike.save()
            .then(() => User.findOne({ name: 'Mike' }))
            .then((user) => {
                const post = user.posts[0];
                post.remove();
                // this will save the new altered list of posts to th db
                return user.save();
            })
            .then(() => User.findOne({ name: 'Mike' }))
            .then((user) => {
                assert(user.posts.length === 0);
            });
            done()
    })
})