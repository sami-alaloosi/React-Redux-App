import {createStore,applyMiddleware} from "redux"
import githubReducer from "./githubUsers"
import thunk from "redux-thunk"


const store = createStore(githubReducer,applyMiddleware(thunk))
export default store;