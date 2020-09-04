import React, { memo } from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';

export const Home = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="home">
      <h2>{t('homePage')}</h2>
    </div>
  );
});
