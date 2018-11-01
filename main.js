const enableDebugMode = function(game, enabled) {
    if (!enabled) {
        return
    }

    window.addEventListener('keydown', (event) => {
        const k = event.key
        if (k === 'p') {
            window.paused = !window.paused
        } else if ('123456789'.includes(k)) {
            // const scene = SceneMain.new(game, localLevels, Number(k))
            // game.replaceScene(scene)
        }
    })

    document.querySelector('#id-fps-input').addEventListener('input', (event) => {
        const value = event.target.value
        window.fps = Number(value)
    })
}

const __main = function() {
    const imgPath = {
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
        sky: 'img/sky.png',
        enemy0: 'img/enemy0.png',
        enemy1: 'img/enemy1.png',
        enemy2: 'img/enemy2.png',
        enemy3: 'img/enemy3.png',
        enemy4: 'img/enemy4.png',
        fire: 'img/fire.png',
    }

    const game = Game.singleInstance(30, imgPath, (gameInstance) => {
        const scene = SceneMain.new(gameInstance)
        // const scene = SceneTitle.new(gameInstance)
        game.runWithScene(scene)
    })

    enableDebugMode(game, true)
    window.paused = false
}

__main()
