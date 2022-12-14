import { atom } from 'recoil';


const user = {
    isLogin: false
};

const localStorageEffect = (key) => ({ setSelf, onSet }) => {
    const savedValue = localStorage.getItem(key);
    if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
    }
    onSet((newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
    })
}

const userState = atom({
    key: "userState",
    default: user,
    effects: [localStorageEffect("user")]
})


export { userState };