const INITIAL_STATE = {
  pessoas: []
}

const setUser = (state, action) => {

  return {
    pessoas: action.data
  }
}

const putUser = (state, action) => {
  const list = state.pessoas.map(e => {
    if(e.idPessoa === action.data.idPessoa) {
      return action.data
    }
    return e
  })

  return {
    pessoas: [
      ...list
    ]
  }
}

const postUser = (state, action) => {
  return {
    pessoas: [
      ...state.pessoas,
      action.data
    ]
  }
}

const deleteUser = (state, action) => {

  const list = state.pessoas.filter(e => e.idPessoa !== action.idPessoa)

  return {
    pessoas: [ ...list  ]
  }
}

export default function pessoaReducer(state = INITIAL_STATE, action) {

  if(action.type === 'SET_USERS'){
    return setUser(state, action)
  }

  if(action.type === 'PUT_USER'){
    return putUser(state, action)
  }

  if(action.type === 'POST_USER'){
    return postUser(state, action)
  }

  if (action.type === 'DELETE_USER'){
    return deleteUser(state, action)
  }

  return state
}