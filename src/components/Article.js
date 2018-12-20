import React, {Component} from 'react';
import Comments from './Comments';

class Article extends Component {

    render (){
        const {article, index, isOpen, changeArticle}= this.props;
       
        return (
                
            <li className="article" > 
                <div>
                    <h2>{article.title}</h2>
                    <button onClick={changeArticle(index)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </div>
                <p>{article.date}</p>
                {
                   
                   isOpen  && <div className='article__content' >   
                        <span>{article.text}</span>
                        <Comments comments={article.comments}/>
                    </div>
                }
            </li>
        )
    }
}

export default Article;

