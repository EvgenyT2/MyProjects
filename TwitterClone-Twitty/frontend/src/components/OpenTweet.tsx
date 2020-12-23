import React from 'react';
import { Avatar, CircularProgress, Divider, Grid, IconButton, Paper, Typography } from '@material-ui/core';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useHomeStyles } from '../pages/Styles';

import { fetchTweetData, setTweetData } from '../store/ducks/tweet/actionCreators';
import { selectIsTweetLoading, selectTweetData } from '../store/ducks/tweet/selectors';

import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';


// Component for opening tweet
export const OpenTweet: React.FC = (): React.ReactElement | null => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweetData = useSelector(selectTweetData);
    const isLoading = useSelector(selectIsTweetLoading);
    const params: { id?: string } = useParams();
    const id = params.id;

    React.useEffect(() => {
        if (id) {
            dispatch(fetchTweetData(id));
        }

        return () => {
            dispatch(setTweetData(undefined));
        }

    }, [dispatch, id]);

    if (isLoading) {
        return (
            <div className={classes.tweetsCentered}><CircularProgress /></div>
        );
    }

    if (tweetData) {
        return (
            <Paper className={classNames(classes.tweetsHeader)} variant="outlined">

                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt={`UserAvatar ${tweetData.user.fullname}`} src={tweetData.user.avatarUrl}>
                        </Avatar>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.tweetText}>
                            <b>{tweetData.user.fullname}</b>
                            <div>
                                <span className={classes.tweetsUserName}>@{tweetData.user.username}</span>&nbsp;
                                <span className={classes.tweetsUserName}>1h</span>
                            </div>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.tweetTextOpen} gutterBottom>
                            {tweetData.text}
                        </Typography>
                        <Divider />
                        <div className={classes.retweetFooter}>
                            <div>
                                <Link to={`/home/tweet/${tweetData._id}/Retweets`}>
                                    <span style={{ fontWeight: 700 }} >0</span>&nbsp;
                                Retweets
                                </Link>
                            </div>
                            <div>
                                <Link to={`/home/tweet/${tweetData._id}/QuoteRetweets`}>
                                    <span style={{ fontWeight: 700 }}>0</span>&nbsp;
                                Quote Tweets
                                </Link>
                            </div>
                            <div>
                                <Link to={`/home/tweet/${tweetData._id}/Likes`}>
                                    <span style={{ fontWeight: 700 }}>1</span>&nbsp;
                                Like
                                </Link>
                            </div>

                        </div>
                        <Divider />
                        <div className={classes.tweetFooterOpen}>
                            <div>
                                <Link to={`/home/tweet/${tweetData._id}/comment`}>
                                    <IconButton className={classes.tweetIconColor}>
                                        <ChatIcon style={{ fontSize: 20 }} />
                                    </IconButton>
                                    <span>1</span>
                                </Link>
                            </div>
                            <div>
                                <IconButton className={classes.tweetIconColor}>
                                    <RepeatIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton className={classes.tweetIconColorRed}>
                                    <FavoriteIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>
                            <div>
                                <IconButton className={classes.tweetIconColor}>
                                    <ReplyIcon style={{ fontSize: 20 }} />
                                </IconButton>
                            </div>

                        </div>
                    </Grid>
                </Grid>

            </Paper>
        );
    }

    return null;
}