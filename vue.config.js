module.exports = {
	css: {
		loaderOptions: {
			scss: {
				additionalData: `
				@import "@/assets/css/variables.scss"; 
				@import "@/assets/css/mixins.scss";
				`
			}
		}
	}
}
