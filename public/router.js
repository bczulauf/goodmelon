const patternCache = {}

class Router {
    constructor (routes) {
        this.routes = routes || []
    }

    addRoute (url, dispatch) {
        this.routes.push({ url: url, dispatch: dispatch })
    }

    loadPage () {
        const url = window.location.hash.slice(1) || "/"
        const splitUrl = url.split("?")
        const path = splitUrl[0]
        const queryStr = splitUrl[1]

        // Parses the query.
        const query = queryStr && queryStr.split("&").map(function(n){return n=n.split("="),this[n[0]]=n[1],this;}.bind({}))[0]
        
        for (var i = 0; i < this.routes.length; i++) {
            // Looks up route.
            const route = this.routes[i]
            const match = this.matchUrl(route.url, path)
            
            if (match) {
                route.dispatch({ params: match, query: query })
            }
        }
    }
    
    matchUrl(pattern, url) {
        const compiledPattern = this.compilePattern(pattern)
        const { regexString, params } = compiledPattern
        const match = url.match(new RegExp(regexString, 'i'))
        if (!match) {
            return null
        }

        return params.reduce((result, param, index) => {
            result[param] = match[index+1]
            return result
        }, {})
    }
    
    compilePattern(pattern) {
        let compiled = patternCache[pattern];
        if (!compiled) {
            compiled = this._compilePattern(pattern);
            patternCache[pattern] = compiled;
        }
        return compiled
    }
    
    _compilePattern(pattern) {
        const params = []
        const regexParts = []

        pattern
            .split('/')
            .filter((s) => !!s)
            .forEach((segment) => {
                // It is a parameter
                if (segment.indexOf(":") === 0 && segment.length > 1) {
                    params.push(segment.slice(1))
                    regexParts.push("([^/]+)")
                } else {
                    regexParts.push(segment)
                }
            })

        if (regexParts.length === 0) {
            regexParts.push("")
        }
        regexParts.push("?")

        return {
            regexString: regexParts.join('/'),
            params
        }
    }
}