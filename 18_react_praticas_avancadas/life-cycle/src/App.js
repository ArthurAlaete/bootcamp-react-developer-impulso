import React, { Component } from 'react';
import Twitter from "./components/Twitter/index";
import TwitterWithHooks from './components/TwitterWithHooks';

class App extends Component {

  constructor() {
    super()

    this.state = {
      posts: [
        {
          title: 'Título',
          descriptio: 'Descrição'
        },
        {
          title: 'Título 2',
          descriptio: 'Descrição 2'
        },
      ],
      loading: false,
      actived: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: true })
    }, 3000);
  }

  onRemove = () => {
    this.setState({ actived: false })
  }

  render() {
    return (
      <div>
          <button onClick={this.onRemove}>Remove Component</button>
          {this.state.actived && (
            // <Twitter posts={this.state.posts} loading={this.state.loading}/>
            <TwitterWithHooks posts={this.state.posts} loading={this.state.loading}/>
          )}
      </div>
    );
  }

}

export default App;
