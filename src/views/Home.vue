<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png">
		<HelloWorld message="Welcome to Your Vue.js + TypeScript App" />
		<b-alert variant="success"
			dismissible
			:show="showAlert"
		>
			<span>Dismissible Alert!</span>
		</b-alert>
	</div>
</template>

<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

	@Component({
		components: {
			HelloWorld,
		},
	})
	export default class Home extends Vue {
		private showAlert: boolean = true;

		private toggleAlert() {
			this.showAlert = !this.showAlert;
		}
	}
</script>
