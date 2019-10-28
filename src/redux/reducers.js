const initialState = {
  todos: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_TODOS':
        return {
          ...state, todos: action.payload
        }
      default:
        return state
    }
  }
  
  export default reducer;