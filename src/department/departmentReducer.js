// todos reducer
// import uuid from 'uuid/v1';

const DEFAULT_STATE = {
  loading: false,
  departments: [],
  error: '',
};

const departments = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'GET_DEPARTMENT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GET_DEPARTMENT_SUCCESS':
      return {
        ...state,
        loading: false,
        departments: action.departments,
      };
    case 'GET_DEPARTMENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default departments;

