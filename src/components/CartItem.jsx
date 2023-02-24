import React from "react";
// import { useDispatch } from "react-redux";
// import { removeFromCart } from "../Redux/cartAction";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  CardText,
} from "reactstrap";

const CartItem = ({ itemQuantity, itemPrice, itemBasePrice, itemTitle }) => {
  // const dispatch = useDispatch();
  return (
    <>
      <Card className="m-2">
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <CardTitle tag="h5">{itemTitle}</CardTitle>
            <div className="d-flex align-items-center justify-content-between">
              <CardText>${itemPrice * itemQuantity}.00</CardText>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                (${itemBasePrice}.00/item)
              </CardSubtitle>
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-between">
            <CardText>✖{itemQuantity}</CardText>
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
