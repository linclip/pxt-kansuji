# pxt-kansuji

This is Japanese numeral (kansuji: 漢数字) font for the micro:bit.

## Usage

## Code Example

### kansuji (0 to 12)
```blocks
input.onButtonPressed(Button.A, () => {
    kansuji.showNumber(0)
})
input.onButtonPressed(Button.B, () => {
    twodigit.showNumber(12)
})
```
### Day of th Week (0 to 6)

```blocks
input.onButtonPressed(Button.A, () => {
    kansuji.showNumberDayOfTheWeek(0)
})
input.onButtonPressed(Button.B, () => {
    twodigit.showNumberDayOfTheWeek(6)
})
```

### Dice (1 to 6)

```blocks
input.onButtonPressed(Button.A, () => {
    kansuji.showNumberDice(1)
})
input.onButtonPressed(Button.B, () => {
    twodigit.showNumberDice(6)
})
```

### 2 digits (-9 to 99)

```blocks
input.onButtonPressed(Button.A, () => {
    kansuji.showNumber2digits(37)
})
input.onButtonPressed(Button.B, () => {
    kansuji.showNumber2digits(-9)
})
```

## License

MIT

## Supported targets

* for PXT/microbit
