import axios from "axios";

const logoutUser = async () => {
    let dt;
    try {
        const { data } = await axios.get("/api/auth/logout", { withCredentials: true });
        dt = {
            isLogin: false,
        };
    } catch (error) {
        if (error.response?.status === 401) {
        }
    }
    return dt;
};

export default logoutUser;