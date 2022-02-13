<template>
	<table class="groupTable">
		<tr>
			<th class="groupName">{{ group.name }}</th>
			<th>P<span class="tooltip">Points</span></th>
			<th>MP<span class="tooltip">Matches Played</span></th>
			<th>W<span class="tooltip">Wins</span></th>
			<th>D<span class="tooltip">Draws</span></th>
			<th>L<span class="tooltip">Losses</span></th>
			<th>GF<span class="tooltip">Goals Forward</span></th>
			<th>GA<span class="tooltip">Goals Against</span></th>
			<th>GD<span class="tooltip">Goal Difference</span></th>
		</tr>
		<tr v-for="(team, index) in group.teams" :key="index">
			<td :class="{teamName: true, lastIndex: index == 3}">
				<p class="index">{{ index + 1 }}</p>
				<img :src="imagePath(team.team_short)" alt="team flag" />
				<p>{{ team.team_name }}</p>
			</td>
			<td>{{ team.points }}</td>
			<td>{{ team.matches_played }}</td>
			<td>{{ team.wins }}</td>
			<td>{{ team.draws }}</td>
			<td>{{ team.losses }}</td>
			<td>{{ team.goals_forward }}</td>
			<td>{{ team.goals_against }}</td>
			<td>{{ team.goal_difference }}</td>
		</tr>
	</table>
</template>

<script>
export default {
	name: 'Group',
	computed: {
		selectedGroup() {
			return this.$store.state.selectedGroup
		}
	},
	created() {
		this.getGroupData()
	},
	data() {
		return {
			group: {}
		}
	},
	methods: {
		getGroupData() {
			this.group = this.$store.state.groupsDataObject[this.selectedGroup]
		},
		imagePath(name) {
			return require(`../assets/flags/${name}.png`)
		},
		altText(name) {
			return `${name} flag`
		}
	},
	watch: {
		selectedGroup() {
			this.getGroupData()
		}
	}
}
</script>

<style lang="scss" scoped>
table, th, td{
	border: 1px solid #ddd;
	background-color: white;
}

table{
	border-collapse: collapse;
}

td{
	text-align: center;
	width: 30px;
}

.groupName{
	text-align: left;
	width: 200px;
	padding-left:5px;
}

.teamName{
	display: grid;
	grid-template-columns: 20px 50px calc(100% - 70px);
	width: 200px;
	height: 60px;

	//grid is also a table, so we have to reset the border
	border: none;
	border-bottom: 1px solid #ddd;

	img{
		width: 40px;
		align-self: center;
		justify-self: center;
	}

	p{
		padding: 5px;
		align-self: center;
		justify-self: start;
	}

	.index{
		justify-self: center;
	}

	&.lastIndex{
		//another consequence of grid border
		border:none;
	}
}

th{
	position: relative;

	.tooltip{
		visibility: hidden;
		width: 100px;
		color: white;
		background-color: black;
		border-radius: 8px;
		padding: 5px 10px;

		position: absolute;
		z-index: 1;
		bottom: 120%;
		right: -35px;

		&::after{
			content: " ";
			position: absolute;
			top: 100%; 
			left: 50%;
			margin-left: -5px;
			border-width: 5px;
			border-style: solid;
			border-color: black transparent transparent transparent;
		}
	}

	&:hover{
		.tooltip{
			visibility: visible;
		}
	}
}
</style>
