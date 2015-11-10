import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';
import GameApi from '../api/gameApi';

const InitializeActions = {
  initApp() {
    GameApi.getAll((games) => {
      Dispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE,
        initialData: {
          games: games,
        },
      });
    });
  },
};

module.exports = InitializeActions;
