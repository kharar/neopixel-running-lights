function NeoPixelUpdate () {
    for (let index = 0; index <= leds - 1; index++) {
        strip.setPixelColor(index, neopixel.hsl(310, 100, list[index]))
        list[index] = Math.constrain(list[index] * fade, 0, 255)
    }
    strip.show()
}
let fade = 0
let list: number[] = []
let strip: neopixel.Strip = null
let leds = 0
leds = 26
strip = neopixel.create(DigitalPin.P8, leds, NeoPixelMode.RGB)
list = [leds - 1]
let brightness = 24
fade = 0.7
basic.forever(function () {
    for (let index2 = 0; index2 <= leds - 1; index2++) {
        let pause2 = 0
        list[index2] = brightness
        NeoPixelUpdate()
        basic.pause(pause2)
    }
})
