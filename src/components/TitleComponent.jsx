import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';


const TitleComponent = ({ title }) => {


    return (
        <div >
            <AppBar position="sticky" color="primary" >
                <Toolbar>
                    <Typography variant="title" color="inherit" >
                        {title}
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>

    );
}

export default TitleComponent;