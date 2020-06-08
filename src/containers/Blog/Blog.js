import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import FullPost from './FullPost/FullPost'
import NewPost from './NewPost/NewPost';

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink exact to='/' activeClassName='my-active' activeStyle={{ color: '#fa923f', textDecoration: 'none' }}>Home</NavLink></li>
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
                <Route path='/' exact component={Posts} />
                <Route path='/new-post' component={NewPost} />
                <Route path='/:id' exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;