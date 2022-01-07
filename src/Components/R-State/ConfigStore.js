import { createStore, combineReducers } from "redux"; //(1)
import { groupreducer } from "../R-Reducer/groupReducer"; //(1.2)

//(1.3)
export const configStore = () => {
  //(1.4)
  const myStore = createStore(
    //(1.5)
    combineReducers({ groupreducer }),
    //(1.6)
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
  );
  //(1.7)
  return myStore;
};
