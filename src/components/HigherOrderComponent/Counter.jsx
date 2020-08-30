import React, { memo } from "react";
import "./styles.less";
import { useTranslation } from "react-i18next";

import hoc from "./HigherOrderComponent";

const Counter = memo(({ count, onCountUp, onCountDown }) => {
  const { t } = useTranslation();

  return (
    <div className="counter btn-group">
      <button
        id="minus"
        className="btn btn-danger btn-lg"
        onClick={onCountDown}
      >
        -
      </button>
      <span className="btn btn-secondary btn-lg active">{count}</span>
      <button id="plus" className="btn btn-success btn-lg" onClick={onCountUp}>
        +
      </button>
    </div>
  );
});

export default hoc(Counter);
