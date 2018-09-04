import React from 'react';
import { Button } from '@material-ui/core';



const RefreshButtonComponent = (props) => {

    const styles = {
        margin: '40px auto',
        width: '100%',
    };



    return (
        <div style={styles}>
            <Button

                size='large'
                variant="outlined"
                color="primary"
                onClick={props.handleClick}
            >
                Refresh
        </Button>
        </div>
    );
}

export default RefreshButtonComponent;