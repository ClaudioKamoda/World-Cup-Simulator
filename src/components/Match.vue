<template>
  <div class="match">
    <div class="match__topText">
      <p><span>00:00</span> - <span>{{stadiumName}}</span></p>
    </div>
    <img class="match__flagA" src="../assets/flags/brazil.png"/>
    <p class="match__teamA">{{teamA}}</p>
    <p class="match__scoreA">#</p>
    <p class="match__cross">x</p>
    <p class="match__scoreB">#</p>
    <p class="match__teamB">{{teamB}}</p>
    <img class="match__flagB" src="../assets/flags/france.png"/>
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
.match{
  display: grid;
  grid-template-rows: 25px 40px;
  grid-template-columns: 40px 40px 20px 10px 20px 40px 40px;
  grid-template-areas: 
    ". stadium stadium stadium stadium stadium ."
    "flagA teamA scoreA cross scoreB teamB flagB";
  gap: 5px;

  &__topText{
    grid-area: stadium;
  }
  
  img{
    width:40px;
  }

  &__flagA{
    grid-area: flagA;
  }

  &__teamA{
    grid-area: teamA;
  }

  &__scoreA{
    grid-area: scoreA;
  }

  &__cross{
    grid-area: cross;
  }

  &__scoreB{
    grid-area: scoreB;
  }

  &__teamB{
    grid-area: teamB;
  }

  &__flagB{
    grid-area: flagB;
  }
}
</style>