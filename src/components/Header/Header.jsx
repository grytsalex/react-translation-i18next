import React, { memo } from 'react';
import './styles.less';
import { NavBar }  from "./NavBar/NavBar";
import { ControlPanel } from "./ControlPanel/ControlPanel";
import {useTranslation} from "react-i18next";

export const Header = memo(()=> {

  const { t , i18n } = useTranslation()

    return (
      <div className="header">
        <NavBar/>
        <ControlPanel/>
      </div>
    )
  }
)