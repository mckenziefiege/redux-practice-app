const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      // case 'ADD_TODO':
      //   return [
      //     ...state,
      //     [
      //       ...state, action.payload
      //     ]
      //   ]
      default:
        return state
    }
  }
  
  export default reducer;