import React from 'react';
import { Button } from '@material-ui/core';

const PaginationComponent = (props) => {

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

    const styles = {
        'display': 'flex',
        'margin': '30px auto',
        'justify-content': 'space-around'


    }
    return (
        <div style={styles}>
            {disabledPrevButton}

            <div>
                <span>Page</span>
                <input
                    type='text'
                    autoFocus
                    value={props.currentPage}
                    onChange={(e) => props.handleChange(e)}
                /><span>of {props.totalPages}</span>
            </div>


            {disabledNextButton}
        </div>
    );
}

export default PaginationComponent;