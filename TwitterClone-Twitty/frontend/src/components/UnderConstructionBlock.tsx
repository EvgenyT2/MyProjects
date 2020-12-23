import React from 'react';
import { Paper } from '@material-ui/core';

import { useHomeStyles } from '../pages/Styles';

import BuildIcon from '@material-ui/icons/BuildTwoTone';


// Component for "Under construction"
interface UnderConstructionBlockProps {
    title: string;
    classes: ReturnType<typeof useHomeStyles>;
}

export const UnderConstructionBlock: React.FC<UnderConstructionBlockProps> = ({ title, classes }): React.ReactElement | null => {

    return (
        <Paper>
            <div className={classes.underConstructionBlockText}>
                {title} is under construction
            </div>
            <div className={classes.underConstructionBlockImage}>
                <BuildIcon style={{ fontSize: 64 }} />
            </div>
        </Paper>
    )
}