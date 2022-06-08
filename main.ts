input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.magneticForce(Dimension.Strength)))
})
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) < 2100) {
        music.playMelody("B - B - B - B - ", 120)
        basic.showString("Intruso")
    }
})
