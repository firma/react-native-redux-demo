import { Configure } from '../configure/config'
class NetWork {
    static headers() {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json',
        }
    }

    static get(route) {
        const  data = this.xhr(route, null, 'GET');
        console.log(data)
        return data;
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
        const host = Configure.ApiHost;
        const url = `${host}${route}`
        console.log(url)
        let options = Object.assign({ method: verb }, params ? { body: JSON.stringify(params) } : null);
        options.headers = NetWork.headers()
        return fetch(url, options)
            .then(resp => {
                let json = resp.json();
                if (resp.ok) {

                    return json
                }
                return json.then(err => {throw err});
            });
            //.then(json => json.results);
        return data;
    }
}

export default NetWork;
