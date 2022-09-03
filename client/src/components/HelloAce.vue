<template>
<div class="box" :class="{activebox: hover }">
  <div
    class="circle"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: hover }">
    <a href="#/frontpage" class="hello">Hello</a>
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
  text-decoration:none;
}
a:link,a:visited, a:active {
color:white;
text-decoration:none
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
  color:white;
  background-color:black;
}
.active a:link, a:hover , a:active{
color:black;
}
.active > a:visited{
color:black;
text-decoration:none;
}
</style>
