// API URL Constant
const API_URL = 'http://localhost:3004/departments';

// GET
const GET_DEPARTMENT_REQUEST = 'GET_DEPARTMENT_REQUEST';
const GET_DEPARTMENT_SUCCESS = 'GET_DEPARTMENT_SUCCESS';
const GET_DEPARTMENT_FAILURE = 'GET_DEPARTMENT_FAILURE';

// GET DEPARTMENTS
export function getDepartments() {
  return function (dispatch) {
    dispatch({
      type: GET_DEPARTMENT_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_DEPARTMENT_SUCCESS,
          departments: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DEPARTMENT_FAILURE,
          error,
        });
      });
  };
}

