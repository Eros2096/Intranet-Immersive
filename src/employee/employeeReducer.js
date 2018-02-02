// todos reducer
// import uuid from 'uuid/v1';

const DEFAULT_STATE = {
  loading: false,
  employees: [],
  error: '',
};

const employees = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_EMPLOYEE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_EMPLOYEE_SUCCESS':
      return {
        ...state,
        loading: false,
        employees: action.employees,
      };
    case 'GET_EMPLOYEE_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default employees;
