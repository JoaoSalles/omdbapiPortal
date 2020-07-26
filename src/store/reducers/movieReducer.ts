import * as ACTION_TYPES from '../actions/movieActions'

export const movieReducer = (state: any, action: any ) => {
    switch(action.type) {
      case ACTION_TYPES.INITIAL_FETCH:
        return {
          ...state,
          movies: action.payload.movies,
          totalResults: action.payload.totalResults
        }
      case ACTION_TYPES.FETCH_MORE_MOVIES:
          return {
            ...state,
            movies: [...state.movies, ...action.payload]
          }
      default:
        return state;
    }
}