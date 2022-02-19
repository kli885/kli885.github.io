/**
 * @name Mine
 * @version 0.0.1
 * @description Change CSS
 * @author PlutoMonkey
 *  
 */

module.exports = class Mine {
    load() {

    };
    start() {
        var elements = document.getElementsByClassName("layout-1LjVue")
        var elementClicked = function (event) {
            // console.log(event.currentTarget.parentNode)
            try {
                if (event.currentTarget.parentNode.getAttribute("aria-label").includes("direct")) {
                    console.log(document.querySelector(".guilds-2JjMmN + :nth-child(2)"))
                }
            } catch (err) {
                console.log(err)
            }
        }
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('click', elementClicked, false);
        }
    };
    stop() { }
}