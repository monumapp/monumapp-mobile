export const formatPrice = (price: number) => {
  if (price === 0) {
    return 'Gratuito'
  } else {
    return `R$ ${price.toFixed(2).replace('.', ',')}`
  }
}
