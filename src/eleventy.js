/*
    npx @11ty/eleventy --output="../"
*/

module.exports = function (eleventyConfig) {
    eleventyConfig.setTemplateFormats(["liquid"])

    // copy these directories as is
    eleventyConfig.addPassthroughCopy({ img: "./img" })
    eleventyConfig.addPassthroughCopy({ fonts: "./fonts" })
    eleventyConfig.addPassthroughCopy({ css: "./css" })
    eleventyConfig.addPassthroughCopy({ scripts: "./scripts" })

    return {
        dir: {
            input: ".",
            output: "../",
        },
    }
}
