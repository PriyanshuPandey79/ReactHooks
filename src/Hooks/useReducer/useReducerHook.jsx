import React,{useReducer} from 'react'


//This reducer function takes arguments as state(which stores the cuurent state of the variables) and action, through which we specify
//the type of action to be performed.
//Within the function we apply switch statement on action.type (which is send by dispatch).
//Corresponding to that action type the new values are returned as an object.
//At last we define a default value which gets invoked when the action.type doesn't matches with any case.
//So, in the default case we return the current state as it is;
 const reducer=(state,action)=>{
    switch(action.type){
        case "increment":
            //it is important to return all varaibles with each return, otherwise the code won't work
            return {count:state.count+1, showText:state.showText};
        case "showText":
            return {count:state.count, showText:!state.showText};
        default:
            return state;
    }

 }

 

function useReducerHook() {
//state stores down all the variable values, while dispatah is used to send which action type to be called.
//The useReducer hook takes two things a function -reducer for changing the values of state, and an object which stores initial 
//state of the required variables that are to be stored in state. 
//Remember this reducer function needs to be made out of the main component function(in this case out of the function named 
//'useReducerHook', otherwise the code won't work. 

  const [state,dispatch]=useReducer(reducer,{count:0,showText:true});

  function func(){
     
    dispatch({type:"increment"})
    dispatch({type:"showText"}); 
}
//This might seem useless, as this can be easily achieved by useState in less lines of code, but this hook is of great use when the project 
//is much more complex and having various different variable.
//The syntax matches with somewhat to that of react-Redux 

//wherever we have to use the variables defined using useReducer hook we take the variable from state, as shown below.    
  return (
    <div className='content'>
        <h1 className='heading'>useReducer Hook</h1>
       <div>
        Count:{state.count}
        <button className='increment'
        onClick={func}
        >
        Increment
        </button>
        
        {state.showText && <p>This is a text</p>}
        </div> 





    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    <hr/>
    </div>
  )
}

export default useReducerHook