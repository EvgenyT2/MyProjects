import produce, { Draft } from "immer";
import { TweetDataActions } from "./actionCreators";
import { TweetDataActionsType } from "./contracts/actionTypes";
import { LoadingState, TweetState } from "./contracts/state";


const initialTweetDataState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
};

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetDataActions) => {

    switch (action.type) {
        case TweetDataActionsType.SET_TWEET_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;

        case TweetDataActionsType.FETCH_TWEET_DATA:
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;
        
        case TweetDataActionsType.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
    
        default:
            break;
    }

}, initialTweetDataState);