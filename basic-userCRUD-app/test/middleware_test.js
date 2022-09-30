import mongoose from 'mongoose';
import assert from 'assert';
import User from '../src/user.js';
import BlogPost from '../src/blogPost.schema.js';

describe('Middleware', () => {
    let mike, blogPost

    beforeEach((done) => {
        mike = new User({ name:  'Mike' });
        blogPost = new BlogPost({ title: 'Js is great', content: 'Yup it really is' });

        mike.blogPosts.push(blogPost);

        Promise.all([mike.save(), blogPost.save()])
            .then(() => done()); // combines mutitple promises toghether
    });

    it('Users clean up dangling blogposts on remove', (done) => {
        joe.remove()
        .then(() => BlogPost.count())
        .then((count) => {
            assert(count === 0)
            done();
        })
    })
})