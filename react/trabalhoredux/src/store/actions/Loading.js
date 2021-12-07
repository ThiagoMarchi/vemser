export const SET_LOADING = (bool, dispatch) => {
  const set = {
    type: 'SET_LOAD',
    loading: bool
  }

  dispatch(set)
}