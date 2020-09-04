import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './styles.less';
import { useTranslation } from 'react-i18next';

export const NavBar = memo(() => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="link">
        <Link to="/">{t('navHome')}</Link>
      </div>
      <div className="delimiter"/>
      <div className="link">
        <Link to="/react-select">{t('navSelect')}</Link>
      </div>
      <div className="delimiter"/>
      <div className="link">
        <Link to="/redux-thunk">{t('navRedux')}</Link>
      </div>
      <div className="delimiter"/>
      <div className="link">
        <Link to="/hoc">{t('navHoc')}</Link>
      </div>
    </nav>
  );
});
