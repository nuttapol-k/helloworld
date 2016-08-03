import test from 'ava';
import { actionTest } from 'redux-ava';

import {
  START_LOADING_ABOUT,
  FINISH_LOADING_ABOUT,
  startLoadingAbout,
  finishLoadingAbout
} from '../AboutActions';

const about = "this is about"

test('start loading about action', actionTest(
  startLoadingAbout,
  null,
  { type: START_LOADING_ABOUT },
));

test('finish loading about action', actionTest(
  finishLoadingAbout,
  about,
  { type: FINISH_LOADING_ABOUT, about },
));
