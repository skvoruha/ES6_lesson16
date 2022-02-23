const buttonSum = document.getElementById('sum')
const buttonMult = document.getElementById('mult')
const inputRes = document.getElementById('res')

const calculator = {
  init: function(){
    buttonSum.addEventListener('click', this.sum.bind(this))
    buttonMult.addEventListener('click', this.mult.bind(this))
  },
  sum: function(){
    const a = +document.getElementById('a').value
    const b = +document.getElementById('b').value
    this.show(a + b)
  },
  mult: function(){
    const a = +document.getElementById('a').value
    const b = +document.getElementById('b').value
    this.show(a * b)
  },
  show: function(res){
    inputRes.value = res
  }
}

calculator.init()


