var redux = require('redux');

console.log('Strating redux example');

var stateDefault = {
    name: 'Anonymous',
    hobbies: [],
    movies: [],
};

var nextHobbyId = 1;
var nextMovieId = 1;

//if no state argument, it's going to use the "name" object insted, below commented text does the same, but uncommented text is the ES6 way.
var reducer = (state = stateDefault, action) => { 
    //state = state || {name: 'Anonymous'};
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                ...state,
                name: action.name
            };
        case 'ADD_HOBBY':
            return {
                ...state,                
                hobbies: [ //creating array and adding onto the existing hobbies
                    ...state.hobbies,
                    {
                        id: nextHobbyId++,
                        hobby: action.hobby                
                    }
                ]
            };
        case 'REMOVE_HOBBY':
            return {
                ...state,                
                hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id) //keep item in array if true is returned
            };    
        case 'ADD_MOVIE':
        return {
            ...state,                
            movies: [ //creating array and adding onto the existing hobbies
                ...state.movies,
                {
                    id: nextMovieId++,
                    title: action.title,
                    genre: action.genre            
                }
            ]
        };
        case 'REMOVE_MOVIE':
            return {
                ...state,                
                movies: state.movies.filter((movie) => movie.id !== action.id) //keep item in array if true is returned
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
    
    console.log('New state', store.getState());
});

//unsubscribe(); 

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Andrew'    
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'    
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Basketball'    
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 2
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Shawshank Redemption',
    genre: 'Drama'
});

store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Emily'
});

store.dispatch({
    type: 'ADD_MOVIE',
    title: 'Rocky',
    genre: 'Drama'
});

store.dispatch({
    type: 'REMOVE_MOVIE',
    id: 2
});