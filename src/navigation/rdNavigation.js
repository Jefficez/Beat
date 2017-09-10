import RootNavigation from './RootNavigation';

export default (state, action) => {
    const newState = RootNavigation.router.getStateForAction(action, state);
    return newState || state;
};
