import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProducts, loadProductsFetch} from "../data/products.js";
import {loadCart, loadCartFetch} from "../data/cart.js";

async function loadPage() {
  try
  {
    await loadProductsFetch();
    await loadCartFetch();
    await Promise.all([
      loadProductsFetch(),
      loadCartFetch()
    ]);
  } 
  catch(error) {
    console.log(error);
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
