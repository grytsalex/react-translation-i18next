import React, { memo } from "react";
import "./styles.less";
import { useTranslation } from "react-i18next";
import Select from "react-select";
import { customStyles } from "./helpers/utils";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "pasta", label: "Pasta" },
  { value: "coffee", label: "Coffee" },
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "tomato", label: "Tomato" },
  { value: "cucumber", label: "Cucumber" },
  { value: "icecream", label: "Icecream" },
  { value: "marshmelow", label: "Marshmelow" },
  { value: "oil", label: "Oil" },
  { value: "burger", label: "Burger" },
  { value: "hotdog", label: "Hotgog" },
];

export const ReactSelect = memo((props) => {
  const { t } = useTranslation();

  return (
    <div className="about">
      <h2>{t("React Select")}</h2>
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
