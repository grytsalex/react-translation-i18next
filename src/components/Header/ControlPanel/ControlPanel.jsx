import React, { memo } from 'react';
import './styles.less';
import { useTranslation } from "react-i18next";

export const ControlPanel = memo(()=> {

  const { t, i18n } = useTranslation();

  const setLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

    return (
      <div className="control-panel">
          <button onClick={() => setLanguage('en')}>{t('englishBtn')}</button>
          <button onClick={() => setLanguage('ru')}>{t('russianBtn')}</button>
      </div>
    )
  }
)