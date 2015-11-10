import Dispatcher from '../core/Dispatcher';
import { EventEmitter } from 'events';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';
let _games = [];

const GameStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return _games;
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
  default:
    // no op
  }
});

export default GameStore;
