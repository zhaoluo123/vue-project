<script>
export default {
  beforeCreate() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: '/' + encodeURI(path), query });
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
