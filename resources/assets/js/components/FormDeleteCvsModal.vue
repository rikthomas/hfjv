<template>
<div class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Whoa there Nelly!</p>
    </header>
    <section class="modal-card-body">
      If you click OK you will erase all of the data from the CVS section? Are you sure you want to do that?
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success" @click="ok">OK then!</button>
      <button class="button is-danger" @click="close">Belay that order!</button>
    </footer>
  </div>
</div>
</template>

<script>

	export default {

		methods: {
			close () {
				Event.$emit('closeCvsModal');
			},
			ok () {
				Event.$emit('deleteCvsData');
			}
		}

	}


</script>