var redux = require('redux');

console.log('Strating redux todo example');

var stateDefault = {
    searchText: '', 
    showCompleted: false, 
    todos: [] 
}

//if no state argument, it's going to use the "name" object insted, below commented text does the same, but uncommented text is the ES6 way.
var reducer = (state = stateDefault, action) => { 
    switch (action.type) { //check the value
        case 'CHANGE_SEARCH_TEXT': //if action type is equal to 'CHANGE_SEARCH_TEXT'
            return {
                ...state, //will have all props of existing state
                searchText: action.searchText //will update searchText state
            };
        default:
            return state;
    }
};

var store = redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

//subscribe to changes

var unsubscribe = store.subscribe(() => {
    var state = store.getState();
    
    console.log('Search text is', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'work'    
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'sport'    
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'movies'
});