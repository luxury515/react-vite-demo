import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <p>홈페이지 입니다.^^</p>
        <ul>
          <li>
            <Link to="/about">소개</Link>
          </li>
          <li>
            <Link to="/profile/user1">user1 프로필보기</Link>
          </li>
          <li>
            <Link to="/profile/user2">user2 프로필보기</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Home;
