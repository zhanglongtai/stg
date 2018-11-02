class SceneTitle extends Scene {
    constructor(game) {
        super(game)

        // const label = Label.new(this.game, 'Hello')
        // this.addElement(label)

        // const particleSystem = ParticleSystem.new(this.game)
        // this.addElement(particleSystem)

        this.animation = Animation.new(this.game)
        this.animation.x = 100
        this.animation.y = 200
        this.addElement(this.animation)

        this.setInputs()
    }

    setInputs() {
        this.game.registerAction('ArrowLeft', () => {
            this.animation.move(-5)
        })

        this.game.registerAction('ArrowRight', () => {
            this.animation.move(5)
        })
    }

    // draw() {
    //     this.game.context.fillText(`press s to start game`, 150, 120)
    //     this.game.context.fillText(`press c to custom level`, 150, 160)
    // }
}
