//% weight=100 color=#ff0000 icon="\u0023" block="Kansuji"
namespace kansuji {

    const numDayOfTheWeek = [
        ["11111", "10001", "11111", "10001", "11111"],   //0 日
        ["11111", "10011", "11101", "11111", "10001"],   //1 月
        ["10101", "10101", "00100", "01010", "10001"],   //2 火
        ["10101", "01101", "01110", "10110", "10101"],   //3 水
        ["00100", "11111", "00100", "01110", "10101"],   //4 木
        ["00100", "01110", "10101", "01110", "11111"],   //5 金
        ["00100", "01110", "00100", "00100", "11111"],   //6 土
    ]
    /**
     * show Day of the Week (0-6)
     * @param n Day of the Week sun-sat (0-6), eg: 0
     */
    //% blockId=showNumberDayOfTheWeek block="Day of the Week %n"
    export function showNumberDayOfTheWeek(n: number): void {
        basic.clearScreen()
        n = Math.floor(n)
        if (n < 0 || n > 6) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if ((numDayOfTheWeek[n][y]).substr(x, 1) == "1") {
                    led.plot(x, y)
                }
            }
        }
    }

    const numDice = [
        ["00000", "00000", "00100", "00000", "00000"],   //1
        ["00000", "01000", "00000", "00010", "00000"],   //2
        ["10000", "00000", "00100", "00000", "00001"],   //3
        ["00000", "01010", "00000", "01010", "00000"],   //4
        ["10001", "00000", "00100", "00000", "10001"],   //5
        ["01010", "00000", "01010", "00000", "01010"],   //6
    ]
    /**
     * show number in Dice (1-6)
     * @param n describe value here, eg: 1
     */
    //% blockId=showNumberDice block="Dice %n"
    export function showNumberDice(n: number): void {
        basic.clearScreen()
        n = Math.floor(n)
        if (n < 1 || n > 6) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if ((numDice[n - 1][y]).substr(x, 1) == "1") {
                    led.plot(x, y)
                }
            }
        }
    }


    const numJapanese = [
        ["01110", "10001", "10001", "10001", "01110"],   //0
        ["00000", "00000", "11111", "00000", "00000"],   //1
        ["01110", "00000", "00000", "00000", "11111"],   //2
        ["01110", "00000", "01110", "00000", "11111"],   //3
        ["11111", "10101", "11011", "10001", "11111"],   //4
        ["11111", "00100", "01110", "00110", "11111"],   //5
        ["00100", "11111", "00000", "01010", "10001"],   //6
        ["01000", "11111", "01000", "01000", "01111"],   //7
        ["01010", "01010", "01010", "10001", "10001"],   //8
        ["01000", "11110", "01010", "01010", "01011"],   //9
        ["00100", "00100", "11111", "00100", "00100"],   //10
        ["01000", "11100", "01000", "00111", "00000"],   //11
        ["01000", "11100", "01011", "00000", "00111"],   //12
    ]
    /**
     * show number in Japanese Numeral
     * @param n describe value here, eg: 0
     */
    //% blockId=showNumberJapaneseNumeral block="Japanese Numeral %n"
    export function showNumberJapaneseNumeral(n: number): void {
        basic.clearScreen()
        n = Math.floor(n)
        if (n < 0 || n > 12) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                if ((numJapanese[n][y]).substr(x, 1) == "1") {
                    led.plot(x, y)
                }
            }
        }
    }

    const numFont = [
        ["11", "11", "11", "11", "11"],   //0
        ["01", "01", "01", "01", "01"],   //1
        ["11", "01", "11", "10", "11"],   //2
        ["11", "01", "11", "01", "11"],   //3
        ["10", "10", "11", "01", "01"],   //4
        ["11", "10", "11", "01", "11"],   //5
        ["11", "10", "11", "11", "11"],   //6
        ["11", "01", "01", "01", "01"],   //7
        ["11", "11", "00", "11", "11"],   //8
        ["11", "11", "11", "01", "11"],   //9
        ["00", "00", "11", "00", "00"]    //-
    ]

    /**
     * show number in two digits
     * @param v describe value here, eg: 0
     */
    //% blockId=showNumber2digits block="two digits  %v"
    export function showNumber2digits(v: number): void {
        basic.clearScreen()
        if (v < -9) {
            basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            . # # # .
            # . . . #
            `)
            return
        }
        let n2 = 0
        if (v < 0) {
            n2 = 10
        } else {
            n2 = Math.floor(v % 100 / 10)
        }
        let n1 = Math.abs(Math.floor(v % 10))

        for (let y = 0; y < 5; y++) {
            if (n2 != 0) {
                for (let x = 0; x < 2; x++) {
                    if ((numFont[n2][y]).substr(x, 1) == "1") {
                        led.plot(x, y)
                    }
                }
            }
            for (let z = 3; z < 5; z++) {
                if ((numFont[n1][y]).substr(z - 3, 1) == "1") {
                    led.plot(z, y)
                }
            }
        }
    }


}

