import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    state = {
        auth: false
    }

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to='/posts' activeClassName='my-active' activeStyle={{ color: '#fa923f', textDecoration: 'none' }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route exact path='/' render={() => <Posts />} />
                <Route exact path='/' render={() => <Posts />} /> */}
                <Switch>
                    {this.state.auth ? <Route path='/new-post' component={NewPost} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/> {/* Handles any unknown route */}
                    {/* <Redirect from="/" to ="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;