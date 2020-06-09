import React, { memo } from 'react';
import './styles.less';
import {useTranslation} from "react-i18next";


export const About = memo( (props)=> {
    const { t } = useTranslation()


    return (
      <div className="about">
        <h2>{t('aboutPage')}</h2>
      </div>
    )
  }
)
