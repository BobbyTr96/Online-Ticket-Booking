import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const MovieItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <>
      <Card style={{ width: "100%" }}>
        <a href={`/chiTietPhim/${item.maPhim}`} className="card-image-div">
          <Card.Img variant="top" src={item.hinhAnh} />
          <div className="img-overlay"></div>
        </a>
        <Card.Body>
          <div className="cardText">
            <Card.Title>{item.tenPhim}</Card.Title>
            <Card.Text>{item.moTa}</Card.Text>
          </div>
          <button className="btn btn-primary btnDatVe" onClick={()=>navigate(`/chiTietPhim/${item.maPhim}`)}>
            <span>Đặt Vé</span>
          </button>
        </Card.Body>
      </Card>
    </>
  );
};

export default MovieItem;
