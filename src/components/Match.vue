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
		<p class="match__scoreA" v-if="!isEditing">{{ scoreA }}</p>
		<form class="match__scoreA" v-if="isEditing">
			<input type="text" v-model="scoreA" maxlength="2" />
		</form>
		<p class="match__cross">x</p>
		<p class="match__scoreB" v-if="!isEditing">{{ scoreB }}</p>
		<form class="match__scoreB" v-if="isEditing">
			<input type="text" v-model="scoreB" maxlength="2" />
		</form>
		<p class="match__teamB">{{ matchData.team_B }}</p>
		<img class="match__flagB" :src="imagePathTeamB" />
		<div class="edit" @click="toggleEdit" :class="editButtonClass">
			<div v-html="editIcon" v-if="!isEditing"></div>
			<div v-html="closeIcon" v-if="isEditing"></div>
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons'

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
		},
		editIcon() {
			return feather.icons['edit-3'].toSvg({
				width: '16px',
				height: '16px'
			})
		},
		closeIcon() {
			return feather.icons.check.toSvg({
				width: '16px',
				height: '16px'
			})
		},
		editButtonClass() {
			return this.isEditing ? 'bg-green' : ''
		}
	},
	data() {
		return {
			isEditing: false,
			scoreA: this.matchData.score_A,
			scoreHolderA: this.matchData.score_A,
			scoreB: this.matchData.score_B,
			scoreHolderB: this.matchData.score_B
		}
	},
	methods: {
		toggleEdit() {
			this.isEditing = !this.isEditing

			if (this.scoreA == '') this.scoreA = this.scoreHolderA
			if (this.scoreB == '') this.scoreB = this.scoreHolderB

			this.scoreHolderA = this.scoreA
			this.scoreHolderB = this.scoreB
		}
	}
}
</script>

<style lang="scss" scoped>
.match {
	display: grid;
	grid-template-rows: 25px 40px;
	grid-template-columns: 40px 40px 30px 10px 30px 40px 40px;
	grid-template-areas:
		'stadium stadium stadium stadium stadium stadium stadium'
		'flagA teamA scoreA cross scoreB teamB flagB';
	column-gap: 5px;

	background-color: white;
	border-radius: 8px;
	width: fit-content;
	padding: 5px 15px;
	//margin: 10px;
	font-size: 1.125rem;

	position: relative;

	form {
		input[type='text'] {
			width: 30px;
			font-size: 1.125rem;
			text-align: center;
		}
	}

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

	.edit {
		position: absolute;
		right: -15px;
		top: 0;
		background-color: $blue;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		transition: top 0.3s ease-in;
		@include Flexbox();

		&:hover {
			top: -5px;
		}

		&.bg-green {
			background-color: $green;
		}
	}
}
</style>
