import { isEmpty, isArray, join, sortedUniq } from 'lodash';

import * as types from './actionTypes';


export function loadShows() {
  return {
    types: [types.INFO_LOAD, types.INFO_LOAD_SUCCESS, types.INFO_LOAD_FAILURE],
    payload: {
      request: {
        method: 'get',
        url: '/10'
      }
    }
  };
}

export function resetShows() {
  return {
    type: types.INFO_RESET
  };
}

export function loadShowList(ids = [], apiKey = '', removableTitles = []) {
  const list = (isArray(ids) && !isEmpty(ids)) ? join(sortedUniq(ids), ',') : '';

  return {
    types: [types.SHOWLIST_LOAD, types.SHOWLIST_LOAD_SUCCESS, types.SHOWLIST_LOAD_FAILURE],
    payload: {
      client: 'youtubeAPI',
      request: {
        method: 'get',
        url: '/playlists',
        params: { id: list, key: apiKey, part: 'snippet,contentDetails', maxResults: 50 }
      }
    },
    removableTitles
  };
}

export function resetShowList() {
  return {
    type: types.SHOWLIST_RESET
  };
}

export function loadPlayList(title = '', id = '', apiKey = '', removableTitles = []) {
  return {
    types: [types.PLAYLIST_LOAD, types.PLAYLIST_LOAD_SUCCESS, types.PLAYLIST_LOAD_FAILURE],
    payload: {
      client: 'youtubeAPI',
      request: {
        method: 'get',
        url: '/playlistItems',
        params: { playlistId: id, key: apiKey, part: 'snippet', maxResults: 50 }
      }
    },
    title,
    removableTitles
  };
}

export function resetPlayList() {
  return {
    type: types.PLAYLIST_RESET
  };
}
