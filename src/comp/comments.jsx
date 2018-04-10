import React from 'react';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            comments: this.props.comments
        };
        this.handleChange = this.handleChange.bind(this);
        this.addComment = this.addComment.bind(this);
    }

    handleChange(event) {
        this.setState({comment: event.target.value});
    }

    addComment(e) {
        e.preventDefault();
        let comment = {
            user: localStorage.getItem('name'),
            time: 'Hace un momento',
            comment: this.state.comment
        };

        let comments = this.state.comments;
        comments.push(comment);
        this.setState({comments: comments});

        let states = JSON.parse(localStorage.getItem('states'));
        let state = states.data[this.props.index];
        state.comentarios = comments;
        localStorage.setItem('states', JSON.stringify(states));
    }

    render() {
        return (
            <aside className="card-comments">
                <ul>
                    {
                        this.state.comments.map((val, index) => {
                            return (
                                <li className="row mb-1" id={"id-" + index}>
                                    <div className="col xs1">
                                        <img src="/app/img/user.png" alt="User" className="card-img"/>
                                    </div>
                                    <div className="col xs11">
                                        <p><span
                                            className="card-title">{val.user}</span> {val.comment}
                                        </p>
                                        <p className="card-muted">{val.time}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="row">
                    <div className="col xs10 input-group">
                        <input type="text" className="input-control" placeholder="Escribe un comentarios" onChange={this.handleChange}/>
                    </div>
                    <div className="col xs2 input-group">
                        <button className="btn primary" onClick={this.addComment}>Comentar</button>
                    </div>
                </div>

            </aside>
        );
    }

}

export default Comments;
