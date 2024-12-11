const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@tools': path.resolve("F:/work/development/projects/PET/clocker/src/styles/tools"),
      '@components': path.resolve("F:/work/development/projects/PET/clocker/src/components"),
    };
    // Настройка для обработки SCSS
    const scssRule = config.module.rules.find((rule) =>
      rule.test && rule.test.toString().includes('scss|sass')
    );

    if (scssRule) {
      scssRule.use.forEach((loader) => {
        if (
          loader.loader &&
          loader.loader.includes('sass-loader') &&
          loader.options
        ) {
          loader.options.sassOptions = {
            includePaths: [path.resolve(__dirname, 'src')],
          };
        }
      });
    }

    return config;
  },
};