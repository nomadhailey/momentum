import React from "react";
import Weather from "../components/weather/Weather";
import Setting from "../components/setting/Setting";

export default function Home() {
  return (
    <div>
      <h1>홈</h1>
      <Weather />
      <Setting />
    </div>
  );
}
