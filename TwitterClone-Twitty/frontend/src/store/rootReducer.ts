import { combineReducers } from "redux";
import {  } from "redux";
import { tweetsReducer } from "./ducks/tweets/reducer";
import { tagsReducer } from "./ducks/tags/reducer";
import { tweetReducer } from "./ducks/tweet/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
});