<template>
<div>
  <h1 class="head">Questions You have Asked</h1>
  <div v-for="ticket in tickets" v-bind:key="ticket.id">
    <hr>
    <div class="ticket">
      <div class="problem">
        <p>{{ticket.problem}}</p>
        <p><i>-- {{ticket.name}}</i></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'questions',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}
</script>

<style scoped>

.head{
  text-align: center;
  font-family: georgia;
}

</style>
