
let rnd = 0
let item = 0
input.onButtonPressed(Button.A, function () {
    item += -1
    if (item < 0) {
        item = 0
    }
    kansuji.showNumberJapaneseNumeral(item)
})
input.onButtonPressed(Button.AB, function () {
    item = 0
    kansuji.showNumber2digits(item)
    for (let カウンター = 0; カウンター <= 6; カウンター++) {
        kansuji.showNumberDayOfTheWeek(カウンター)
        basic.pause(100)
    }
    basic.showLeds(`
        # # # # #
        # . . . #
        # # # # #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        # # # # #
        # . . # #
        # # # . #
        # # # # #
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        # . # . #
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . # . #
        . # # . #
        . # # # .
        # . # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        # # # # #
        . . # . .
        . # # # .
        # . # . #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        # # # # #
        `)
})
input.onPinPressed(TouchPin.P1, function () {
    item += -1
    if (item < 0) {
        item = 0
    }
    kansuji.showNumber2digits(item)
    kansuji.showNumberDayOfTheWeek(item)
})
input.onGesture(Gesture.Shake, function () {
    // rnd = Math.floor(Math.random() * 6) + 1
    rnd = Math.randomRange(1, 6)
    kansuji.showNumber2digits(rnd)
    basic.pause(200)
    kansuji.showNumberDice(rnd)
})
input.onPinPressed(TouchPin.P2, function () {
    item += 1
    if (item > 6) {
        item = 6
    }
    kansuji.showNumber2digits(item)
    kansuji.showNumberDayOfTheWeek(item)
})
input.onButtonPressed(Button.B, function () {
    item += 1
    if (item > 12) {
        item = 12
    }
    kansuji.showNumberJapaneseNumeral(item)
})
item = 0
kansuji.showNumber2digits(item)
basic.pause(1000)
kansuji.showNumberJapaneseNumeral(item)
basic.forever(function () {

})
