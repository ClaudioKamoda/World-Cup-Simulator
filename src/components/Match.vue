<template>
  <div class="match">
    <div class="match__topText">
      <p><span>00:00</span> - <span>{{stadiumName}}</span></p>
    </div>
    <div class="match__data">
      <img src="../assets/flags/brazil.png" alt="" />
      <p>{{teamA}}</p>
      <p>#</p>
      <p>x</p>
      <p>#</p>
      <p>{{teamB}}</p>
      <img src="../assets/flags/france.png" alt="" />
    </div>
  </div>
</template>

<script>
export default{
  name: 'Match',
  data(){
    return{
      teamA: 'BRA',
      teamB: 'FRA',
      stadiumName: 'Stadium',
    }
  }
}
</script>

<style lang="scss" scoped>
img{
  width: 50px;
}
.match{
  @include Flexbox(column);
  &__data{
    @include Flexbox();
    gap: 5px;
  }
}
</style>