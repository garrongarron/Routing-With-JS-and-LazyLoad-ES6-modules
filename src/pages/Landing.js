import Component from "../../../js/Component.js";
import eventBus from "../basic/EventBus.js";

class Landing extends Component {
    beforeAppendChild() {
        setTimeout(() => {
            document.head.querySelector('title').innerHTML = 'Landing'
        })
        this.done = false
    }
    addEventListener() { return ['click'] }
    doSomething(e) {
        eventBus.dispatch('routing', '/courses.html')
    }
    template({ }) {
        return `<div click="doSomething"> Landing - Click me</div>`
    }
}

//let content = new Landing();
//content.querySelector('.Landing')
export default Landing;