class SceneTitle extends Scene {
    constructor(game) {
        super(game)

        const label = Label.new(this.game, 'Hello')
        this.addElement(label)

        const particleSystem = ParticleSystem.new(this.game)
        this.addElement(particleSystem)
    }

    // draw() {
    //     this.game.context.fillText(`press s to start game`, 150, 120)
    //     this.game.context.fillText(`press c to custom level`, 150, 160)
    // }
}
