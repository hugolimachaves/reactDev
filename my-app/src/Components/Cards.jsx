import React from "../../node_modules/react";

const cardStyle = {
  float: "left"
};

function Card(props) {
  return (
    <div className="col-lg-3" style={cardStyle}>
      <div className="card bg-dark" id="side-by-side">
        <div class="card-body">
          <img
            src={props.obj.image}
            className="card-img-top"
            alt={props.obj.imgDescription}
          />
          <h5 className="card-title">{props.obj.cardName}</h5>
          <p className="card-text">{props.obj.texto}</p>

          <a href="#" className="btn btn-success ">
            {props.obj.btName}
          </a>
        </div>
      </div>
      <div class="card-footer bg-danger border-danger">Perigo</div>
    </div>
  );
}

export default Card;
