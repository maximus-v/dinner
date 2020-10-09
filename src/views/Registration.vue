<template>
  <b-container>
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

      <b-button type="submit" variant="primary">Bestätigen</b-button>
    </b-form>
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
