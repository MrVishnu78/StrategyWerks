export const loadItems = (startIndex) => {
    return (dispatch) => {
      const newItems = Array.from({ length: 1000 }, (_, i) => `Item ${startIndex + i}`);
      dispatch({
        type: 'LOAD_ITEMS',
        payload: newItems,
      });
    };
  };
  