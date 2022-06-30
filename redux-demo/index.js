 const redux=require('redux');
const createStore=redux.createStore;

//your state is always an object
//even if your state needs just one integer variable it should be inside an object

const initialState={
    numofCakes:10
}

//an action creator is a function that creates/returns an action
//this function should have a type property

const BUY_CAKE='BUT_CAKE';
function buyCake(){
    return{
    type:BUY_CAKE,
    info:'FIrst redux Action'

    }
}


//reducers;
//specify how the app's state changes in response to actions sent to the store
 
//(previousState,action)=>newState

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            numofCakes:state.numofCakes-1
        }
        default:return state
    }
}

const store=createStore(reducer); //creating the redux store
console.log('initial state is ',store.getState());//using

//listener, any time a state updates it listens much like an event listener
const unsubscribe=store.subscribe(()=>{
    console.log("updated state is ",store.getState());
})

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe(); //we don't listen to anymore changes in store


