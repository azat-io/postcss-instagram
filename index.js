var postcss = require('postcss');

module.exports = postcss.plugin('postcss-instagram', function () {
    return function (root) {
        console.log(root);
    };
});
