<template>
  <div class="circle">
    <div class="hello">Hello</div>
  </div>
</template>

<script>
export default {
  name: 'HelloAce',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.circle{
  margin:auto;
  display:flex;
  height:90vh;
  width:90vh;
  background-color:black;
  border-radius:100%;
  color:white;
}
.hello{
  margin:auto;
  display:flex;
  align-items:center;
  font-size:30vh;
}
</style>
