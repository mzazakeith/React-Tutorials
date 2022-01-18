import store from './store'
import * as actions from './actionTypes'

store.subscribe(()=>{
    console.log("state changed", store.getState())
})


store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description : "Bug1"
    }
});

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description : "Bug2"
    }
});

store.dispatch({
    type: actions.BUG_REMOVED,
    payload:{
        id:1
    }
});

console.log(store.getState())