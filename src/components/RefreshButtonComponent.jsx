import React from 'react';
import { Button } from '@material-ui/core';

const RefreshButtonComponent = (props) => {
    return (
        <Button
            variant="contained"
            color="primary"
            onClick={props.handleClick}
        >
            Refresh
        </Button>
    );
}

export default RefreshButtonComponent;