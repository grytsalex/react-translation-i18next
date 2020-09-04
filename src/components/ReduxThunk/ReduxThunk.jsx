import React, { useRef } from 'react';
import './styles.less';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.array.isRequired,
};

export const ReduxThunk = ({ data }) => {
  const statusRef = useRef(null);

  return (
    <div className="team">
      <div
        className="status"
        style={{
          width: '100%',
          height: '100px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <p ref={statusRef}>Text</p>
      </div>
    </div>
  );
};

ReduxThunk.propTypes = propTypes;
