import React, {Component} from 'react';
import Article from './Article';

class ArticleList extends Component {
    state = {
        openArticleIndex: 0
    }

    handleOpen = (index) => () => { this.setState({
        openArticleIndex: this.state.openArticleIndex === index 
        ? null : index
        });
    }

    render() {
        const data = this.props.articles.map((article, index) => 
            <Article 
                key = {index}
                index = {index}
                article ={article}
                changeArticle={this.handleOpen}
                isOpen = {this.state.openArticleIndex === index}
            />                    
        )
        return (
            <ul>
                {data}
            </ul>
        )
    }
}

export default ArticleList;