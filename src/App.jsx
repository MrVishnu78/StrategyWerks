import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FixedSizeList as List } from 'react-window';
import './App.css';
import { loadItems } from './redux/dataActions';

const App = () => {  
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data.items);
  const hasMore = useSelector((state) => state.data.hasMore);

  const ITEM_HEIGHT = window.innerWidth < 600 ? 70 : 50;
  const VISIBLE_ITEMS = Math.floor(window.innerHeight / ITEM_HEIGHT) - 2;

  const loadMoreItems = useCallback(() => {
    if (!hasMore) return;
    const startIndex = items.length + 1;
    dispatch(loadItems(startIndex));
  }, [dispatch, items.length, hasMore]);

  // eslint-disable-next-line react/display-name, react/prop-types
  const InfiniteLoader = React.memo(({ index, style }) => {
    if (hasMore && index >= items.length - VISIBLE_ITEMS) {
      loadMoreItems();
    }

    return (
      <div style={style} className="item">
        {items[index] || 'Loading...'}
      </div>
    );
  });

  useEffect(() => {
    loadMoreItems();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app-container">
      <h1 className="heading">Strategywerks Assessment</h1>
      <div className="list-container">
        <List
          height={window.innerHeight - 100}
          itemCount={items.length + (hasMore ? 1 : 0)}
          itemSize={ITEM_HEIGHT}
          width="100%"
          className="virtual-list"
        >
          {InfiniteLoader}
        </List>
      </div>
    </div>
  );
};

export default App;
