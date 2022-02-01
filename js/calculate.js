function bhaskara() {
  let value_a = Number(document.querySelector('#valueA').value)
  let value_b = Number(document.querySelector('#valueB').value)
  let value_c = Number(document.querySelector('#valueC').value)

  if ((value_a == 0 || null && value_a != Number) || (value_b == null && value_b != Number) || (value_c == null && value_c != Number)) {
    alert(`You need to type something!`)
  } else {
    console.log(value_a, typeof value_a)
    
    let delta = (value_b ** 2) - 4 * value_a * value_c
    
    if (delta < 0) {
      alert(`Delta value can't be minor than 0`)
    } else {
      let bhaskara1 = (-value_b - Math.sqrt(delta)) / 2 * value_a
      let bhaskara2 = (-value_b + Math.sqrt(delta)) / 2 * value_a

      document.querySelector('.x1').innerHTML = `x' = ${bhaskara1.toFixed(2)}`
      document.querySelector('.x2').innerHTML = `x" = ${bhaskara2.toFixed(2)}`

      console.log(bhaskara1, bhaskara2)
    }
  }
};
