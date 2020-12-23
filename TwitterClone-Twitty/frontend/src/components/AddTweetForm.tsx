import React from 'react';
import classNames from 'classnames';
import { IconButton, Paper, Avatar, Button, TextareaAutosize, CircularProgress, Snackbar, } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { useHomeStyles } from '../pages/Styles';

import { fetchAddTweet } from '../store/ducks/tweets/actionCreators';
import { selectAddFormState } from '../store/ducks/tweets/selectors';
import { AddFormState } from '../store/ducks/tweets/contracts/state';

import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import EmojiIcon from '@material-ui/icons/SentimentSatisfiedOutlined';


// Component for adding tweets
interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
    minRows?: number;
}

export const AddTweetForm: React.FC<AddTweetFormProps> = ({ classes, maxRows, minRows }: AddTweetFormProps): React.ReactElement => {

    const dispatch = useDispatch();
    const [text, setText] = React.useState<string>('');
    const [visibleNotification, setVisibleNotification] = React.useState<boolean>(false);
    const addFormState = useSelector(selectAddFormState);
    const textLimitPercent = text.length / 280 * 100;
    const maxLenght = 280 - text.length;

    React.useEffect(() => {
        if (addFormState === AddFormState.ERROR) {
            setVisibleNotification(true);
        }
    }, [addFormState]);

    const handleCloseNotification = () => {
        setVisibleNotification(false);
    }

    const handleChangeTextarea = (e: React.FormEvent<HTMLTextAreaElement>): void => {
        if (e.currentTarget) {
            setText(e.currentTarget.value);
        }
    }

    const sendTweet = (): void => {

        if (text.length >= 1) {
            dispatch(fetchAddTweet(text));
            setText('');
        };
    }

    return (
        <Paper>
            <div>
                <Snackbar
                    open={visibleNotification}
                    onClose={handleCloseNotification}
                    message="Error occured while trying to add tweet"
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                />
                <div className={classes.addFormBody}>
                    <Avatar className={classes.tweetAvatar}
                        alt={'User Avatar'}
                        src=""
                    />
                    <TextareaAutosize
                        onChange={handleChangeTextarea}
                        className={classes.addFormTextarea}
                        placeholder="What's happening?"
                        value={text}
                        rowsMax={maxRows}
                        rowsMin={minRows}
                    />
                </div>
                <div className={classes.addFormBottom}>
                    <div className={classNames(classes.tweetFooter, classes.addFormBottomActions)}>
                        <IconButton color="primary">
                            <ImageOutlinedIcon style={{ fontSize: 26 }} />
                        </IconButton>
                        <IconButton color="primary">
                            <EmojiIcon style={{ fontSize: 26 }} />
                        </IconButton>
                    </div>
                    <div className={classes.addFormBottomRight}>
                        {text && (
                            <>
                                <span>{maxLenght}</span>
                                <div className={classes.addFormCircleProgress}>
                                    <CircularProgress
                                        style={textLimitPercent >= 100 ? { color: 'red' } : undefined}
                                        variant="static"
                                        size={20}
                                        thickness={5}
                                        value={textLimitPercent > 100 ? 100 : textLimitPercent}
                                    />
                                    <CircularProgress
                                        style={{ color: 'rgba(0, 0, 0, 0.1)' }}
                                        variant="static"
                                        size={20}
                                        thickness={5}
                                        value={100}
                                    />
                                </div>
                            </>
                        )}
                        <Button
                            onClick={sendTweet}
                            disabled={!text || textLimitPercent >= 100}
                            color="primary"
                            variant="contained">
                            {addFormState === AddFormState.LOADING ? <CircularProgress color="secondary" size={26} /> : 'Tweet'}
                        </Button>
                    </div>
                </div>
            </div>
        </Paper>
    )
}

