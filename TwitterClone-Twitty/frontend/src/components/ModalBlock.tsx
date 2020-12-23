import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton } from "@material-ui/core";

import { useStylesSignIn } from '../pages/Styles';

import CloseIcon from '@material-ui/icons/Close';


// Component for popup block
interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>
    visible?: boolean;
    twitterIcon?: Object;
    button1?: Object;
    button2?: Object;
    closeButton?: Object;
    onClose: () => void;

}

export const ModalBlock: React.FC<ModalBlockProps> = ({ title, children, onClose, twitterIcon, visible = false, button1, button2, closeButton }): React.ReactElement | null => {

    if (!visible) {
        return null;
    }

    return (
        <Dialog open={visible} onClose={onClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">
                {twitterIcon}
                <IconButton onClick={onClose} color="secondary" arial-label="close">
                    <CloseIcon style={{ fontSize: 26 }} color="secondary"></CloseIcon>
                </IconButton>
                {title}
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>
            <DialogActions>
                {button1}
                {button2}



            </DialogActions>
        </Dialog>
    )
}