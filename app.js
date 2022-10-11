
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight

const nodeSize = 50
const padding = 10

const gridWidth = 10
const gridHeight = 6

let nodes = new Array()
for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridWidth; j++) {
        let node = new Node(j * (nodeSize + padding), i * (nodeSize + padding), nodeSize)
        nodes.push(node)
        node.draw()
    }
}
