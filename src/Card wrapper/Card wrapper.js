import React from "react";
import Card from "../Card/Card";
import './Card wrapper.sass';

export default function CardWrapper(props){

    const cards = props.data.map(item => <Card key={`${item.name}`+'__key'} name={item.name} img={item.imgUrl} category={item.category}/>)

    return(
        <div className="card-wrapper">
            {cards}
        </div>
    )
}