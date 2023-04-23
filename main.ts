input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        NÚMERO += 1
        basic.showNumber(NÚMERO)
        basic.pause(500)
    }
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(2000)
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
})
let NÚMERO = 0
NÚMERO = 0
basic.showNumber(NÚMERO)
basic.forever(function () {
	
})
