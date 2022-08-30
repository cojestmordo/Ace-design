<template>
  <div class='grid-container'>
    <div class='foto item' >
      <p>foto</p>
    </div>
    <div class='design item'>
      <p>design</p>
    </div>
    <div class='poster item'>
      <p>poster</p>
    </div>
    <div class='info item'>
      <p>info</p>
    </div>
  </div>
</template>

<script>
  export default{
    name:"FrontPage"
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
.design{
  grid-column: 2/3;
}
.poster{
  grid-column: 1/2;
}
.info{
  grid-column: 2/3;
}

</style>
