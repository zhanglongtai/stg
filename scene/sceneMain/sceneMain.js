class SceneMain extends Scene {
    constructor(game) {
        super(game)

        this.background = GameImage.new(this.game, 'sky')

        this.paddle = Paddle(this.game)
        this.ball = Ball(this.game)
        this.blocks = loadLevel(this.game, this.levels, this.levelIndex)

        this.score = 0
        this.dragging = false

        this.game.registerAction('ArrowLeft', () => {
            this.paddle.moveLeft()
        })
    
        this.game.registerAction('ArrowRight', () => {
            this.paddle.moveRight()
        })
    
        this.game.registerAction('f', () => {
            this.ball.fire()
        })

        this.game.canvas.addEventListener('mousedown', (event) => {
            const x = event.offsetX
            const y = event.offsetY
            if (this.ball.hasPoint(x, y)) {
                this.dragging = true
            }
        })

        this.game.canvas.addEventListener('mousemove', (event) => {
            const x = event.offsetX
            const y = event.offsetY
            if (this.dragging) {
                this.ball.x = x
                this.ball.y = y
            }
        })

        this.game.canvas.addEventListener('mouseup', (event) => {
            this.dragging = false
        })
    }

    draw() {
        // background
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)

        // component
        this.game.drawImage(this.background)
        // this.game.drawImage(this.paddle)
        // this.game.drawImage(this.ball)
        // for (const b of this.blocks) {
        //     if (b.alive) {
        //         this.game.drawImage(b)
        //     }
        // }

        this.game.context.fillText(`score: ${this.score}`, 10, 290)
    }

    update() {
        if (window.paused) {
            return
        }
        
        this.ball.move()

        // game over
        if (this.ball.y > this.paddle.y) {
            const sceneEnd = SceneEnd.new(this.game)
            this.game.replaceScene(sceneEnd)
        }

        if (this.paddle.collide(this.ball)) {
            this.ball.reverse()
        }

        for (const b of this.blocks) {
            if (b.collide(this.ball)) {
                b.destroy()
                this.score += 10
                this.ball.reverse()
            }
        }
    }
}
