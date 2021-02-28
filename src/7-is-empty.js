export const isEmpty = (stringArrayOrObject) => {
  const type = typeof stringArrayOrObject;
  if (type === 'string') {
    if (stringArrayOrObject === "") {
      return true
    } else {
      return false
    }
  }
  if (type === 'array') {
    if (stringArrayOrObject.length === 0) {
      return true
    } else {
      return false
    }
  }
  if (type === 'object') {
    if(Object.entries(stringArrayOrObject).length === 0){
      return true
    } else{
      return false
    }

  }
}
