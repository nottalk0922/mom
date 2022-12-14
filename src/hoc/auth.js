import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import getUser from "../api/getUser";
import { userState } from "../recoilState/user.state";
// import { useSelector } from "react-redux";

export default (SpecialComponent) => {
  const AuthenticateCheck = (props) => {
    useEffect(() => {
      getUser().then((user) => {
        console.log(user.isLogin);
        if (!user.isLogin) {
          alert("로그인해야 이용할 수 있는 기능입니다.");
          window.location.href = "/";
        }
        return SpecialComponent;
      })
    });
  };
  return <AuthenticateCheck />;
};
