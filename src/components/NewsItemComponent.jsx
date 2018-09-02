import React from 'react';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NewsItemComponent = ({ title, body, link }) => {
    return (
        <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{title}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {`${body.slice(0, 300)}...`}
                    <a href={link}>Read more...</a>
                </Typography>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}

export default NewsItemComponent;