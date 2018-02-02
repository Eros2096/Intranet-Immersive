// API URL Constant
const API_URL = 'http://localhost:3004/employees';

// GET
const GET_EMPLOYEE_REQUEST = 'GET_EMPLOYEE_REQUEST';
const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
const GET_EMPLOYEE_FAILURE = 'GET_EMPLOYEE_FAILURE';

// GET EMPLOYEES
export function getEmployees() {
  return function (dispatch) {
    dispatch({
      type: GET_EMPLOYEE_REQUEST,
    });
    fetch(API_URL)
      .then(response => response.json())
      .then((data) => {
        dispatch({
          type: GET_EMPLOYEE_SUCCESS,
          employees: data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_EMPLOYEE_FAILURE,
          error,
        });
      });
  };
}

