class Particle extends GameImage {
    constructor(game) {
        super(game, 'fire')
        this.game = this.game

        this.setUp()
    }

    setUp() {}

    init(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
    }

    update() {
        this.x += this.vx
        this.y += this.vy
    }
}

class ParticleSystem {
    constructor(game) {
        this.game = game

        this.setUp()
    }

    static new(game) {
        const i = new this(game)
        return i
    }

    setUp() {
        this.x = 150
        this.y = 200
        this.numberOfParticles = 20
        this.particles = []
    }

    update() {
        if (this.particles.length < this.numberOfParticles) {
            const p = Particle.new(this.game)
            const vx = randomBetween(-10, 10)
            const vy = randomBetween(-10, 10)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        
        for (const p of this.particles) {
            p.draw()
        }
    }

    draw() {
        for (const p of this.particles) {
            p.draw()
        }
    }
}
