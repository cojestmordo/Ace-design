<template>
<div class="box" :class="{activebox: hover }">
  <div
    class="circle"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: hover }">
    <div class="hello">Hello</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloAce',
  props: {
    msg: String
  },
  data(){
    return{
      hover: false,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{
  width:100vw;
  height:100vh;
  display:flex;
}
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
.active {
  color:black;
  background-color:white;
}
.activebox{
  background-color:black;}
</style>
