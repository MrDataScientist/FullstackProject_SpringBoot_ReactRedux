import axios from "axios";
import {
  GET_CAPACITIES,
  DELETE_CAPACITY,
  ADD_CAPACITY,
  GET_ERRORS,
  GET_CAPACITY,
  CLEAR_CAPACITY_CLOSE_MODAL,
  UPDATE_CAPACITY
} from "./ActionTypes";

const clearErrors = () => ({
  type: GET_ERRORS,
  payload: {}
});

const instance = axios.create({
  baseURL: "http://localhost:8080/dashboard"
});

// const HerokuInstance = axios.create({
//   baseURL: ""
// });

export const getAllCapacities = () => async dispatch => {
  await instance
    .get()
    .then(function(res) {
      dispatch({
        type: GET_CAPACITIES,
        payload: res.data._embedded.capacityList,
        links: res.data._links
      });
    })
    .catch(function(error) {
      dispatch({
        type: GET_CAPACITIES,
        payload: [],
        links: {}
      });
    });
};



export const deleteCapacity = (id, deleteLink) => async dispatch => {
  await axios.delete(deleteLink);
  dispatch({
    type: DELETE_CAPACITY,
    payload: id
  });
};

export const addCapacity = (
  capacity,
  closeModal,
  postLink
) => async dispatch => {
  try {
    const res = await axios.post(postLink, capacity);
    closeModal();
    dispatch({
      type: ADD_CAPACITY,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};

export const getCapacityById = id => async dispatch => {
  dispatch({
    type: GET_CAPACITY,
    payload: id
  });
};

export const closeModalClearState = () => dispatch => {
  dispatch({
    type: CLEAR_CAPACITY_CLOSE_MODAL,
    payload: {
      techStack: "",
      numOfDevelopers: 0,
      numOfAvailableDevelopers: 0
    }
  });
  dispatch(clearErrors());
};
export const updateCapacity = (
  capacity,
  closeModal,
  updateLink
) => async dispatch => {
  try {
    const res = await axios.put(updateLink, capacity);
    closeModal();
    dispatch({
      type: UPDATE_CAPACITY,
      payload: res.data
    });
    dispatch(clearErrors());
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
