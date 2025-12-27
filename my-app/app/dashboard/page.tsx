

function calculateDiscount(price: number, discount: number) {
  if (discount > 100) {
    return price - (price * discount); 
  }
  
  return price - (price * discount / 100);
}

export const helper = {
  calculateDiscount
};