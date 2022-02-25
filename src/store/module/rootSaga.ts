import { all } from 'redux-saga/effects';
import info from './Info/saga';

export default function* rootSaga() {
  yield all([info]);
}
