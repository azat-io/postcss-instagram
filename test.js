var test = require('tape');
var postcss = require('postcss');
var plugin = require('./');
var name = require('./package.json').name;

var tests = [{
    message: 'Earlybird filter test',
    fixture: '.test { filter: earlybird }',
    expected: '.test:after { box-shadow: inset 0 0 3em #222; position: absolute; top: 0; right: 0; bottom: 2px; left: 0; z-index: 1; content: \'\' }\n.test img { filter: url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.7572 0.30760000000000004 0.0756 0 0 0.1396 0.8744000000000001 0.06720000000000001 0 0 0.10880000000000001 0.2136 0.6524 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.6296000000000002 -0.572 -0.0576 0 0 -0.17040000000000002 1.246 -0.0576 0 0 -0.17040000000000002 -0.572 1.7424000000000002 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncG type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncB type="linear" slope="1.1" intercept="-0.050000000000000044" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" /><feFuncG type="linear" slope="0.9" /><feFuncB type="linear" slope="0.9" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter: sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg); filter: sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg) }\n.test { position: relative; display: inline-block }'
}];

function process (css, options) {
    return postcss(plugin(options)).process(css).css;
}

test(name, function (t) {
    t.plan(tests.length);

    tests.forEach(function (test) {
        var options = test.options || {};
        t.equal(process(test.fixture, options), test.expected, test.message);
    });
});

test('should use the postcss plugin api', function (t) {
    t.plan(2);
    t.ok(plugin().postcssVersion, 'should be able to access version');
    t.equal(plugin().postcssPlugin, name, 'should be able to access name');
});
