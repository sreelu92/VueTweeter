<template>
  <div>
    <h4>{{likesCount}}</h4>
  </div>
</template>

<script>

export default {
  name: "viewcomments-page",
  computed: {
    likesCount() {
      return this.$store.state.num
    }
  },
  
  
 
};
</script>

<style lang="scss" scoped>
</style>