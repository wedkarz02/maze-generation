
class Node {
    constructor(x, y, size) {
        this.size = size
        this.visited = false
        this.position = {
            x: x,
            y: y
        }
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, size, size)
    }
}
