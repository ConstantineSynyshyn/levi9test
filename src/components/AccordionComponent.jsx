import React from 'react';
import NewsItemComponent from './NewsItemComponent';

const AccordeonComponent = ({ news }) => {
    return (
        <div>
            {
                news.map((item) =>
                    <NewsItemComponent
                        key={item.id}
                        title={item.webTitle}
                        body={item.blocks.body.length > 0 ? item.blocks.body[0].bodyTextSummary : ''}
                        link={item.webUrl}
                    />
                )
            }
        </div>
    );
}

export default AccordeonComponent;