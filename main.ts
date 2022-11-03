input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    if (onoff == 0) {
        onoff += 1
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (onoff == 1) {
        onoff += -1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let onoff = 0
onoff = 0
