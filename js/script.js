
const sum = document.getElementById('sum')
const inputRes = document.getElementById('res')

const getResult = function(){
  const x = document.getElementById('x').value
  const y = document.getElementById('y').value

  let result = Math.pow(x, y);
  console.log(result);
  result = ('' + result).split('').reduce(function (sum, val) {
    return sum + +val}, 0)
  // ваш код
  inputRes.value = result

  return result
}

sum.addEventListener('click', getResult)