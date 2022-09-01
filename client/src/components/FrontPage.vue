<template>
  <div class='grid-container' :class='{ active: hover }' >
     <div class='foto item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>foto</p>
    </div>
     <div class='design item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>design</p>
    </div>
     <div class='poster item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>poster</p>
    </div>
     <div class='info item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>info</p>
    </div>
  </div>
</template>

<script>
  export default{
    name:"FrontPage",
     data(){
      return{
        hover: false, 
      }
    }
  }
</script>

<style scoped>
.item{
  width:25vw;
  height:30vh;
  color:white;
  background-color:black;
  display:flex;
}
.item p{
  font-size:10vh;
  margin:auto;
  text-align:center;
  vertical-align: middle;
}
.grid-container{
  background-color:white;
  width:100vw;
  height:100vh;
  gap:2%;
  display:grid;
  align-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
  justify-items:center;
}
.foto{
  grid-column: 1/2;
}
.foto:hover{
background-color:white;
color:black
}
.design:hover{
background-color:white;
color:black
}
.poster:hover{
background-color:white;
color:black
}
.info:hover{
background-color:white;
color:black
}
.design{
  grid-column: 2/3;
}
.poster{
  grid-column: 1/2;
}
.info{
  grid-column: 2/3;
}
.active{
background-color:black;
}

</style>
