import React, { Component } from 'react';
import axios from 'axios';


import AccordionComponent from '../components/AccordionComponent';
import PaginationComponent from '../components/PaginationComponent';
import RefreshButtonComponent from '../components/RefreshButtonComponent';
import TitleComponent from '../components/TitleComponent';


const errorStyles = {
    'display': 'block',
    'padding': '15px',
    'margin': '10px',
    'background-color': 'salmon',
    'border': '1px solid red'
};

class NewsFeedComponent extends Component {
    state = {
        news: [],
        currentPage: 1,
        totalPages: 1,
        error: null
    }



    async componentDidMount() {
        await this.getNews();
    }

    onRefreshButton = async () => {
        await this.getNews();
    }

    onPrevPageClick = async () => {
        const nextPage = this.state.currentPage === 1 ? 1 : this.state.currentPage - 1;
        this.setState({
            currentPage: nextPage
        })
        await this.getNews(nextPage);
    }

    onNextPageClick = async () => {
        const nextPage = +this.state.currentPage + 1;
        this.setState({
            currentPage: nextPage
        })
        await this.getNews(nextPage);
    }

    changeHandler = async (value) => {
        const changedValue = value;
        await this.getNews(changedValue);
        this.setState({
            currentPage: changedValue,
        })
    }


    getNews = async (page = 1) => {
        const token = 'a1f0d801-b45b-4fb8-aacc-d31d124a3614';
        const url = `https://content.guardianapis.com/search?api-key=${token}&page=${page}&show-blocks=body`;

        try {
            const response = await axios.get(url);

            if (response.data.response.status === 'error') {

                this.setState({
                    error: response.data.response.message
                })

            } else {
                this.setState({
                    news: response.data.response.results,
                    totalPages: response.data.response.pages,
                    currentPage: page
                });
            }
        } catch (err) {
            this.setState({
                error: 'Holy guacamole... Something went wrong. Better luck next time.'
            })
        }
    }

    render() {
        return (
            <div>
                <TitleComponent
                    title={'The Guardian News'}
                />
                {
                    this.state.error
                        ? <span style={errorStyles}>{this.state.error}</span>
                        : <div>
                            <RefreshButtonComponent
                                handleClick={this.onRefreshButton}
                            />
                            <AccordionComponent
                                news={this.state.news}
                            />
                            <PaginationComponent
                                totalPages={this.state.totalPages}
                                currentPage={this.state.currentPage}
                                handlePrevClick={this.onPrevPageClick}
                                handleNextClick={this.onNextPageClick}
                                handleChange={this.changeHandler}

                            />
                        </div>
                }

            </div>
        );
    }
}

export default NewsFeedComponent;
