class Label {
    constructor(game, text) {
        this.game = game
        this.text = text
    }

    static new(game, text) {
        const i = new this(game, text)
        return i
    }

    draw() {
        this.game.context.fillText(this.text, 150, 120)
    }

    update() {}
}

class SceneTitle extends Scene {
    constructor(game) {
        super(game)

        const label = Label.new(this.game, 'Hello')
        this.addElement(label)
    }

    // draw() {
    //     this.game.context.fillText(`press s to start game`, 150, 120)
    //     this.game.context.fillText(`press c to custom level`, 150, 160)
    // }
}
