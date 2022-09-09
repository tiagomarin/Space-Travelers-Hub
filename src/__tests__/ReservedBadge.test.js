import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import store from '../app/store';
import ReservedBadge from '../features/Rockets/Components/ReservedBadge';

describe('RocketsList component', () => {
  it('rendered RocketsList component', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <ReservedBadge />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
