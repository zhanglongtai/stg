class Scene {
    constructor(game, ...args) {
        this.game = game

        this.elements = []
    }

    static new(game, ...args) {
        const i = new this(game, ...args)
        return i
    }

    addElement(element) {
        this.elements.push(element)
    }

    draw() {
        for (const e of this.elements) {
            this.game.drawImage(e)
        }
    }

    update() {}
}
