import React from "react";

const Jumbotron = () => {
    return(
        <div className="p-5 my-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita repellendus facere commodi modi iure, rerum omnis non nobis incidunt beatae velit ratione odit eaque ex facilis, cupiditate dolores ipsam mollitia.</p>
                <button className="btn btn-outline-primary btn-lg" type="button">Call to action!</button>
            </div>
        </div>
    );
};

export default Jumbotron;