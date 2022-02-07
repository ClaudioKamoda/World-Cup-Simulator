<template>
	<div class="match">
		<div class="match__topText">
			<p>
				<span>{{ matchData.match_time }}</span> -
				<span>{{ matchData.stadium }}</span>
			</p>
		</div>
		<img class="match__flagA" :src="imagePathTeamA" />
		<p class="match__teamA">{{ matchData.team_A }}</p>
		<p class="match__scoreA">#</p>
		<p class="match__cross">x</p>
		<p class="match__scoreB">#</p>
		<p class="match__teamB">{{ matchData.team_B }}</p>
		<img class="match__flagB" :src="imagePathTeamA" />
	</div>
</template>

<script>
export default {
	name: 'Match',
	props: {
		matchData: {}
	},
	computed: {
		imagePathTeamA() {
			return require(`../assets/flags/${this.matchData.team_A}.png`)
		},
		imagePathTeamB() {
			return require(`../assets/flags/${this.matchData.team_B}.png`)
		}
	},
	data() {
		return {}
	}
}
</script>

<style lang="scss" scoped>
.match {
	display: grid;
	grid-template-rows: 25px 40px;
	grid-template-columns: 40px 40px 20px 10px 20px 40px 40px;
	grid-template-areas:
		'. stadium stadium stadium stadium stadium .'
		'flagA teamA scoreA cross scoreB teamB flagB';
	gap: 5px;

	background-color: white;
	border-radius: 8px;
	width: fit-content;
	padding: 5px 15px;
	margin: 10px;
	font-size: 1.125rem;

	&__topText {
		grid-area: stadium;
		place-self: center;
		font-size: 1rem;
	}

	img {
		width: 40px;
	}

	&__flagA {
		grid-area: flagA;
	}

	&__teamA {
		grid-area: teamA;
		place-self: center;
	}

	&__scoreA {
		grid-area: scoreA;
		place-self: center;
	}

	&__cross {
		grid-area: cross;
		place-self: center;
	}

	&__scoreB {
		grid-area: scoreB;
		place-self: center;
	}

	&__teamB {
		grid-area: teamB;
		place-self: center;
	}

	&__flagB {
		grid-area: flagB;
	}
}
</style>
