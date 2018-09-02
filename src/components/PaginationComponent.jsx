import React from 'react';
import { Button } from '@material-ui/core';

const PaginationComponent = (props) => {

    const disableButton = props.currentPage === 1 ? 'true' : null;

    const styles = {
        'display': 'flex',
        'margin': '30px auto',
        'justify-content': 'space-around'


    }
    return (
        <div style={styles}>
            <Button
                disabled={disableButton}
                variant="contained"
                color="primary"
                onClick={props.handlePrevClick}
            >
                Prev
            </Button>

            <div>
                <span>Page</span>
                <input
                    type='text'
                    autoFocus
                    value={props.currentPage}
                    onChange={props.handleChange}
                /><span>of {props.totalPages}</span>
            </div>


            <Button
                variant="contained"
                color="primary"
                onClick={props.handleNextClick}
            >
                Next
            </Button>
        </div>
    );
}

export default PaginationComponent;