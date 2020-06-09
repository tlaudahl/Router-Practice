import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
// Without React Suspense
// import asyncComponent from '../../hoc/asynComponent';
// import NewPost from './NewPost/NewPost';
// const AsyncNewPost = asyncComponent(() => {
//     return import('./NewPost/NewPost');
// });
// With React Suspense
const NewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
    state = {
        auth: true
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
                    {/* Without React Suspense */}
                    {/* {this.state.auth ? <Route path='/new-post' component={AsyncNewPost} /> : null} */}
                    {/* With React Suspense */}
                    {this.state.auth ? <Route path='/new-post' render={() => <Suspense fallback={<div>Loading...</div>}><NewPost /></Suspense>} /> : null}
                    <Route path='/posts' component={Posts} />
                    <Route render={() => <h1>Not Found</h1>}/> {/* Handles any unknown route */}
                    {/* <Redirect from="/" to ="/posts" /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;