export default function reducer(state, action) {
  switch (action.type) {
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currentNote: action.payload
      }
    default: 
    return state;
  }
}