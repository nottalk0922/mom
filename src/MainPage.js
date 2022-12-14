import React, { Component, useEffect } from 'react';
import Main_Header from './componants/main_header';
import Main_Nav from './componants/main_nav';
import Main_section from './componants/main_section';
import Main_footer from './componants/main_footer';
import Baaner from './componants/banner';
import { useRecoilState } from 'recoil';
import { userState } from './recoilState/user.state';
import axios from 'axios';

function MainPage() {
    const [user, setUser] = useRecoilState(userState);
    return (
        <div className="App">
            <Main_Header />
            <Baaner />
            <Main_Nav />
            <Main_section />
            <Main_footer />
        </div>
    );
}

export default MainPage;