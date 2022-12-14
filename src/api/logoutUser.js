import axios from "axios";

const logoutUser = async () => {
    let dt;
    try {
        const { data } = await axios.get("/api/auth/logout", { withCredentials: true });
        dt = {
            isLogin: false,
        };
        localStorage.setItem("userInfo", JSON.stringify(dt));
    } catch (error) {
        if (error.response?.status === 401) {
        }
    }
    return dt;
};

export default logoutUser;