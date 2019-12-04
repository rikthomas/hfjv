<template>
<div class="modal" :class="{'is-active': showDateModal}">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Retrospective Entry?</p>
    </header>
    <section class="modal-card-body">
        <p>Select a new date</p>
        <input class="input" v-model="newDate" type="date">
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="ok">That's the one!</button>
      <button class="button is-danger" @click="close">Not what I meant....</button>
    </footer>
  </div>
</div>
</template>

<script>

	export default {

        data() {
			return {
                showDateModal: false,
                newDate: ''
			}
        },
        
        created() {
            Event.$on('showDateModal', () => this.showDateModal = true)
        },
        
        methods: {
			close () {
                this.showDateModal = false
                this.newDate = ''
			},
			ok () {
				Event.$emit('updateDate', this.newDate);
			}
		}

	}


</script>