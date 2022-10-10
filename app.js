
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const padding = 10
const size = 50

let node = new Node(padding, padding, size)
node.draw()
