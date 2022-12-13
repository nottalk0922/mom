import '../style/Main_nav.css';
import React from "react";

function Main_nav() {


    return (
        <div className='categorybar'>
            <div className="categorybar__menu">  
                <li><a href=''><img className='반응형' src='./img/category_1.png' /></a></li>
                <li><a href=''><img className='반응형' src='./img/category_2.png' /></a></li>
                <li><a href=''><img className='반응형' src='./img/category_3.png' /></a></li>
                <li><a href=''><img className='반응형' src='./img/category_4.png' /></a></li>
                <li><a href=''><img className='반응형' src='./img/category_5.png' /></a></li>
            </div>
        </div>
    );
}

export default Main_nav;