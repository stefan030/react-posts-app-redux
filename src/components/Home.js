import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Ball from '../ball.png';
import { connect } from 'react-redux';
// connect is a function, which we will invoke to bring back HOC



class Home extends Component {
    render() {
        console.log(this.props);
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return(
                    <div className="post card" key={post.id}>
                        <img src={Ball} alt="A ball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );

        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};


// connect() will return Higher Order Component and that Higher Order Component will wrap Home component
// Connect Home component to Redux store
export default connect(mapStateToProps)(Home);

