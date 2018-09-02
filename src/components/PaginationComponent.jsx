import React from 'react';
import { Button } from '@material-ui/core';

const PaginationComponent = (props) => {

    const disableButton = props.currentPage === 1 ? 'true' : null;
    return (
        <div>
            <Button
                disabled={disableButton}
                variant="contained"
                color="primary"
                onClick={props.handlePrevClick}
            >
                Prev
            </Button>

            <input
                type='number'
                autoFocus
                value={props.currentPage}
                onChange={props.handleChange}
            />
            <h4>{`Page ${props.currentPage} of ${props.totalPages}`}</h4>
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