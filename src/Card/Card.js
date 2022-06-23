import React, { useContext, useState } from "react";
import { DataContext } from "../context";
import './Card.sass';

export default function Card({name, img, category}){
    const [active, setActive] = useState('disactive');
    const {stateData, setStateData, setDataForRender} = useContext(DataContext);

    function filterCard(){
        setDataForRender(stateData.filter(item=>item.category===category));
    }

    return(
        <div className={`card ${active}`} onClick={()=>{(active==='disactive')?setActive('active'):setActive('disactive')}}>
            <input type='text' className="card__input" onKeyUp={(e)=>{(e.code==='Delete')?setStateData(stateData.filter(item=>item.name!==name)):console.log('1')} }/>
            <img className="card__background" src={img} alt="здесь должна была быть ваше реклама"/>
            <button onClick={(e)=>{e.stopPropagation();filterCard()} } className="card__category">{category}</button>
            <h3 className="card__name text text--large">{name}</h3>
        </div>
    )
}