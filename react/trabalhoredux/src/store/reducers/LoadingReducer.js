const INITIAL_STATE = {
  loading: false
}


const setLoading = (state, action) => {
  return {
    loading: action.loading
  }
}


export default function loadingReducer(state = INITIAL_STATE, action) {
  
  if(action.type === 'SET_LOAD') {
    return setLoading(state, action)
  }
  
  return state
}