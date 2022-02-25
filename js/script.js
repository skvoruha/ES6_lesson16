const buttonSum = document.getElementById('sum')
const buttonMult = document.getElementById('mult')
const inputRes = document.getElementById('res')

const calculator = {
  init: function(){
    buttonSum.addEventListener('click', this.sum.bind(this))
    buttonMult.addEventListener('click', this.mult.bind(this))
  },
  value: function(){
    const a = +document.getElementById('a').value
    const b = +document.getElementById('b').value
    return [a, b]
  },
  sum: function(){
    this.show(this.value()[0] + this.value()[1])
  },
  mult: function(){
    this.show(this.value()[0] * this.value()[1])
  },
  show: function(res){
    inputRes.value = res
  }
}

calculator.init()


