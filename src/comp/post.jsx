import React from 'react';
import Comments from './comments.jsx';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reactions: {
                blue: this.props.state.reactions.blue,
                yellow: this.props.state.reactions.yellow,
                red: this.props.state.reactions.red
            }
        };
        this.addReaction = this.addReaction.bind(this);
    }

    addReaction(e, color) {
        e.preventDefault();
        let newState = this.state.reactions;
        newState[color]++;
        this.setState({
          reactions: newState
        });
        let state = {
            user: this.props.state.user,
            time: this.props.state.time,
            state: this.props.state.state,
            reactions: newState,
            comentarios: this.props.state.comentarios
        };

        let states = JSON.parse(localStorage.getItem('states'));
        states.data[this.props.index] = state;
        localStorage.setItem('states', JSON.stringify(states));
    }

    render() {
        return (
            <section className="card">
                <article className="card-body">
                    <div className="row">
                        <div className="col xs1">
                            <img src="/app/img/user.png" alt="User" className="card-img"/>
                        </div>
                        <div className="col xs11">
                            <p className="card-title">{this.props.state.user}</p>
                            <span className="card-muted">{this.props.state.time}</span>
                            <p className="mt-1">{this.props.state.state}</p>
                        </div>
                    </div>
                </article>
                <footer className="card-footer">
                    <ul className="reactions">
                        <li onClick={(e) => this.addReaction(e, 'blue')}>
                            <i className="i-happiness blue"/>
                            <span>{this.state.reactions.blue}</span>
                        </li>
                        <li onClick={(e) => this.addReaction(e, 'yellow')}>
                            <i className="i-happiness yellow"/>
                            <span>{this.state.reactions.yellow}</span>
                        </li>
                        <li onClick={(e) => this.addReaction(e, 'red')}>
                            <i className="i-happiness red"/>
                            <span>{this.state.reactions.red}</span>
                        </li>
                    </ul>
                    <p className="card-muted pr-1">{this.props.state.comentarios.length} comentarios</p>
                </footer>
                <Comments comments={this.props.state.comentarios} index={this.props.index}/>
            </section>
        )
    }
}

export default Post;
