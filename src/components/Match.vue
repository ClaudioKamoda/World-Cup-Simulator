<template>
  <div class="match">
    <div class="match__topText">
      <p><span>00:00</span> - <span>{{stadiumName}}</span></p>
    </div>
    <div class="match__data">
      <img class="match__data--flagA" src="../assets/flags/brazil.png"/>
      <p class="match__data--teamA">{{teamA}}</p>
      <p class="match__data--scoreA">#</p>
      <p class="match__data--cross">x</p>
      <p class="match__data--scoreB">#</p>
      <p class="match__data--teamB">{{teamB}}</p>
      <img class="match__data--flagB" src="../assets/flags/france.png"/>
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
.match{
  display: grid;
  grid-template-rows: 25px 40px;
  grid-template-columns: 40px 40px 20px 10px 20px 40px 40px;
  grid-template-areas: 
    ". stadium stadium stadium stadium stadium ."
    "flagA teamA scoreA cross scoreB teamB flagB";
  gap: 5px;

  background-color: white;
  border-radius: 8px;
  width: fit-content;
  padding: 5px 15px;
  font-size: 1.125rem;

  &__topText{
    grid-area: stadium;
    place-self: center;
  }
  
  img{
    width:40px;
  }

  &__data

  &__flagA{
    grid-area: flagA;
  }

  &__teamA{
    grid-area: teamA;
    place-self: center;
  }

  &__scoreA{
    grid-area: scoreA;
    place-self: center;
  }

  &__cross{
    grid-area: cross;
    place-self: center;
  }

  &__scoreB{
    grid-area: scoreB;
    place-self: center;
  }

  &__teamB{
    grid-area: teamB;
    place-self:center;
  }

  &__flagB{
    grid-area: flagB;
  }
}
</style>