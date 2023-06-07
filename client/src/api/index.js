import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });
// This function sets the authorization header for the API requests.
const setAuthorizationHeader = () => {
  if (localStorage.getItem('profile')) {
    API.defaults.headers.common.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
};

API.interceptors.request.use(async (config) => {
  setAuthorizationHeader();

  return config;
});

// These are functions that make API requests using the 'API' instance created above.
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const fetchPosts = (page) => API.get(`/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => API.get(`/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => API.post('/posts', newPost);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
export const comment = (value, id) => API.post(`/posts/${id}/commentPost`, { value });
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
