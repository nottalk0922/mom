import './App.css';
import React, { Component, useEffect } from 'react';
import Main_Header from './componants/main_header';
import Main_Nav from './componants/main_nav';
import Main_section from './componants/main_section';
import Main_footer from './componants/main_footer';
import Baaner from './componants/banner';
import Eventpage from './componants/eventpage';
import getUser from './api/getUser';
import { useRecoilState } from 'recoil';
import { userState } from './recoilState/user.state';
import axios from 'axios';
import Usemoney from './componants/usemoney'


function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    axios.get("/api/user", { withCredentials: true }).then(({ data }) => {
      console.log(data);
    }).catch(e => {
      console.log(e);
    })
    // (async () => {
    //   try {
    //     const { data } = await axios.get("/user");
    //     console.log(data);
    //   } catch (error) {
    //     if (error.response?.status === 401) {
    //     }
    //   }
    //   // if (!user?.isLogin) {
    //   //   setUser({ ...await getUser() });
    //   // }
    // })();
  }, []);
  return (
    <div className="App">
      <Main_Header />
      <Baaner />
      <Main_Nav />
      <Main_section />
      <Main_footer />
      {/* <Eventpage />
      <Usemoney /> */}
    </div>
  );
}

export default App;
