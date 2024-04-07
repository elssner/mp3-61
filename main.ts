input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    Titel += -1
    basic.showNumber(Titel)
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    serialmp3.playMp3TrackFromFolder(Titel, Ordner, Mp3Repeat.No)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.setLedColor(0x00ff00)
    Titel += 1
    basic.showNumber(Titel)
})
function _ (Kommentar: string) {
	
}
input.onButtonEvent(Button.A, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.setLedColor(0xff0000)
    Ordner += -1
    basic.showNumber(Ordner)
})
input.onButtonEvent(Button.B, input.buttonEventValue(ButtonEvent.Hold), function () {
    basic.setLedColor(0xff0000)
    Ordner += 1
    basic.showNumber(Ordner)
})
serialmp3.onMp3TrackStarted(function () {
    basic.setLedColor(0x0000ff)
    basic.showNumber(serialmp3.mp3Track())
})
let Titel = 0
let Ordner = 0
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
Ordner = serialmp3.mp3Folder()
Titel = serialmp3.mp3Track()
basic.showNumber(Ordner)
_("elssner/mp3-61")
_("Erweiterung serialmp3 laden")
