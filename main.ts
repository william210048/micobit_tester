input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
})
input.onGesture(Gesture.EightG, function () {
    basic.showString("8G")
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.soundLevel() + (input.lightLevel() + input.temperature())))
})
input.onGesture(Gesture.SixG, function () {
    basic.showString("6G")
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("shake")
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        `)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showIcon(IconNames.Sad)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.ThreeG, function () {
    basic.showString("3G")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
})
basic.showString("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
basic.showNumber(1234567890)
basic.showString("`~!@#$%^&*()-_=+/*-+.,.;'\\[]<>?:\"|{}")
