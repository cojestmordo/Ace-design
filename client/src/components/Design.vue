<template>
  <div class='gridbox'>
    <div class='box biuro'>
      <img src='../assets/design/inno.png'>
    </div>
    <div class='box img1'>
      <img src='../assets/design/kidandfox.png'>
    </div>
    <div class='box jzk'>
      <img src='../assets/design/ringo.png'>
    </div>
     <div class='box void'>
      <img src='../assets/design/wizytpwki.png'>
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
transform: scale(1.5);
}
</style>
