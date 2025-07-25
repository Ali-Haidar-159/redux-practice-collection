import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


    export let fetchData = createAsyncThunk("todos/fetchData" , function(){

        return fetch("https://jsonplaceholder.typicode.com/todos" , {
            method : "GET"
        })
        .then(function(r1){
            if(r1.ok)
            {
                return r1.json() ;
            }
        })
        .then(function(r2){
            return r2
        })

    })


let todosSlice  = createSlice({

    name : "todos" ,
    initialState : {
        isLoading : false , 
        error : null ,
        todos : []
    } ,
    extraReducers : function(builder){
        builder.addCase(fetchData.pending , function(state){
            state.isLoading = true 
        }) ;
        builder.addCase(fetchData.fulfilled , function(state,action){
            state.isLoading = false ;
            state.todos = action.payload
        }) ;
        builder.addCase(fetchData.rejected , function(state,action){
            state.isLoading = false ;
            state.error = action.payload
        }) ;
    }

})


export default todosSlice.reducer ;