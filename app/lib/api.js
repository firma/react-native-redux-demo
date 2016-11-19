class Api {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            //'dataType': 'json',
        }
    }

    static get(route) {
        return this.xhr(route, null, 'GET');
    }

    static put(route, params) {
        return this.xhr(route, params, 'PUT')
    }

    static post(route, params) {
        return this.xhr(route, params, 'POST')
    }

    static delete(route, params) {
        return this.xhr(route, params, 'DELETE')
    }

    static xhr(route, params, verb) {
        const host = 'https://www.keyed.cn/'
        const url = `${host}${route}`
        let options = Object.assign({ method: verb }, params ? { body: (verb == 'POST') ? params : JSON.stringify(params) } : null);
        options.headers = Api.headers()

        return fetch(url, options).then(response => {
            let json = response.json()
            if (response.ok) {
                return json
            }

            return json.then(err => {throw err});
        }).then(json => json);
    }
}
export default Api;
