const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {

  // Watch CSS files for changes
  eleventyConfig.setBrowserSyncConfig({
		files: './build/_assets/css/**/*.css'
	});
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("src/_assets/");
	
  return {
    dir: {
      input: './src',
      output: './build'
    }
  };
};
