export const hashtags = (text) => {
  const array = Array.from(text.split(" "))
  const newArray = array.filter(element => element.startsWith('#'))
  return newArray
}
