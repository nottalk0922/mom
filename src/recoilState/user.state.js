import { atom } from 'recoil';


const user = {
    isLogin: false
};

const userState = atom({
    key: "userState",
    default: user
})

export { userState };