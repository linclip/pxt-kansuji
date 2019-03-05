let item = 0
input.onButtonPressed(Button.A, function () {
    item += -1
    if (item < 0) {
        item = 0
    }
    kansuji.showNumberJapaneseNumeral(item)
})
input.onButtonPressed(Button.AB, function () {
    for (let counter = 0; counter <= 39; counter++) {
        kansuji.showNumber2digits(counter)
        basic.pause(50)
    }
    item = 0
    kansuji.showNumberJapaneseNumeral(item)
})
input.onPinPressed(TouchPin.P1, function () {
    item += -1
    if (item < 0) {
        item = 0
    }
    kansuji.showNumberDayOfTheWeek(item)
})
input.onGesture(Gesture.Shake, function () {
    for (let i = 0; i < 4; i++) {
        basic.pause(100)
        kansuji.showNumberDice(Math.randomRange(1, 6))
    }
})
input.onButtonPressed(Button.B, function () {
    item += 1
    if (item > 12) {
        item = 12
    }
    kansuji.showNumberJapaneseNumeral(item)
})
input.onPinPressed(TouchPin.P2, function () {
    item += 1
    if (item > 6) {
        item = 6
    }
    kansuji.showNumberDayOfTheWeek(item)
})
item = 0
kansuji.showNumberJapaneseNumeral(item)
basic.forever(function () {

})
