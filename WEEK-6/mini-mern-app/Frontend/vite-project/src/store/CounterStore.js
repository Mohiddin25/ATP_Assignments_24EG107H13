import {create} from 'zustand'

// create store
export const useCounterStore=create((set)=>({
    // state
    newCounter:0,
    newCounter1:0,
    // add user state (name,age,email)
    user:{name:"ravi",email:"ravi@mail.com",age:21},

    // function to change email
    changeEmail:()=>set({...user,email:"test@mail.com"}),
    // function to change name and age
    changeDetails:()=>set({...user,name:"Khasim",age:"30"}),

    // functions to modify state
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    reset:()=>set({newCounter:0}),
    
    // function to change newCounter to 500
    resetTo500:()=>set({newCounter:500}),

    // function to decrement newCounter1 by 20
    decrementCounter1:()=>set(state=>({newCounter1:state.newCounter1-20}))

}))