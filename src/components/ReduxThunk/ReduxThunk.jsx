import React, { useRef, useEffect } from "react";
import "./styles.less";
import { useTranslation } from "react-i18next";

export const ReduxThunk = () => {
  const { t } = useTranslation();

  const statusRef = useRef(null);


  // function tryChangeColorRef(ref) {
  //   ref.current.color = "red";
  // }

  useEffect(() =>{
    // tryChangeColorRef(statusRef)
  console.log(statusRef)
  })

  let data = [
    { status: "Canceled" },
    { status: "Completed" },
    { status: "Expired" },
  ];

  // function checkCondition(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     data[i].status === "Completed" || "Expired" ? "Completed" : "Canceled";
  //     setColor(data[i].status);
  //     debugger;
  //   }
  // }

  // function setColor(status, statusRef) {
  //   status === "Canceled"
  //     ? (statusRef.current.style.color = "red")
  //     : (statusRef.current.style.color = "green");
  // }

  return (
    <div className="team">
      <div
        className="status"
        style={{
          width: "100%",
          height: "100px",
          justifyContent: "center",
          display: "flex",
          alignItems: "center"
        }}
      >
        <p  ref={statusRef}>Text</p>
      </div>
    </div>
  );
};
