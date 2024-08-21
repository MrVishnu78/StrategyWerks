const initialState = {
    items: [],
    hasMore: true,
  };
  
  const dataReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_ITEMS':
        return {
          ...state,
          items: [...state.items, ...action.payload],
          hasMore: action.payload.length === 1000,
        };
      default:
        return state;
    }
  };
  
  export default dataReducer;
  