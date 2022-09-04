<template>
  <div class='gridbox'>
    <div class='box biuro'>
      <img src='../assets/foto/biuro.png'>
    </div>
    <div class='box img1'>
      <img src='../assets/foto/img1.png'>
    </div>
    <div class='box jzk'>
      <img src='../assets/foto/jzk.png'>
    </div>
     <div class='box void'>
      <img src='../assets/foto/void.png'>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FotoPage'
}
</script>

<style scoped>
.gridbox{
  width:100vw;
  height:100vh;
  gap:2%;
  display:grid;
  align-content: space-evenly;
  align-items: center;
  justify-content: space-evenly;
  justify-items:center;
}
.box{
  width:30%;
}
.box img{
  width:100%;
  height:auto;
}
.biuro{
grid-column:1/2;
}
.img1{
  grid-column:2/3
}
.jzk{
  grid-column:1/2;
}
.void{
  grid-column:2/3
}
.box:hover{
transform: scale(2);
}
</style>
