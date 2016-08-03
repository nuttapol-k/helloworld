import { START_LOADING_ABOUT, FINISH_LOADING_ABOUT } from './AboutActions';

// Initial Stateo
const initialState = { data: "" };

const AboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING_ABOUT :
      return {
        data: "Loading content...",
      };

    case FINISH_LOADING_ABOUT :
      return {
        data: action.about,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get all posts
export const getAbout = (state) => {
  return state.about.data;
}

// Export Reducer
export default AboutReducer;
