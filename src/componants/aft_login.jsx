import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router";

export const AfterLogin = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const param = new URLSearchParams(location.search);
  useEffect(() => {
    const code = param.get("code");
    axios.get(`/api/auth/naver?code=${code}`).then(({ data }) => {
      if (data.success) {
        navigate("/");
      } else {
        alert("로그인 실패");
        navigate("/");
      }
    });
  }, []);
  return <></>;
};
