import React from 'react';
import PostDetail from './PostDetail';

class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      post: {
        id: 0,
        title: '',
        body: '',
        author: '',
        category: ''
      },
      categories: [
        { code: 'react', name: 'React' },
        { code: 'redux', name: 'Redux' },
        { code: 'angular', name: 'Angular' }
      ],
      posts: [
        {
          id: 1,
          title: 'Introduction to React',
          body: 'This post provides an introduction to React',
          author: 'Harry',
          category: 'react'
        },
        {
          id: 2,
          title: 'Advanced React',
          body: 'This post discusses about advanced features of React',
          author: 'Sarah',
          category: 'react'
        },
        {
          id: 3,
          title: 'Introduction to Redux',
          body: 'This post provides an introduction to Redux',
          author: 'Jane',
          category: 'redux'
        }
      ]
    };

  }

  renderCategories() {
    return this.state.categories.map((category) => {
      return <option key={category.code} value={category.code}>{category.name}</option>;
    });
  }

  
  renderForm() {
    return (
      <div className="col-sm-4">
        <h3>Post Form</h3>
        <div className="card bg-light">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" name="title"
                  placeholder="Enter title" value={this.state.post.title}/>
              </div>
              <div className="form-group">
                <label htmlFor="body">Body</label>
                <textarea className="form-control" id="body" name="body" placeholder="Enter body"
                  rows="3" cols="30" value={this.state.post.body}></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" id="author" name="author" placeholder="Enter author" value={this.state.post.author}/>
              </div>
              <div className="form-group">
                <label htmlFor="category">Category</label>
                <select required className="form-control" id="category" name="category" value={this.state.post.category}>
                  <option value=""></option>
                  {this.renderCategories()}
                </select>
              </div>
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderPosts() {
    return (
      <div className="col-sm-8">
        <h3>Posts</h3>
        {this.state.posts.map((post) => {
          return <PostDetail key={post.id} post={post} />
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderForm()}
        {this.renderPosts()}
      </div>
    );
  }
}
export default Posts;
