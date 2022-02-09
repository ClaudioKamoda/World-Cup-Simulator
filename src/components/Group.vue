<template>
	<table>
		<tr>
			<th>Group A</th>
			<th>P</th>
			<th>MP</th>
			<th>W</th>
			<th>D</th>
			<th>L</th>
			<th>GF</th>
			<th>GA</th>
			<th>GD</th>
		</tr>
		<tr>
			<td>
				<p>1</p>
				<img src="" alt="" />
				<p>Nome</p>
			</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
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
	data() {
		return {
			group: []
		}
	},
	methods: {
		getGroupData() {
			//get data here
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
