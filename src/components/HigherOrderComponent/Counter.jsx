import React, { memo } from 'react';
import './styles.less';
import PropTypes from 'prop-types';
import hoc from './HigherOrderComponent';

const propTypes = {
  count: PropTypes.number.isRequired,
  onCountUp: PropTypes.func.isRequired,
  onCountDown: PropTypes.func.isRequired,
};

const Counter = memo(({ count, onCountUp, onCountDown }) => (
  <div className="counter btn-group">
    <button
      type="button"
      id="minus"
      className="btn btn-danger btn-lg"
      onClick={onCountDown}
    >
      -
    </button>
    <span className="btn btn-secondary btn-lg active">{count}</span>
    <button type="button" id="plus" className="btn btn-success btn-lg" onClick={onCountUp}>
      +
    </button>
  </div>
));

export default hoc(Counter);

Counter.propTypes = propTypes;
