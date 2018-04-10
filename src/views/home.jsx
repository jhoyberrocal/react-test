import React from 'react';
import Navbar from './../comp/navbar.jsx';
import NewPost from './../comp/newpost.jsx';
import Post from './../comp/post.jsx';
import Data from './../data/data.json';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            nombre: '',
            states: []
        };
        this.receiveNewPost = this.receiveNewPost.bind(this);
    }

    componentDidMount() {
        if (!localStorage.getItem('states')) {
            localStorage.setItem('states', JSON.stringify(Data));
        }
        const statesData = JSON.parse(localStorage.getItem('states'));
        this.setState({nombre: localStorage.getItem('name')});
        setTimeout(() => {
            this.setState({
                states: statesData.data,
                loading: false
            });
        }, 1000);
    }

    receiveNewPost(e) {
        this.setState({
            states: e
        });
    }

    render() {
        return (
            <div>
                <Navbar name={this.state.nombre} />
                <div className="mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col xs12 sm8 off-sm2">
                                {   this.state.loading ? (
                                    <div className="row tx-center">
                                        <div className="col xs12">
                                            <h2 className="tx-primary">Cargando ...</h2>
                                        </div>
                                    </div>
                                ) : '' }
                                <NewPost name={this.state.nombre} states={this.state.states} onChange={this.receiveNewPost}/>
                            </div>
                        </div>
                        {
                            this.state.states.map((val, index) => {
                                return (
                                    <div className="row mb-1" id={"id-" + index}>
                                        <div className="col xs12 sm8 off-sm2">
                                            <Post state={val} index={index}/>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        );
    };
}

export default Home;
