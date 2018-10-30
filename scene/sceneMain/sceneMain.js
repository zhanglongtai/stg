class SceneMain extends Scene {
    constructor(game) {
        super(game)

        this.setup()

        this.score = 0
        this.dragging = false

        // this.game.registerAction('ArrowLeft', () => {
        //     this.paddle.moveLeft()
        // })
    
        // this.game.registerAction('ArrowRight', () => {
        //     this.paddle.moveRight()
        // })
    
        // this.game.registerAction('f', () => {
        //     this.ball.fire()
        // })

        // this.game.canvas.addEventListener('mousedown', (event) => {
        //     const x = event.offsetX
        //     const y = event.offsetY
        //     if (this.ball.hasPoint(x, y)) {
        //         this.dragging = true
        //     }
        // })

        // this.game.canvas.addEventListener('mousemove', (event) => {
        //     const x = event.offsetX
        //     const y = event.offsetY
        //     if (this.dragging) {
        //         this.ball.x = x
        //         this.ball.y = y
        //     }
        // })

        // this.game.canvas.addEventListener('mouseup', (event) => {
        //     this.dragging = false
        // })
    }

    setup() {
        this.background = GameImage.new(this.game, 'sky')
        this.cloud = GameImage.new(this.game, 'cloud')
        this.player = GameImage.new(this.game, 'player')
        this.player.x = 100
        this.player.y = 150

        this.addElement(this.background)
        this.addElement(this.player)
        this.addElement(this.cloud)

        // this.game.registerAction('ArrowLeft', () => {
        //     this.player.moveLeft()
        // })
    
        // this.game.registerAction('ArrowRight', () => {
        //     this.player.moveRight()
        // })
    
        // this.game.registerAction('f', () => {
        //     this.ball.fire()
        // })
    }

    // draw() {
        // background
        // game.context.fillStyle = "#554"
        // game.context.fillRect(0, 0, 400, 300)

        // component
        // this.game.drawImage(this.background)
        // this.game.drawImage(this.player)
        // this.game.drawImage(this.paddle)
        // this.game.drawImage(this.ball)
        // for (const b of this.blocks) {
        //     if (b.alive) {
        //         this.game.drawImage(b)
        //     }
        // }

        // this.game.context.fillText(`score: ${this.score}`, 10, 290)
    // }

    update() {
        if (window.paused) {
            return
        }
    }
}
