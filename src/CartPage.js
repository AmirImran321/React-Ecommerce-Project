import React from "react";
import { useCart } from "./CartContext";
import { Button, Table } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);

return(
    <div className="container mt-4">
      <h2>Shopping Cart</h2>
     {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>RM{item.price}</td>
                <td>{item.quantity || 1}</td>
                <td>
                  <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3" style={{ textAlign: "right" }}><strong>Total:</strong></td>
              <td>RM{total.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="4" style={{ textAlign: "right" }}>
                <Button onClick={clearCart}>Clear Cart</Button>
              </td>
            </tr>
          </tfoot>
        </Table>
      )}
    </div>
  );
}

export default CartPage;