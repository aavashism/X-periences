// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//   media: {
//     borderRadius: '20px',
//     objectFit: 'cover',
//     width: '70%',
//     maxHeight: '600px',

//   },
//   card: {
//     display: 'flex',
//     width: '100%',
//     [theme.breakpoints.down('sm')]: {
//       flexWrap: 'wrap',
//       flexDirection: 'column',
//     },
//   },
//   section: {
//     borderRadius: '20px',
//     margin: '100px',
//     flex: 1,
//   },

//   imageSection: {
//     marginRight: '20px',
//     float: 'left',
//     [theme.breakpoints.down('sm')]: {
//       marginRight: 0,
//     },
//   },
  
//   recommendedPosts: {
//     display: 'flex',
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//     },
//   },
//   loadingPaper: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '20px',
//     borderRadius: '15px',
//     height: '39vh',
//   },
//   commentsOuterContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     marginLeft: '20px',
//   },
//   commentsInnerContainer: {
//     height: '300px',
//     width: '500px',
//     overflowY: 'auto',
//     marginRight: '30px',
//   },
// }));


import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '70%',
    maxHeight: '600px',

  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '100px',
    flex: 1,
  },

  imageSection: {
    marginRight: '20px',
    float: 'left',
    [theme.breakpoints.down('sm')]: {
      marginRight: 0,
    },
  },
  
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  commentsOuterContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '20px',
  },
  commentsInnerContainer: {
    height: '300px',
    width: '500px',
    overflowY: 'auto',
    marginRight: '30px',
    color: 'black',
  },
}));


