let 모드 = 0
let DC모터 = 0
input.onButtonPressed(Button.A, function () {
    if (모드 == 0) {
        DC모터 = 300
        모드 = 1
    } else {
        DC모터 = 0
        모드 = 0
    }
    basic.showNumber(모드)
})
input.onButtonPressed(Button.B, function () {
    if (모드 == 1) {
        DC모터 += 300
        if (DC모터 == 1000) {
            DC모터 += 300
        }
    }
    if (DC모터 == 300) {
        led.unplot(4, 2)
        led.plot(4, 4)
    } else if (DC모터 == 600) {
        led.unplot(4, 3)
        led.plot(4, 4)
    } else if (DC모터 == 900) {
        led.unplot(4, 3)
        led.plot(4, 2)
    }
})
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P16, DC모터)
})
