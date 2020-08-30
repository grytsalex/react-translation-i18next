import React from "react";
import "./styles.less";
import { useTranslation } from "react-i18next";

export const ControlPanel = () => {
  const { t, i18n } = useTranslation();

  const setLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="control-panel">
      <button className="englishBtn" onClick={() => setLanguage("en")}>
        {t("English")}
      </button>
      <button className="russianBtn" onClick={() => setLanguage("ru")}>
        {t("Russian")}
      </button>
    </div>
  );
};
