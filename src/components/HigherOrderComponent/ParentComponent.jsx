import React, { Component } from 'react';
import './styles.less';
import Counter from './Counter';

class ParentComponent extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;

    return (
      <div className="containerForPage">
        <Counter
          count={count}
          onCountUp={() => this.setState({ count: count + 1 })}
          onCountDown={() => this.setState({ count: count - 1 })}
        />
      </div>
    );
  }
}

export default ParentComponent;
