class Bullet extends GameImage {
    constructor(game, player) {
        super(game, 'bullet')

        this.player = player

        this.setUp()
    }

    setUp() {
        this.speed = 5
        this.x = this.player.x
        this.y = this.player.y
    }

    update() {
        this.y -= this.speed
    }
}
