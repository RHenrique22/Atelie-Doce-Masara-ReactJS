import { Card, Row, Col, Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Catalogo() {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch(
        "https://my-json-server.typicode.com/playreset/img-json-server/images"
      );

      const data = await res.json();

      const imgs = data.map((image) => image.image);

      setCatalogo([...catalogo, ...imgs]);
    };

    loadData();
  }, []);

  return (
    <>
      <h1 className="text-center mt-4 mb-4">Catálogo</h1>
      <Row xs={1} md={3} className="gy-4 m-0 ms-4 me-4">
        {catalogo.map((img) => (
          <Col>
            <Card className="text-center">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Button variant="success">Comprar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Catalogo;
