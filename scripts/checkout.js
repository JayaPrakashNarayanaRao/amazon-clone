import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCart, loadCartFetch} from "../data/cart.js";

async function loadPage() {
  try {
    await loadProductsFetch();
    const cart = await loadCartFetch();
    if (cart.length === 0) {
      document.getElementById("checkout-container").innerHTML = "<p>No Products Yet.</p>";
    } else {
      renderOrderSummary();
      renderPaymentSummary();
    }
  } catch (error) {
    console.log(error);
  }
}
loadPage();