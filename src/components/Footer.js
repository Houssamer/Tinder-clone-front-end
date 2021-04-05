import React from 'react';
import './Footer.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <IconButton>
                <ReplayIcon className="footer__icon footer__replay" />
            </IconButton>
            <IconButton>
                <CloseIcon className="footer__icon footer__close" />
            </IconButton>
            <IconButton>
                <StarIcon className="footer__icon footer__star" />
            </IconButton>
            <IconButton>
                <FavoriteIcon className="footer__icon footer__favorite" />
            </IconButton>
            <IconButton>
                <FlashOnIcon className="footer__icon footer__flash" />
            </IconButton>
        </div>
    )
}

export default Footer
