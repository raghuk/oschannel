import { combineReducers } from 'redux';

import { reducer as app } from '../modules/app';
import { reducer as shows } from '../modules/shows';


export default combineReducers({
  app,
  shows
});
