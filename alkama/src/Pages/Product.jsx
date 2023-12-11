import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card ,Image} from "react-bootstrap";

const Product = ({addToCart}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then((res) => {
        // Check the structure of the response and update accordingly
        setProduct(res.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <section>
      <div className="my-5">
        <h1 className="text-center my-5" style={{ color: "blue", fontSize: "30px" }}>
          All Product
        </h1>
        <Container>
          <Row className="product">
            {product.map((item) => (
              <Col key={item.id} md={3}>
                <Card style={{ marginBottom: '20px' }}>
                  <Image src={item.images[0]} alt=""  style={{width: "200px",height: '210px'}} />
                  <Card>{item.title}</Card>
                  <Card>Price: ${item.price}</Card>
                  <button onClick={addToCart}  style={{background: 'blue',color: 'white ',border:"none "}}>
                    Add to Cart
                  </button>
                </Card>
            
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Product;
