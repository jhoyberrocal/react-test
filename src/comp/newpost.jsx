import React from 'react';

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            state: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.publicState = this.publicState.bind(this);
    }

    handleChange(event) {
        this.setState({state: event.target.value});
    }

    publicState(event) {
        event.preventDefault();
        let state = {
            user: this.props.name,
            time: "Hace un momento",
            state: this.state.state,
            comentarios: [],
            reactions: {
                yellow: 0,
                blue: 0,
                red: 0
            }
        };
        let states = this.props.states;
        states.unshift(state);
        let data = {
            data: states
        };
        localStorage.setItem('states', JSON.stringify(data));
        this.props.onChange(states);
        this.setState({
            state: ''
        });
    };

    render() {
        return (
            <section className="card mb-1">
                <article className="card-body">
                    <div className="input-group">
                        <input className="input-control" placeholder="Escribe aquí tu estado."
                               onChange={this.handleChange} value={this.state.state}/>
                    </div>
                </article>
                <footer className="card-footer">
                    <div className="row w-100">
                        <div className="col xs12 tx-right">
                            <button className={"btn pointer " + (this.state.state.length > 1 ? 'primary' : '')}
                                    disabled={this.state.state.length < 1}
                                    onClick={this.publicState}>Publicar
                            </button>
                        </div>
                    </div>
                </footer>
            </section>
        );
    }
}

export default NewPost;
