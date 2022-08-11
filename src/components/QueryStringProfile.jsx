import React from "react";
import { useSearchParams, useLocation } from "react-router-dom";
const QueryStringProfile = () => {
  const location = useLocation();
  return (
    <div>
      <h1>소개!</h1>
      <h1>queryString으로 처리하는 방법!</h1>
      <p>리액트 라우터 테스트</p>
      <p>queryString:{location.search}</p>
    </div>
  );
};

export default QueryStringProfile;
