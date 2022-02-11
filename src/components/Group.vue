<template>
	<table>
		<tr>
			<th>{{ group.name }}</th>
			<th>P</th>
			<th>MP</th>
			<th>W</th>
			<th>D</th>
			<th>L</th>
			<th>GF</th>
			<th>GA</th>
			<th>GD</th>
		</tr>
		<tr v-for="(team, index) in group.teams" :key="index">
			<td>
				<p>{{ index + 1 }}</p>
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

<style lang="scss" scoped></style>
