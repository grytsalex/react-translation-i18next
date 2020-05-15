import React, { memo } from 'react';
import './styles.less';
import {useTranslation} from "react-i18next";

export const Home = memo( (props)=> {

  const { t , i18n } = useTranslation()

    return (
      <div className="home">
        <h2>This is <i><u>Home</u></i> page</h2>
      </div>
    )
  }
)
