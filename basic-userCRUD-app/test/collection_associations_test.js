import assert from 'assert';
import User from '../src/user.js';
import BlogPost from '../src/blogPost.schema.js';
import Comment from '../src/comment.schema.js';

describe('Associations', () => {
    let mike, blogPost, comment;

    beforeEach((done) => {
        mike = new User({ name:  'Mike' });
        blogPost = new BlogPost({ title: 'Js is great', content: 'Yup it really is' });
        comment = new Comment({ content: 'Congrats on great'});

        mike.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = mike; // one to one relationship;

        Promise.all([mike.save(), blogPost.save(), comment.save()])
            .then(() => done()); // combines mutitple promises toghether
    });


    it('should save a relation between a user and a blogpost', (done) => {
        User.findOne({ name: 'Mike' })
            .populate('blogPosts')
            .then((user) => { // when it returns a user
                console.log(user)
                assert(user.blogPosts[0].title === 'Js is great')
                done()
            })
    })

    it('saves a full relation graph', (done) => {
        User.findOne({ name: 'Mike' }) 
            .populate({
                path: 'blogPosts',
                populate: {
                    path: 'comments',
                    model: 'Comment',
                    populate: {
                        path: 'user',
                        model: 'User'
                    }
                }
            })
            .then((user) => { 
                console.log(user.blogPosts[0].comments)
                assert(user.name === 'Mike');
                assert(user.blogPosts[0].title === 'Js is great')
                assert(user.blogPosts[0].comments[0].content === 'Congrats on great')
                assert(user.blogPosts[0].comments[0].user.name === 'Mike')
                done()
             });            
    });
})