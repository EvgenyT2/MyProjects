import { makeStyles, Theme } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

// Styles for "Home" page and components used in "Home" page
export const useHomeStyles = makeStyles((theme: Theme) => ({
    wrapper: {
        height: '100vh'
    },
    logo: {
        fontSize: 32,

    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,
    },
    sideMenuListItem: {
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29, 161, 242, 0.1)',
            },
            '& h6': {
                color: theme.palette.primary.main,
            },
            '& svg path': {
                fill: theme.palette.primary.main,
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 25px 0 13px',
            borderRadius: 30,
            height: 50,
            marginBottom: 10,
            transition: 'background-color 0.1s ease-in-out',
        },
    },
    sideMenuListItemLink: {

        color: 'inherit',
        textDecoration: 'none',
        '& onClick': {
            '& h6': {
                color: theme.palette.primary.main,
            },
            '& svg path': {
                fill: theme.palette.primary.main,
            },
        }

    },
    sideMenuListItemButton: {
        paddingRight: 25,
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '& h6': {
            color: 'black',
        },
        '& svg path': {
            fill: 'black',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(2),
    },
    sideMenuButton: {
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetWrapper: {
        color: 'inherit',
        textDecoration: 'none',
    },
    tweetsHeader: {
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        borderRadius: 0,
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        padding: '10px 15px',
        '& h6': {
            fontWeight: 800,
        },
    },
    tweetsHeaderBackButton: {
        marginRight: 20,
    },
    tweet: {
        display: 'flex',
        paddingTop: 15,
        paddingLeft: 20,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245, 248, 250)',
        },
    },
    tweetFooter: {
        display: 'flex',
        position: 'relative',
        left: 2,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    tweetFooterOpen: {
        display: 'flex',
        position: 'relative',
        marginLeft: 50,
        marginTop: 10,
        justifyContent: 'space-between',
        maxWidth: 450,
    },
    retweetFooter: {
        display: 'flex',
        position: 'relative',
        marginLeft: 2,
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'space-between',
        maxWidth: 250,
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    tweetsUserName: {
        color: grey[500],
    },
    tweetText: {
        padding: '0px 15px',
    },
    tweetTextOpen: {
        fontSize: 22,
        fontWeight: 400,
    },
    tweetIconColor: {
        cursor: 'pointer',
        '&:hover': {
            color: 'rgb(29, 161, 242)',
        },
    },
    tweetIconColorRed: {
        cursor: 'pointer',
        '&:hover': {
            color: 'red',
        },
    },
    tweetAvatar: {
        width: theme.spacing(6.5),
        height: theme.spacing(6.5),
        marginRight: 15,
    },
    tweetsCentered: {
        marginTop: 40,
        textAlign: 'center',
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 8,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 50,
        },
        '& .MuiListItemText-root': {
            margin: 0,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    rightSideBlockItemDecoration: {
        cursor: 'pointer',
        '& a': {
            color: 'inherit',
            textDecoration: 'none',
        },
    },
    addForm: {
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%'
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomActions: {
        marginTop: 10,
        paddingLeft: 70,
    },
    addFormTextarea: {
        width: '100%',
        border: 0,
        fontSize: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
        paddingTop: 10,
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',
    },
    addFormCircleProgress: {
        position: 'relative',
        width: 20,
        height: 20,
        margin: '0 10px',
        '& .MuiCircularProgress-root': {
            position: 'absolute',
        },
    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    underConstructionBlockText: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 100,
        fontSize: 24,
        fontWeight: 600,
    },
    underConstructionBlockImage: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 50,
    },
}));

// Styles for "Signin" page and components used in "Signin" page
export const useStylesSignIn = makeStyles((theme: Theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#71C9F8',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
    },
    blueSideBigIcon: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350%',
        height: '350%',
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 600,
            fontSize: 20,
        }
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    loginSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        overflow: 'hidden',
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 600,
        fontSize: 32,
        marginBottom: 60,
        marginTop: 20,
    },
    loginIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        fontSize: 32,
    },
    loginSideField: {
        marginBottom: theme.spacing(5),
    },

}));