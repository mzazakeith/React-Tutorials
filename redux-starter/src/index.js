import store from './store'
import {bugAdded, bugRemoved, bugResolved} from './actions'


store.subscribe(()=>{
    console.log("state changed", store.getState())
})

store.dispatch(bugAdded("New Bug"))
store.dispatch(bugAdded("New Bug 2"))
// store.dispatch(bugRemoved(1))
store.dispatch(bugResolved(2))


console.log(store.getState())