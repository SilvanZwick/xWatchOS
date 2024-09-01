function intro () {
    scene.setBackgroundColor(1)
    if (false) {
        game.splash("TODO: Make intro")
    }
}
intro()
scene.setBackgroundImage(assets.image`bg1`)
let Date = textsprite.create(rtcModules.readTimeInFormat(TimeFormat.FORMATYMD))
Date.setPosition(80, 20)
let Time = textsprite.create(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS))
Time.setMaxFontHeight(10)
Time.setPosition(80, 40)
let AMPM = textsprite.create("AM")
AMPM.setMaxFontHeight(10)
AMPM.setPosition(80, 57)
game.onUpdateInterval(200, function () {
    Date.setText("" + rtcModules.readTimeInFormat(TimeFormat.FORMATYMD).substr(5, 2) + "/" + rtcModules.readTimeInFormat(TimeFormat.FORMATYMD).substr(8, 2) + "/" + rtcModules.readTimeInFormat(TimeFormat.FORMATYMD).substr(0, 4))
    if (parseFloat(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2)) > 12) {
        if (parseFloat(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2)) - 12 < 10) {
            Time.setText("0" + convertToText(parseFloat(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2)) - 12) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(3, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(6, 2))
        } else {
            Time.setText("" + convertToText(parseFloat(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2)) - 12) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(3, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(6, 2))
        }
        AMPM.setText("PM")
    } else {
        if (parseFloat(rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2)) < 10) {
            Time.setText("0" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(3, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(6, 2))
        } else {
            Time.setText("" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(0, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(3, 2) + ":" + rtcModules.readTimeInFormat(TimeFormat.FORMATHMS).substr(6, 2))
        }
        AMPM.setText("AM")
    }
})
