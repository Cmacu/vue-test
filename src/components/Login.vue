<script lang="ts">
	import { Component, Vue } from 'vue-property-decorator';
	import WithRoute from '../interfaces/WithRoute';

	@Component
	export default class Login extends Vue implements WithRoute {
		private hide = true;
		private login = {
			email: '',
			password: '',
		};

		private onSubmit(event: KeyboardEvent) {
			event.preventDefault();
			console.log(this.login);
		}

		private onReset() {
			this.login.email = '';
			this.login.password = '';
		}
	}
</script>

<template>
	<b-modal
		id="login"
		title="Login"
		:hide-footer="true"
		:visible="true"
		:no-close-on-backdrop="true"
		:no-close-on-esc="true"
		:hide-header-close="true"
	>
		<b-form @submit="onSubmit" @reset="onReset">
			<b-form-group id="email" label="Email address" label-for="email" description="Your email address">
				<b-form-input
					id="email"
					v-model="login.email"
					required
					placeholder="Enter email"
					autocomplete="current-email"
				/>
			</b-form-group>
			<b-form-group id="password" label="Password" label-for="password" description="Your password">
				<b-form-input
					type="password"
					id="password"
					v-model="login.password"
					required
					placeholder="Enter password"
					autocomplete="current-password"
				/>
			</b-form-group>
			<b-button type="submit" variant="primary">Submit</b-button>
      		<b-button type="reset" variant="secondary">Reset</b-button>
		</b-form>
	</b-modal>
</template>

<style scoped lang="scss">
	#login {
		max-width: 600px;
		margin: 0px auto;
	}
</style>
