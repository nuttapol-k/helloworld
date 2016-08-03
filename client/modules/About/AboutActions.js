import callApi from '../../util/apiCaller';

// Export Constants
export const START_LOADING_ABOUT = 'START_LOADING_ABOUT';
export const FINISH_LOADING_ABOUT = 'FINISH_LOADING_ABOUT';

// Export Actions
export function loadAbout() {
  return (dispatch) => {
    dispatch(startLoadingAbout())
    return callApi('about').then(res => dispatch(finishLoadingAbout(res.about)));
  };
}

export function startLoadingAbout() {
  return {
    type: START_LOADING_ABOUT
  };
}

export function finishLoadingAbout(about) {
  return {
    type: FINISH_LOADING_ABOUT,
    about
  };
}
