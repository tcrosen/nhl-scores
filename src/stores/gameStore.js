import { find } from 'lodash';
import Dispatcher from '../core/Dispatcher';
import { EventEmitter } from 'events';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';
let _games = [];
let _game = {
  away: {
    name: '',
    score: 0,
  },
  home: {
    name: '',
    score: 0,
  },
};

function create(game) {
  _games.push(game);
  return game;
}

const GameStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _games;
  },

  getById(id) {
    return find(_games, { id: id });
  },

  getSelected() {
    return _game;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },
});

// Register callback to handle all updates
Dispatcher.register((action) => {
  switch (action.actionType) {
  case ActionTypes.INITIALIZE:
    _games = action.initialData.games;
    GameStore.emitChange();
    break;
  case ActionTypes.GAME_CREATED:
    create(action.game);
    GameStore.emitChange();
    break;
  case ActionTypes.GAME_SELECTED:
    _game = action.game;
    GameStore.emitChange();
    break;
  default:
    // no op
  }
});

export default GameStore;
