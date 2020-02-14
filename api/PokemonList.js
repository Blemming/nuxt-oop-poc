export default ({ $axios }) => ({
	get (params) {
		return $axios.get('/pokemon?limit=151').then(res => res.data);
	}
});
