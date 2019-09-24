
module.exports = function(eleventyConfig) {  
    
    eleventyConfig.addFilter("addZone", require("./filters/zone.js") );
    eleventyConfig.addPassthroughCopy("./src/_includes/css/*.css");

    return {
        dir: {
            input: "src",
            output: "dist"
          },
        addPassthroughCopy: true
    };
  };