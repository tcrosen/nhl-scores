import Dispatcher from '../core/Dispatcher';
import ActionTypes from '../constants/ActionTypes';

const GameActions = {
  gameCreated(game) {
    Dispatcher.dispatch({
      actionType: ActionTypes.GAME_CREATED,
      game: game,
    });
  },

  gameSelected(game) {
    Dispatcher.dispatch({
      actionType: ActionTypes.GAME_SELECTED,
      game: game,
    });
  },

  gameUpdated(game) {
    Dispatcher.dispatch({
      actionType: ActionTypes.GAME_UPDATED,
      game: game,
    });
  },
};

module.exports = GameActions;
