const redux = require('redux')

const counterReducer = (state = {counter: 0}, action) => {
    if(action.type === 'increment'){
        return{
            counter: state.counter + (action.value || 1)   // Use action.value or default to 1
        }
    }
};


const store = redux.createStore(counterReducer);


const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);

for(let i=0; i<5; i++){
    store.dispatch({type: 'increment', value: 5});
}