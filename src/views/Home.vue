<template>
  <b-row class="w-100 mx-auto text-center h-100">

    <b-col cols="12" class="mt-4 mb-2">
      <div>
        <h1>Guten Abend {{ name }}</h1>
        <p>Folgendes Menü erwartet dich heute Abend. <br>Ich hoffe du hast Spaß.</p>
      </div>
    </b-col>

    <b-col cols="12" class="my-2">
      <b-card title="Vorspeise">
        <b-card-text>
          Nibbles mit Kiwi-Dip
        </b-card-text>
        <b-card-text>
          Fritata mit verschiedenem Gemüse
        </b-card-text>
      </b-card>
    </b-col>

    <b-col cols="12" class="my-2">
      <b-card title="Hauptgang">
        <b-card-text>
          Fish & Chips
        </b-card-text>
        <b-card-text>
          verschiedene Dips (Mushy Peas, Guacamole, Limetten-Mayo)
        </b-card-text>
      </b-card>
    </b-col>

    <b-col cols="12" class="my-2">
      <b-card title="Nachspeise">
        <b-card-text>
          Churros mit Schokoladensoße
        </b-card-text>
        <b-card-text>
          verschiedenes Obst
        </b-card-text>
      </b-card>
    </b-col>

  </b-row>
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
