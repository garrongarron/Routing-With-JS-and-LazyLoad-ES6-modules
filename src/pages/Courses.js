import Component from "../../../js/Component.js";
import eventBus from "../basic/EventBus.js";

class Courses extends Component {
    beforeAppendChild() {
        document.head.querySelector('title').innerHTML = 'Courses'
        this.done = false
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        eventBus.dispatch('routing', '/contact.html')
    }
    template({ }) {
        return `<div click="doSomething"> Courses - Click me</div>`
    }
}

//let content = new Courses();
//content.querySelector('.Courses')
export default Courses;