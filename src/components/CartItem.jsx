import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";

const CartItem = () => {
  return (
    <>
      <Card>
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <CardTitle tag="h5">Man Perfume</CardTitle>
            <div className="d-flex align-items-center justify-content-between">
              <CardText>$54.00</CardText>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                ($6.00/item)
              </CardSubtitle>
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-between">
            <CardText>✖9</CardText>
            <div>
              <Button color="success" className="mx-3">
                +
              </Button>
              <Button color="danger" className="mx-3">
                -
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default CartItem;
