import React from 'react';
import { IconButton } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';


// Back button component
export const BackButton: React.FC = (): React.ReactElement => {
    const history = useHistory();

    const handleClickButton = () => {
        history.goBack();
    };

    return (
        <IconButton onClick={handleClickButton} style={{ marginRight: 20 }} color="primary">
            <ArrowBackIcon />
        </IconButton>
    )
}