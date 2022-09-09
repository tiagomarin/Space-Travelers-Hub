import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Missions from '../Missions/Missions';
import store from '../../app/store';

describe('Missions test', () => {
  test('snapshoot for mission', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Missions />
          </Router>
        </Provider>
        ,
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
