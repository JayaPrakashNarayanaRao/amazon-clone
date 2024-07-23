export function formatCurrency(priceCents) {
  const usdToInrRate = 83.7;
  const inrAmount = Math.round((priceCents / 100) * usdToInrRate);
  return inrAmount.toLocaleString('en-IN');
}

export default formatCurrency;