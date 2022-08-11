import React from "react";
import { useParams } from "react-router-dom";

const data = {
  user1: {
    name: "사람1",
    email: "user1@gmail.com",
  },
  user2: {
    name: "사람2",
    email: "user2@gmail.com",
  },
};
const Profile = () => {
  const params = useParams();
  console.log(params.username);
  const profile = data[params.username];
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>이름:{profile.name}</h2>
          <p>메일:{profile.email}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다!</p>
      )}
    </div>
  );
};

export default Profile;
