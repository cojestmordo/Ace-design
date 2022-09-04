<template>
  <div class='grid-container' :class='{ active: hover }' >
    <a href='#/foto' class='foto item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>foto</p>
    </a>
     <a href='#/design' class='design item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>design</p>
    </a>
     <a href='#/logo' class='poster item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>logo</p>
    </a>
     <a href='#/info' class='info item' @mouseover='hover = true' @mouseleave='hover = false'>
      <p>info</p>
    </a>
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
.item:hover{
  background-color:white;
  color:black
}
.foto{
  grid-column: 1/2;
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
a:visited, a:link{
  text-decoration: none;
}

</style>
