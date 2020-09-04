import React from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';

export const ControlPanel = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="control-panel">
      <button type="button" className="englishBtn" onClick={() => setLanguage('en')}>
        {t('englishBtn')}
      </button>
      <button type="button" className="russianBtn" onClick={() => setLanguage('ru')}>
        {t('russianBtn')}
      </button>
    </div>
  );
};
