import React from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Button,
  Badge,
} from "reactstrap";

const ShopItem = ({ price, title, description }) => {
  return (
    <>
      <Card className="m-2">
        <CardBody>
          <div className="d-flex align-items-center justify-content-between">
            <div>
              <CardTitle tag="h5">{title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {description}
              </CardSubtitle>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <Badge className="p-2 fs-5 rounded" color="secondary">
                ${price}.00
              </Badge>
            </div>
          </div>

          <div className="d-flex mt-4 align-items-center justify-content-end">
            <Button color="primary" outline className="mx-3">
              Add to Cart
            </Button>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ShopItem;
