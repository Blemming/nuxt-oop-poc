export default ({ $axios }) => ({
	get (params) {
		return $axios.get(`/ability/${params.id}`).then(res => res.data);
	}
});
