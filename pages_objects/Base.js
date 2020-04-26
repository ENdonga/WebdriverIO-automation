class Base{
    shortPause(){
        browser.pause(500)
    }
    mediumPause(){
        browser.pause(1000)
    }
    longPause(){
        browser.pause(3000)
    }
}
export default Base