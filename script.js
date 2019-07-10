const box = document.getElementById('box')
const form = document.getElementById('dom-nodes-form')

// const numNodes = 1000
// setTimeout(function() {
//   for (let i = 0; i < numNodes; i++) {
//     const newNode = document.createElement('DIV')
//     newNode.classList.add('node')
//     box.appendChild(newNode)
//   }
// }, 2000)

// const arrOfDivs = []

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const [{ value: numNodes }] = event.target
  console.log(numNodes)
  for (let i = 0; i < numNodes; i++) {
    function hello() {}
    setInterval(
      function() {
        // hello()
      },
      10000
    )
    const newNode = document.createElement('DIV')
    newNode.addEventListener('click', hello)
    newNode.classList.add('node')
    box.appendChild(newNode)
    // arrOfDivs.push(newNode)
  }
})

box.addEventListener('click', function() {
  box.innerHTML = ''
  // while (box.firstElementChild) {
  //   box.removeChild(box.firstElementChild)
  // }
  console.log(box.innerHTML)
})
