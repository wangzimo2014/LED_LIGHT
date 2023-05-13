basic.forever(function () {
    if (input.lightLevel() >= 128) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        led.setBrightness(0)
    } else if (input.lightLevel() <= 128 && input.lightLevel() >= 100) {
        basic.showLeds(`
            . # # # .
            . . # . .
            . # # # .
            . . # . .
            # # # # #
            `)
        led.setBrightness(128)
    } else if (input.lightLevel() <= 100) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        led.setBrightness(255)
    }
})
