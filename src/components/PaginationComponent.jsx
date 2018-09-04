import React from 'react';
import { Button } from '@material-ui/core';

const PaginationComponent = (props) => {

    const changePagination = (e) => {
        if (e.target.value.trim() && e.keyCode === 13) {
            props.handleChange(e.target.value)
        }
    }

    const disabledPrevButton = props.currentPage === 1 ?
        <Button
            variant="contained"
            color="primary"
            disabled>
            Prev
        </Button>
        :
        <Button
            variant="contained"
            color="primary"
            onClick={props.handlePrevClick}
        >
            Prev
</Button>;

    const disabledNextButton = props.currentPage === props.totalPages ?
        <Button
            variant="contained"
            color="primary"
            disabled>
            Next
        </Button>
        :
        <Button
            variant="contained"
            color="primary"
            onClick={props.handleNextClick}
        >
            Next
</Button>;

    const wrapperStyles = {
        display: 'flex',
        margin: '30px auto',
        justifyContent: 'space-around'
    }

    const inputStyles = {
        maxWidth: '50px',
        margin: '0 5px'
    }
    return (
        <div style={wrapperStyles}>
            {disabledPrevButton}

            <div>
                <span>Page</span>
                <input
                    style={inputStyles}
                    type='text'
                    autoFocus
                    defaultValue={props.currentPage}
                    onKeyUp={changePagination}
                /><span>of {props.totalPages}</span>
            </div>


            {disabledNextButton}
        </div>
    );
}

export default PaginationComponent;