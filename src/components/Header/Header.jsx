import React, { memo } from 'react';
import './styles.less';
import { NavBar } from './NavBar/NavBar';
import { ControlPanel } from './ControlPanel/ControlPanel';

export const Header = memo(() => (
  <div className="header">
    <NavBar />
    <ControlPanel />
  </div>
));
