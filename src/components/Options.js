import React from "react";

export default function Options({ setLanguage }) {
  return (
    <>
      <select onChange={(e) => setLanguage(e.target.value)}>
        <option value="pl">🇵🇱</option>
        <option value="eng">🇬🇧</option>
      </select>
    </>
  );
}
