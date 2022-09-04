<template>
  <div class='gridbox'>
    <div class='box inno'>
      <img src='../assets/logo/inno.png'>
    </div>
    <div class='box ace'>
      <img src='../assets/logo/ace.png'>
    </div>
    <div class='box drope'>
      <img src='../assets/logo/drope.png'>
    </div>
    <div class='box krutul'>
      <img src='../assets/logo/krutul.png'>
    </div>
    <div class='box mandala'>
      <img src='../assets/logo/mandala.png'>
    </div>
    <div class='box risset'>
      <img src='../assets/logo/risset.png'>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LogoPage'
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
.inno{
grid-column:1/2;
}
.ace{
  grid-column:2/3
}
.drope{
  grid-column:3/4;
}
.krutul{
  grid-column:1/2;
}
.mandala{
  grid-column:2/3
}
.risset{
  grid-column:3/4
}
.box:hover{
transform: scale(2);
}
</style>
