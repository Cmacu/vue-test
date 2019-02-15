<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/about">About</router-link> |
			<router-link to="/bootstrap">Bootstrap</router-link>
		</div>
		<router-view/>
	</div>
</template>

<style lang="scss">
	@import './styles/custom-bootstrap-variables.scss';
	@import '../node_modules/bootstrap/scss/bootstrap.scss';
	@import './styles/custom-bootstrap-settings.scss';
	@import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

	#app {
		// font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		// text-align: center;
		// color: #2c3e50;
	}

	#nav {
		padding: 30px;
		text-align: center;
		a {
			font-weight: bold;
			color: $primary;
			// &.router-link-exact-active {
			// 	color: #42b983;
			// }
		}
	}
</style>