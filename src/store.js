import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { createLogger } from 'redux-logger';

import departmentReducer from './department/departmentReducer';
import employeeReducer from './employee/employeeReducer';

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true,
});

const store = createStore(
  combineReducers({ Department: departmentReducer, Employee: employeeReducer }),
  composeWithDevTools(applyMiddleware(
    ReduxThunk,
    logger,
  )),
);

export default store;
