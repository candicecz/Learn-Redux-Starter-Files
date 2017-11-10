import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const {comments, params, posts} = this.props;
    //index of the post
    const i = posts.findIndex(post => post.code === params.postId);
    const post = posts[i];
    const postComments = comments[params.postId] || [];
    return (
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments postComments={postComments} {...this.props} />
      </div>
    );
  },
});

export default Single;
