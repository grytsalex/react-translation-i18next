import React, { memo } from 'react';
import './styles.less';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import { customStyles, options } from './helpers/utils';

export const ReactSelect = memo(() => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h2 className="heading">{t('navSelect')}</h2>
      <div className="select-container">
        <div className="form">
          <div className="my-select">
            <Select
              options={options}
              styles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
});
