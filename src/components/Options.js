import React, { useState } from "react";

export default function Options({ language, setLanguage }) {
  return (
    <>
      {/* <div>{contentObj[language].title}</div> */}

      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="pl">🇵🇱</option>
        <option value="eng">🇬🇧</option>
      </select>
    </>
  );
}
