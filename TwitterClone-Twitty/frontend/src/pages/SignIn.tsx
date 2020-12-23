import React from 'react';
import { Typography, Button, TextField } from "@material-ui/core";
import { FormGroup, FormControl } from "@material-ui/core";
import { Link } from 'react-router-dom';

import { useStylesSignIn } from './Styles';

import { ModalBlock } from "../components/ModalBlock";

import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ModeCommentOutlinedIcon from '@material-ui/icons/ModeCommentOutlined';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';


// Page is devided for sections. Routing by using React Router Link.
// "Sign up" and "Sign in" components are implemented by using popup block configured in "ModalBlock" component.
export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6"><SearchIcon className={classes.blueSideListInfoIcon} />Follow your interests.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6"><PeopleOutlineIcon className={classes.blueSideListInfoIcon} />Hear what people are talking about.</Typography></li>
                    <li className={classes.blueSideListInfoItem}><Typography variant="h6"><ModeCommentOutlinedIcon className={classes.blueSideListInfoIcon} />Join the conversation.</Typography></li>
                </ul>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} gutterBottom variant="h4">See what’s happening in the world right now</Typography>
                    <Typography><b>Join Twitty today.</b></Typography>
                    <br />
                    <Button onClick={handleClickOpenSignUp} style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>Sign up</Button>
                    <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Log in</Button>
                    <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} classes={classes} title="Log in to Twitter"
                        button1={<Button onClick={handleCloseModal} style={{ marginBottom: 20 }} variant="text" color="primary">
                            Cancel
                </Button>}
                        button2={<Button component={Link} to="/Home" style={{ marginBottom: 20 }} variant="contained" color="primary">
                            Log in
                </Button>}
                    >

                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="login"
                                    label="Email"
                                    type="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    defaultValue="TestUser@test.com"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="password"
                                    label="Password"
                                    type="password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    defaultValue="password"
                                />
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        title="Create your account"
                        twitterIcon={<TwitterIcon color="primary" />}
                        button1={<Button onClick={handleCloseModal} style={{ marginBottom: 20 }} variant="text" color="primary">
                            Cancel
                        </Button>}

                        button2={<Button component={Link} to="/Home" style={{ marginBottom: 20 }} variant="contained" color="primary">
                            Sign up
                        </Button>}

                    >
                        <FormControl component="fieldset" fullWidth>
                            <FormGroup aria-label="position" row>
                                <TextField
                                    className={classes.loginSideField}
                                    autoFocus
                                    id="login"
                                    label="Name"
                                    type="text"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    defaultValue="Test User"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="email"
                                    label="Email"
                                    type="email"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    defaultValue="TestUser@test.com"
                                />
                                <TextField
                                    className={classes.loginSideField}
                                    id="password"
                                    label="Password"
                                    type="password"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="filled"
                                    fullWidth
                                    defaultValue="password"
                                />
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
}
