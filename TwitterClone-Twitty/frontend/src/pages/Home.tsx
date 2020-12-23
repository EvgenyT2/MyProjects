import React from 'react';
import { Container, Divider, Grid, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography, Avatar, Button, CircularProgress, } from '@material-ui/core';
import { Route } from 'react-router-dom';

import { useHomeStyles } from './Styles';

import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';
import { AddTweetForm } from '../components/AddTweetForm';
import { SearchTextField } from '../components/SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';
import { fetchTags } from '../store/ducks/tags/actionCreators';
import { Tags } from '../components/Tags';
import { BackButton } from '../components/BackButton';
import { OpenTweet } from '../components/OpenTweet';

import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined';
import { UnderConstructionBlock } from '../components/UnderConstructionBlock';


// Implemented in container with grids. Routing by using React Router.
// Most of Home page's interface is implemented in external components (SideMenu, AddTweetForm, Tweet, OpenTweet, SearchTextField, Tags, BackButton, UnderConstructionBlock)
// Last component of "Who to follow" is implemented as internal component of the current page.
export const Home = () => {
    const dispatch = useDispatch();
    const classes = useHomeStyles();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);
    const pathname = window.location.pathname;

    React.useEffect(() => {
        dispatch(fetchTweets());
        dispatch(fetchTags());
    }, [dispatch]);

    return (
        <Container className={classes.wrapper} maxWidth="lg">
            <Grid container spacing={3}>
                <Grid sm={1} md={3} item>

                    <SideMenu classes={classes} />

                </Grid>
                <Grid sm={8} md={6} item>
                    <Paper className={classes.tweetsWrapper} variant="outlined">
                        <Paper className={classes.tweetsHeader} variant="outlined">
                            <Route path="/home/:any">
                                <BackButton />
                            </Route>
                            <Route path={['/home', '/home/search']} exact>
                                <Typography variant='h6'>Home</Typography>
                            </Route>
                            <Route path="/home/tweet">
                                <Typography variant='h6'>Tweet</Typography>
                            </Route>
                        </Paper>
                        <Route path={['/home', '/home/search']} exact>
                            <Paper>
                                <div className={classes.addForm}><AddTweetForm classes={classes} /></div>
                                <div className={classes.addFormBottomLine} />

                            </Paper>
                        </Route>
                        <Route path="/home" exact>
                            {isLoading ? <div className={classes.tweetsCentered}><CircularProgress /></div> : tweets.map((tweet) => (
                                <Tweet
                                    key={tweet._id}
                                    classes={classes}
                                    {...tweet}
                                />
                            ))}
                        </Route>
                        <Route path="/home/tweet/:id" component={OpenTweet} exact />
                        <Route path="/home/:name" exact>                       
                            <UnderConstructionBlock classes={classes} title={pathname}/>
                        </Route>
                    </Paper>
                </Grid>
                <Grid sm={3} md={3} item>
                    <div className={classes.rightSide}>
                        <SearchTextField
                            variant="outlined"
                            placeholder="Search Twitter"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            fullWidth
                        />
                        <Tags classes={classes} />
                        <Paper className={classes.rightSideBlock}>
                            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                                <b>Who to follow</b>
                            </Paper>
                            <List>
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Test User"
                                            src=""
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Batman"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @batman
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Test User"
                                            src=""
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Superman"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @superman
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                                <Divider component="li" />
                                <ListItem className={classes.rightSideBlockItem}>
                                    <ListItemAvatar>
                                        <Avatar
                                            alt="Test User"
                                            src=""
                                        />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Antman"
                                        secondary={
                                            <Typography component="span" variant="body2">
                                                @Antman
                                            </Typography>
                                        }
                                    />
                                    <Button color="primary">
                                        <PersonAddIcon />
                                    </Button>
                                </ListItem>
                            </List>
                        </Paper>

                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
