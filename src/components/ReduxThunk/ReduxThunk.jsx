import React, { useRef } from "react";
import "./styles.less";
import { useTranslation } from "react-i18next";

export const ReduxThunk = (props) => {
  const { t } = useTranslation();

  const statusRef = useRef(null);

  return (
    <div className="team">
      <div
        className="status"
        style={{
          width: "100%",
          height: "100px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <p ref={statusRef}>Text</p>
      </div>
    </div>
  );
};
