export const filterNumbers = (array, largerThan) => {
  const newArray = array.filter( (value) => {
    return value <= largerThan;
  })
  return newArray
}
