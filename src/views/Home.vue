<template>
  <b-container>
    <h1>Guten Abend {{ name }}</h1>

    <b-card title="Vorspeise">
      <b-card-text>
        Nibbles mit Kiwi-Dip
      </b-card-text>
      <b-card-text>
        Fritata mit verschiedenem Gemüse
      </b-card-text>
      <b-card-text>
        Garnelencocktails
      </b-card-text>
    </b-card>

    <b-card title="Hauptgang">
      <b-card-text>
        Fish & Chips
      </b-card-text>
      <b-card-text>
        verschiedene Dips (Mushy Peas, Guacamole, Limetten-Mayo)
      </b-card-text>
    </b-card>

    <b-card title="Nachspeise">
      <b-card-text>
        Churros mit Schokoladensoße
      </b-card-text>
      <b-card-text>
        verschiedenes Obst
      </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
  },
}
</script>
