// Initializes the page router.
const router = new Router()

// Registers routes.
router.addRoute("/", loadHome)
router.addRoute("/about", loadAbout)
router.addRoute("/projects", loadProjects)
router.addRoute("/services", loadServices)
router.addRoute("/contact", loadContact)

// Listens on hash change.
window.addEventListener("hashchange", () => {
    router.loadPage()
})

// Listens on page load.
window.addEventListener("load", () => {
    router.loadPage()
})