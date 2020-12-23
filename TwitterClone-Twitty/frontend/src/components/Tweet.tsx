import React from 'react';
import { Grid, IconButton, Paper, Typography, Avatar, } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import { useHomeStyles } from '../pages/Styles';

import ChatIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ReplyIcon from '@material-ui/icons/ReplyOutlined';


// Component for presenting existing tweets
interface TweetProps {
    _id: string;
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };
}

export const Tweet: React.FC<TweetProps> = ({ _id, text, user, classes }: TweetProps): React.ReactElement => {
    return (
        <Link className={classes.tweetWrapper} to={`/home/tweet/${_id}`}>
            <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">

                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Avatar className={classes.tweetAvatar} alt={`UserAvatar ${user.fullname}`} src={user.avatarUrl}>
                        </Avatar>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography className={classes.tweetText}>
                            <b>{user.fullname}</b>
                            <span className={classes.tweetsUserName}>@{user.username}</span>&nbsp;
                        <span className={classes.tweetsUserName}>1h</span>
                        </Typography>
                        <Typography className={classes.tweetText} variant="body1" gutterBottom>
                            {text}
                        </Typography>
                        <div className={classes.tweetFooter}>
                            <div>
                                <Link to={`/home/tweet/comment`}>
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
        </Link>
    )
}

