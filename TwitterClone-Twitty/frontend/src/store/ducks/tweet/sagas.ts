import { call, put, takeEvery } from 'redux-saga/effects'
import { TweetsApi } from '../../../services/api/tweetsAPI';
import { Tweet } from '../tweets/contracts/state';
import { setTweetData, setTweetDataLoadingState } from "./actionCreators";
import { FetchTweetDataActionInterface, TweetDataActionsType } from './contracts/actionTypes';
import { LoadingState } from "./contracts/state";


export function* fetchTweetDataRequest({ payload: tweetId}: FetchTweetDataActionInterface) {
  try {
    const data: Tweet[] = yield call(TweetsApi.fetchTweetData, tweetId);
    yield put(setTweetData(data[0]));
  } catch (error) {
    yield put(setTweetDataLoadingState(LoadingState.ERROR));
  }
  
}

export function* tweetSaga() {
yield takeEvery(TweetDataActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest)
}