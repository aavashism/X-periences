import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import CommentSection from './CommentSection';
import useStyles from './styles';



  // Creating a functional component named 'Post'
const Post = () => {
  // Destructuring state properties from redux store
  const { post, posts, isLoading } = useSelector((state) => state.posts);
  // Creating an instance of useDispatch hook
  const dispatch = useDispatch();
  // Creating an instance of useHistory hook
  const history = useHistory();
  // Importing and assigning class styles
  const classes = useStyles();
  // Destructuring the dynamic parameter value from the URL
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }, [post]);

  if (!post) return null;

  const openPost = (_id) => history.push(`/posts/${_id}`);
  // Creating an array of posts recommended to the user

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  return (
    <Paper className={classes.paper}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2" gutterBottom>{post.title}</Typography>
          <Typography variant="h6" gutterBottom>X-perience by: {post.name}</Typography>
          <Typography variant="body1" gutterBottom>{moment(post.createdAt).fromNow()}</Typography>
          <Divider className={classes.divider} />
          <Typography variant="body1" gutterBottom>{post.message}</Typography>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post.selectedFile || 'https://www.indiaspora.org/wp-content/uploads/2018/10/image-not-available.jpg'} alt={post.title} style={{ maxWidth: '50vw' }} />
          </div>
          <Divider className={classes.divider} />
          <Typography variant="body1"><strong>X-perience</strong></Typography>
          <Divider className={classes.divider} />
          <CommentSection post={post} />
        </div>
      </div>
      {!!recommendedPosts.length && (
        <div className={classes.recommended}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({ title, name, message, likes, selectedFile, _id }) => (
              <div className={classes.post} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{message}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                <img className={classes.recommendedImg} src={selectedFile} alt={title} style={{ maxWidth: '50vw' }} />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Post;


