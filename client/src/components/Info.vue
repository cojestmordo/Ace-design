<template>
  <div>
    Siemano :D !
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

