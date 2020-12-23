import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, Divider, } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import { useHomeStyles } from '../pages/Styles';

import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';


// Component for tags
interface TagsProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const Tags: React.FC<TagsProps> = ({ classes }: TagsProps): React.ReactElement | null => {

    const items = useSelector(selectTagsItems);
    const isLoaded = useSelector(selectIsTagsLoaded);

    if (!isLoaded) {
        return null;
    }

    return (
        <Paper className={classes.rightSideBlock}>
            <Paper className={classes.rightSideBlockHeader} variant="outlined">
                <b>Trends for you</b>
            </Paper>
            <List className={classes.rightSideBlockItemDecoration}>
                {items.map((obj => (
                    <React.Fragment key={obj._id}>
                        <Divider component="li" />
                        <Link to={`/home/search?q=${obj.name}`}>

                            <ListItem className={classes.rightSideBlockItem}>
                                <ListItemText
                                    primary={obj.name}
                                    secondary={
                                        <Typography component="span" variant="body2" color="textSecondary">
                                            Tweets: {obj.count}
                                        </Typography>
                                    }
                                />

                            </ListItem>
                        </Link>
                    </React.Fragment>
                )))}
            </List>
        </Paper>
    )
}

