import React from 'react';
import { Button } from '@material-ui/core';

const RefreshButtonComponent = (props) => {
    return (
        <Button
            size='large'
            variant="outlined"
            color="primary"
            onClick={props.handleClick}
        >
            Refresh
        </Button>
    );
}

export default RefreshButtonComponent;