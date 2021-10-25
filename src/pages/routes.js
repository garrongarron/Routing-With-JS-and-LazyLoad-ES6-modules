
let lazy = async (filename) => {
    let module = await import(`../pages/${filename}`)
    return module.default
}

let routes = {
    get '/index.html'(){ return lazy('Landing.js')},
    get '/courses.html'(){ return lazy('Courses.js')},
    get '/contact.html'(){ return lazy('Contact.js')},
};

export default routes;