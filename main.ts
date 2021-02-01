input.onGesture(Gesture.Shake, function () {
    Steg += 1
})
input.onButtonPressed(Button.B, function () {
    Steg = 0
})
let Steg = 0
basic.showString("Starta")
Steg = 0
basic.forever(function () {
    basic.showNumber(Steg)
})
