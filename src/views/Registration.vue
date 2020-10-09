<template>
  <b-container>
    <b-row class="w-100 mx-auto text-center h-100">

      <b-col cols="12" class="mt-4 mb-2">
        <div>
          <h1>Gästeregistrierung</h1>
          <p>Auf Grund der aktuellen Corona-Lage musst du dich registrieren,
            damit im Zweifel das Gesundheitsamt Infektionsketten nachvollziehen
            kann (oder der Staat dich überwachen kann).</p>
        </div>
      </b-col>

      <b-col cols="12" class="my-2 text-left">
        <b-form @submit="onSubmit">
          <b-form-group id="name-group" label="Name" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              required
              placeholder="Gib deinen Namen ein"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="sign-group" label="Sternzeichen:" label-for="sign">
            <b-form-select
              id="sign"
              v-model="form.sign"
              :options="signs"
              required
            ></b-form-select>
          </b-form-group>

          <b-button type="submit" variant="light" class="mt-4">Bestätigen</b-button>
        </b-form>
      </b-col>

    </b-row>

  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        sign: null,
      },
      signs: [
        { text: 'Wähle eins aus', value: null },
        'Wassermann',
        'Fische',
        'Widder',
        'Stier',
        'Zwillinge',
        'Krebs',
        'Löwe',
        'Jungfrau',
        'Waage',
        'Skorpion',
        'Schütze',
        'Steinbock'
      ]
    }
  },
  mounted () {
    if (localStorage.name) {
      this.form.name = localStorage.name;
    }
    if (localStorage.sign) {
      this.form.sign = localStorage.sign;
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      localStorage.name = this.form.name
      localStorage.sign = this.form.sign
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
