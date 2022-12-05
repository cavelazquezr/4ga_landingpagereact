import React from "react";


const Card = (props) => {

    return(
        <div className="card cardsize col-3 col-sm-12 p-0 mx-auto d-block mb-3">
            <img src={props.item.image} className="card-img-top imgfit" alt="..." />
            <div className="card-body text-start">
                <h5 className="card-title">{props.item.title}</h5>
                <p className="card-text ">{props.item.description}</p>
            </div>
            <div className="card-footer text-center">
                <a href={props.item.location} className="btn btn-outline-primary">Ver en el mapa</a>
            </div>
        </div>
    );
};

export default Card;