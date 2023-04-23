input.onButtonPressed(Button.A, function () {
    NÚMERO += 1
    basic.showNumber(NÚMERO)
    if (NÚMERO == 9) {
        NÚMERO = 0
        basic.showNumber(NÚMERO)
    }
})
let NÚMERO = 0
NÚMERO = 0
basic.showNumber(NÚMERO)
basic.forever(function () {
	
})
