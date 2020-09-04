import React from 'react';

function hoc(Component) {
  class HigherOrderComponent extends React.Component {
    componentDidUpdate(prevProps, prevState, nextProps) {
      console.log('prevProps', this.props);
      console.log('nextProps', nextProps);
    }

    render() {
      return <Component {...this.props} />;
    }
  }
  HigherOrderComponent.displayName = `HigherOrderComponent(${
    Component.displayName || Component.name || 'Component'
  })`;
  return HigherOrderComponent;
}
export default hoc;
