function intro () {
    scene.setBackgroundColor(15)
    IntroText1 = textsprite.create("xWatchOS")
    IntroText1.setMaxFontHeight(10)
    IntroText1.setPosition(80, 20)
    IntroText2 = textsprite.create("v0.1-prerealease")
    IntroText2.setPosition(80, 115)
    IntroText3 = textsprite.create("by TheZwick32")
    IntroText3.setPosition(80, 40)
    pause(2000)
    IntroText3.setText("")
    IntroText4 = textsprite.create(" by SilvanZwick,")
    IntroText4.setPosition(80, 40)
    IntroText4.setIcon(assets.image`github-logo-small-white`)
    IntroText5 = textsprite.create(" @Silvan_Zwick,")
    IntroText5.setPosition(80, 60)
    IntroText5.setIcon(assets.image`scratch-small-white`)
    IntroText6 = textsprite.create(" and @TheZwick32.")
    IntroText6.setPosition(80, 80)
    IntroText6.setIcon(assets.image`other-small-white`)
    pause(3000)
    IntroText3.destroy()
    IntroText4.destroy()
    IntroText5.destroy()
    IntroText6.destroy()
    IntroText7 = textsprite.create("Time since 1997")
    IntroText7.setPosition(80, 40)
    pause(3000)
    IntroText1.destroy()
    IntroText2.destroy()
    IntroText7.destroy()
}
let IntroText7: TextSprite = null
let IntroText6: TextSprite = null
let IntroText5: TextSprite = null
let IntroText4: TextSprite = null
let IntroText3: TextSprite = null
let IntroText2: TextSprite = null
let IntroText1: TextSprite = null
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
