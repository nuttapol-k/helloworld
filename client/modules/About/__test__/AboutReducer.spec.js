import test from 'ava';
import { reducerTest } from 'redux-ava';
import aboutReducer, { getAbout } from '../AboutReducer';
import { startLoadingAbout, finishLoadingAbout } from '../AboutActions';

test('action for START_LOADING_ABOUT is working', reducerTest(
  aboutReducer,
  { data: "" },
  startLoadingAbout(),
  { data: "Loading content..." },
));

test('action for FINISH_LOADING_ABOUT is working', reducerTest(
  aboutReducer,
  { data: "" },
  finishLoadingAbout("helloworld"),
  { data: "helloworld" },
));

test('getAbout selector', t => {
  t.deepEqual(
    getAbout({
      about: { data: "1234" },
    }),
    "1234"
  );
});

