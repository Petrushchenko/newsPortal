import React, {Component} from 'react';


class Comments extends Component {
    state = {
        isVisible: false
    }
    handleBtn = () => { this.setState({
        isVisible: !this.state.isVisible
        }) 
    }
    render(){
        const comments = this.props.comments.map((comment, i) => <li key={i}>{comment}</li>)
                    
        return(
            <div className = "comments">
                <div> 
                    <p>Comments: ({comments.length})</p>
                    <button 
                        onClick={this.handleBtn}
                    >
                        {this.state.isVisible ? 'close' : 'open'}
                    </button>
                </div>
               
                {this.state.isVisible && <ul > 
                    {comments}
                </ul>}
            </div>
        )
    }
}

export default Comments;