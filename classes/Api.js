export default class Api {
	_logs = [];
	_errors = [];
	constructor (axios) {
		if (Api.exists) {
			return Api.instance;
		}
		Api.exists = true;
		Api.instance = this;
		this.api = axios;
		return this;
	}

	get logs () {
		return this._logs.map(log => `${log.time} - ${log.method}:${log.url}`);
	}

	request (method, url, headers, payload) {
		this._logs.push({ time: new Date(), method, url, headers, payload });
		return this.api({
			method,
			url,
			headers,
			data: payload
		}).then(response => response?.data);
	}

	fetch (url, headers) {
		return this.request('get', url, headers, undefined).catch(e =>
			this._errors.push(e.message)
		);
	}

	post (url, headers, payload) {
		return this.request('post', url, headers, payload).catch(e =>
			this._errors.push(e.message)
		);
	}

	put (url, headers, payload) {
		return this.request('put', url, headers, payload).catch(e =>
			this._errors.push(e.message)
		);
	}

	delete (url, headers, payload) {
		return this.request('delete', url, headers, payload).catch(e =>
			this._errors.push(e.message)
		);
	}
}
