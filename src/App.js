import './App.sass';
import logo from './img/logo.png'
import React, { useEffect, useState } from 'react';
import { DataContext } from './context';
import CardWrapper from './Card wrapper/Card wrapper';
import data from './data';

function App() {
  const [stateData, setStateData] = useState([]);
  const [dataForRender, setDataForRender] = useState([]);
  const [loadButtonVisability, setLoadButtonVisability] = useState();

  useEffect(function(){
    setStateData(data.slice(0,9));
  },[])

  useEffect(function(){
    setDataForRender(stateData.filter(item=>true));
  },[stateData])

  function loadMore(){
    setStateData(stateData.concat(data.slice(9,18)));
  }

  function showAllCard(){
    setDataForRender(stateData.filter(item=>true));
  }
  function filterDesignCards(){
    setDataForRender(stateData.filter(item=>item.category==='Design'))
  }
  function filterBrandingCards(){
    setDataForRender(stateData.filter(item=>item.category==='Branding'))
  }
  function filterIllustrationCards(){
    setDataForRender(stateData.filter(item=>item.category==='Illustration'))
  }
  function filterMotionCards(){
    setDataForRender(stateData.filter(item=>item.category==='Motion'))
  }

  return (
    <>
      <header className="header">
        <div className="header__nav-buttons-wrapper">
          <div className="header__logo">
            <img src={logo}/>
          </div>
          <div className="header__links">
            <button className="text text--medium text--white">About</button>
            <button className="text text--medium text--white">Services</button>
            <button className="text text--medium text--white">Pricing</button>
            <button className="text text--medium text--white">Blog</button>
          </div>
          <button className="header__contact-button text text--small text--white">CONTACT</button>
        </div>
        <div className="header__presentation-wrapper">
          <h1 className="header__title text text--white">Portfolio</h1>
          <p className="header__self-presentation text text--medium text--white">Agency provides a full service range including technical skills, design, business understanding.</p>
        </div>
      </header>
      
      <main className="content">
        <div className="content__buttons-wrapper">
          <ul className="content__links-wrapper">
            <li onClick={showAllCard} className="content__link text text--medium text--gray"><span>Show All</span></li>
            <li onClick={filterDesignCards} className="content__link text text--medium text--gray"><span>Design</span></li>
            <li onClick={filterBrandingCards} className="content__link text text--medium text--gray"><span>Branding</span></li>
            <li onClick={filterIllustrationCards} className="content__link text text--medium text--gray"><span>Illustration</span></li>
            <li onClick={filterMotionCards} className="content__link text text--medium text--gray"><span>Motion</span></li>
          </ul>
        </div>
        <DataContext.Provider value={{stateData, setStateData, setDataForRender}}>
          <CardWrapper data={dataForRender}/>
        </DataContext.Provider>
        <button className={`load-button ${loadButtonVisability} text text--small text--gray`} onClick={()=>{loadMore(); setLoadButtonVisability('invisible')}}>LOAD MORE</button>
      </main>
    </>
  );
}

export default App;
