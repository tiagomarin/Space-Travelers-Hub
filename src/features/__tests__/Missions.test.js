import { Provider } from 'react-redux';
import {
  render, screen, fireEvent, act,
} from '@testing-library/react';
import store from '../../app/store';
import Missions from '../Missions/Missions';
import MyProfile from '../MyProfile/MyProfile';
import reducer, { joinMission } from '../Missions/missionSlice';

describe('Tests: Missions', () => {
  afterEach(() => {
    act(() => store.dispatch({
      type: 'space-travelers-hub/missions/missionsLoaded',
      payload: [],
    }));
  });

  it('Join a mission', async () => {
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const button = await screen.findAllByAltText('Join Mission');
    fireEvent.click(button[0]);

    const joinBtn = await screen.findAllByAltText('Leave Mission');
    expect(joinBtn).Length.toBe(1);
  });

  it('Leave a mission', async () => {
    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    const button = await screen.findAllByAltText('Leave Mission');
    fireEvent.click(button[0]);

    const joinBtn = await screen.findAllByAltText('Join Mission');
    expect(joinBtn).Length.toBe(10);
  });

  it('Contain Join missions', async () => {
    const { unmount } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const joinBtn = await screen.findAllByAltText('Join Mission');
    fireEvent.click(joinBtn[0]);
    unmount();

    render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    expect(screen.queryByText('Thaicom')).not.toBeNull();
  });

  it('Should match the snapshot', async () => {
    const dom = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    await act(() => expect(dom).toMatchSnapshot());
  });

  it('Return an action with type missions/JOIN', () => {
    const id = '1';
    const action = joinMission(id);
    expect(action.type).toBe('space-travelers-hub/missions/JOIN');
  });
});

it('Should return the initial state', () => {
  const state = reducer(undefined, {});
  expect(state).toEqual([]);
});

it('Should return the state with the new mission', () => {
  const state = reducer(undefined, joinMission('1'));
  expect(state).toEqual(['1']);
});
