const redux=require('redux');
const createStore=redux.createStore;
const applyMiddleware=redux.applyMiddleware;
const thunkMiddleware=require('redux-thunk').default
const axios=require('axios');


const initialState={
    loading:false,
    users:[],
    error:''
}



const FETCH_USERS_REQUEST="FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS="FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE="FETCH_USERS_FAILURE";

//creating action creators

const fetchUsersRequest=()=>{
    return{
        type:FETCH_USERS_REQUEST,
        info:'An action creator for fetching users request'
    }
}

//both of below action creators are dependent on first one

const fetchUsersSuccess=users=>{
    return{
        type:FETCH_USERS_SUCCESS,
        info:'an action creator for successful request that puts all users in state',
        payload:users
    }
}

const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        info:'An action creator for unsucessful requests that puts all errors in state',
        payload:error
    }
}


//creating our reducer
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:return{
            ...state,
            loading:true
        }

        case FETCH_USERS_SUCCESS:return{
            loading:false,
            users:action.payload,
            error:'no error'
        }

        case FETCH_USERS_FAILURE:return{
            users:[],
            loading:false,
            error:action.payload
        }
    }

}


//an action creator
const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest()); //this will set loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            response=>{
                //if sucessful
                var response=response.data.map(user=>user.id);
                dispatch(fetchUsersSuccess(response));
                
            }
        ).catch(
            error=>{
                //if failed
                dispatch(fetchUsersFailure(error.message));

            }
        )

    }

}


const store=createStore(reducer,applyMiddleware(thunkMiddleware));

//listener
store.subscribe(()=>{
    console.log(store.getState());
})

//dispatching the action
store.dispatch(fetchUsers());