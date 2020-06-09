import React, { memo } from 'react';
import './styles.less';
import { useTranslation } from "react-i18next";

export const Team = memo( (props)=> {

 const { t } = useTranslation()


  return (
    <div className="team">
      <h2>{t('This is Team page')}</h2>
    </div>
  )
  }
)
