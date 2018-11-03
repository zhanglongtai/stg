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
        // walking1: 'img/walking/8framewalk1.gif',
        // walking2: 'img/walking/8framewalk2.gif',
        // walking3: 'img/walking/8framewalk3.gif',
        // walking4: 'img/walking/8framewalk4.gif',
        // walking5: 'img/walking/8framewalk5.gif',
        // walking6: 'img/walking/8framewalk6.gif',
        // walking7: 'img/walking/8framewalk7.gif',
        // walking8: 'img/walking/8framewalk8.gif',
        idle1: 'img/adventurer/idle/adventurer-idle-00.png',
        idle2: 'img/adventurer/idle/adventurer-idle-01.png',
        idle3: 'img/adventurer/idle/adventurer-idle-02.png',
        run1: 'img/adventurer/run/adventurer-run3-00.png',
        run2: 'img/adventurer/run/adventurer-run3-01.png',
        run3: 'img/adventurer/run/adventurer-run3-02.png',
        run4: 'img/adventurer/run/adventurer-run3-03.png',
        run5: 'img/adventurer/run/adventurer-run3-04.png',
        run6: 'img/adventurer/run/adventurer-run3-05.png',
    }

    const game = Game.singleInstance(30, imgPath, (gameInstance) => {
        // const scene = SceneMain.new(gameInstance)
        const scene = SceneTitle.new(gameInstance)
        game.runWithScene(scene)
    })

    enableDebugMode(game, true)
    window.paused = false
}

__main()
