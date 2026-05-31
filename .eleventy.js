module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Add date formatting filter
  eleventyConfig.addFilter("dateFormat", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  // Syntax highlight passthrough for code blocks
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
};
