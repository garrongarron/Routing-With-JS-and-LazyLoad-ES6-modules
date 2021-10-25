import cache from "./Cache.js"
import eventBus from "./EventBus.js"
import routes from "../pages/routes.js"

class Routing {
    constructor() {
        eventBus.subscribe('routing', this.goto)
        this.prev = null
        this.cache = {}
    }
    closePage = (component) => {
        cache.appendChild(component.node)
    }
    goto = (route) => {
        if (this.prev) this.closePage(this.prev)
        if (routes[route] instanceof Promise) {
            routes[route].then(Module => {
                this.cache[route] = new Module()
                this.redirect(route)
            })
        }
    }
    redirect = (route) => {
        let node = this.cache[route].exec()
        history.pushState({ page: route }, null, route)
        document.body.appendChild(node)
        this.prev = this.cache[route]
    }
    restore = (route) => {
        if (this.prev) this.closePage(this.prev)
        let node = this.cache[route].exec()
        document.body.appendChild(node)
        this.prev = this.cache[route]
    }
    start() {
        this.goto(location.pathname)
        window.addEventListener('popstate', this.onpopstate)
    }
    onpopstate = (e) => {
        if (!e.state) return
        this.restore(e.state.page)
    }
}



export default Routing