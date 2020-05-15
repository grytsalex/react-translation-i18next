import React, { memo } from 'react';
import './styles.less';


export const About = memo( (props)=> {
    return (
      <div className="about">
        <h2>This is <i><u>About</u></i> page</h2>
      </div>
    )
  }
)
