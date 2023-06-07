import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';


// signin function that takes in formData and router as arguments and returns an async function that dispatches AUTH action and routes to '/' on successful sign in
export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

// signup function that takes in formData and router as arguments and returns an async function that dispatches AUTH action and routes to '/' on successful sign up
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};
