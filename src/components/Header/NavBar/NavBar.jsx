import React, { memo } from 'react';
import {
    Link
} from 'react-router-dom';
import './styles.less';
import {useTranslation} from "react-i18next";

export const NavBar = memo(()=> {

    const { t , i18n } = useTranslation()

  return (
    <nav className="navbar">
        <div className="link">
          <Link to="/">{t('Home')}</Link>
        </div>
        <div className="link">
          <Link to="/about">{t('React Select')}</Link>
        </div>
        <div className="link">
          <Link to="/team">{t('Team')}</Link>
        </ div>
        <div className="link">
            <Link to="/hoc">{t('Higher Order Component')}</Link>
        </ div>
    </nav>
  )
}
)