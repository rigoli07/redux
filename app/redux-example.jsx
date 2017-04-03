var redux = require('redux');

console.log('Strating redux example');

//if no state argument, it's going to use the "name" object insted, below commented text does the same, but uncommented text is the ES6 way.
var reducer = (state = {name: 'Anonymous'}, action) => { 
    //state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes, unsubscribing from the subscribe is in built and can be called easily, at any time
var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    
    console.log('Name is', state.name);
    document.getElementById('app').innerHTML = state.name;
});

//unsubscribe(); 

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'    
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
});