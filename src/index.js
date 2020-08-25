import React from "react";
import ReactDOM from "react-dom";
import Routing from "./routes/Routing";
import styles from "./styles.less"

import i18next from './i18next.js';
import { I18nextProvider } from "react-i18next";

ReactDOM.render(
        <I18nextProvider i18n={i18next}>
          <Routing/>
        </I18nextProvider>,
        document.getElementById("root")
);