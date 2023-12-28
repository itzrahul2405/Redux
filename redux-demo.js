const redux = require('redux')

const counterReducer = (state = {counter: 0}, action) => {
    switch (action.type) {
        case 'increment':
          return {
            counter: state.counter + (action.value || 1)   // Use action.value or default to 1
          };
        case 'decrement':
          return {
            counter: state.counter - (action.value || 1)   // Use action.value or default to 1
          };
        default:
          return state;
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
for(let i=0; i<5; i++){
    store.dispatch({type: 'decrement', value: 2});
}

