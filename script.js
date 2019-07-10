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

form.addEventListener('submit', function(event) {
  event.preventDefault()
  const [{ value: numNodes }] = event.target
  console.log(numNodes)
  for (let i = 0; i < numNodes; i++) {
    const newNode = document.createElement('DIV')
    newNode.classList.add('node')
    box.appendChild(newNode)
  }
})
