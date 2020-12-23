import React from 'react';
import { IconButton, Typography, Button, Hidden } from '@material-ui/core';

import { useHomeStyles } from '../pages/Styles';

import { ModalBlock } from './ModalBlock';
import { AddTweetForm } from './AddTweetForm';
import { Link } from 'react-router-dom';

import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import CreateIcon from '@material-ui/icons/Create';


// Component for side menu
interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {

    const [addTweet, setAddTweet] = React.useState<boolean>(false);

    const openAddTweet = () => {
        setAddTweet(true);
    }

    const closeAddTweet = () => {
        setAddTweet(false);
    }


    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <Link to="/home" >
                    <IconButton aria-label="" color="primary">
                        <TwitterIcon className={classes.logo} />
                    </IconButton>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home" >
                    <div>
                        <HomeIcon className={classes.sideMenuListItemIcon} />
                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6" >Home</Typography>
                        </Hidden>
                    </div>
                </Link>


            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/explore" >
                    <div>
                        <SearchIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Explore</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/notofications" >
                    <div>
                        <NotificationIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Notifications</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/messages" >
                    <div>
                        <MessageIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Messages</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/bookmarks" >
                    <div>
                        <BookmarkIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Bookmarks</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/lists" >
                    <div>
                        <ListIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Lists</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/profile" >
                    <div>
                        <UserIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">Profile</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <li className={classes.sideMenuListItem}>
                <Link to="/home/more" >
                    <div>
                        <MoreIcon className={classes.sideMenuListItemIcon} />

                        <Hidden smDown>
                            <Typography className={classes.sideMenuListItemLabel} variant="h6">More</Typography>
                        </Hidden>
                    </div>
                </Link>
            </li>
            <Button
                onClick={openAddTweet}
                className={classes.sideMenuTweetButton}
                variant="contained"
                color="primary"
                fullWidth>
                <Hidden smDown>Tweet</Hidden>
                <Hidden mdUp><CreateIcon /></Hidden>
            </Button>
            <ModalBlock onClose={closeAddTweet} visible={addTweet}
                closeButton
                title="">
                <div style={{ width: 550, }}>
                    <AddTweetForm maxRows={15} minRows={6} classes={classes} />
                </div>
            </ModalBlock>
        </ul>
    )
}

