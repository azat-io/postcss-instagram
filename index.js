'use strict';

var postcss = require('postcss');
module.exports = postcss.plugin('postcss-instagram', function () {
  return function (css) {

    // Filter: Kalvin
    var filterKalvin = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        kalvinRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      kalvinRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #555;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      kalvinRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.8179 0.23070000000000002 0.0567 0 0 0.10470000000000002 0.9058 0.050400000000000014 0 0 0.0816 0.1602 0.7393 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.9444000000000004 -0.858 -0.08640000000000002 0 0 -0.25560000000000005 1.3639999999999999 -0.08640000000000002 0 0 -0.25560000000000005 -0.858 2.1136000000000004 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.3" /><feFuncG type="linear" slope="1.3" /><feFuncB type="linear" slope="1.3" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1" intercept="0" /><feFuncG type="linear" slope="1" intercept="0" /><feFuncB type="linear" slope="1" intercept="0" /></feComponentTransfer></filter></svg>#filter\');filter:sepia(0.3) saturate(2.2) brightness(1.3) contrast(1);-webkit-filter:sepia(0.3) saturate(2.2) brightness(1.3) contrast(1)');

      decl.remove();
    };

    // Filter: Amaro
    var filterAmaro = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        amaroRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      amaroRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #222;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');


        amaroRule.append('-webkit-filter:hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5); filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncG type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncB type="linear" slope="0.9" intercept="0.04999999999999999" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.1" /><feFuncG type="linear" slope="1.1" /><feFuncB type="linear" slope="1.1" /></feComponentTransfer><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.3935000000000002 -0.35750000000000004 -0.03599999999999999 0 0 -0.10650000000000001 1.1575 -0.03599999999999999 0 0 -0.10650000000000001 -0.35750000000000004 1.4640000000000002 0 0 0 0 0 1 0" /></filter></svg>#filter\'); -webkit-filter:hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5); filter:hue-rotate(-10deg) contrast(0.9) brightness(1.1) saturate(1.5);');

        decl.remove();
      };

    // Filter: 1977
    var filter1977 = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        a1977Rule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      a1977Rule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #222;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');


      a1977Rule.append('-webkit-filter:sepia(0.5) hue-rotate(-35deg) saturate(1.6) contrast(0.9); filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.6965 0.3845 0.0945 0 0 0.1745 0.8430000000000001 0.084 0 0 0.136 0.267 0.5655 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.4722000000000002 -0.42899999999999994 -0.0432 0 0 -0.1278 1.1869999999999998 -0.0432 0 0 -0.1278 -0.42899999999999994 1.5568000000000002 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncG type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncB type="linear" slope="0.9" intercept="0.04999999999999999" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter:sepia(0.5) hue-rotate(-35deg) saturate(1.6) contrast(0.9); filter:sepia(0.5) hue-rotate(-35deg) saturate(1.6) contrast(0.9);');

        decl.remove();
      };

    // Filter: Brannan
    var filterBrannan = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        brannanRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      brannanRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #222;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      brannanRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.6965 0.3845 0.0945 0 0 0.1745 0.8430000000000001 0.084 0 0 0.136 0.267 0.5655 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.3" intercept="-0.15000000000000002" /><feFuncG type="linear" slope="1.3" intercept="-0.15000000000000002" /><feFuncB type="linear" slope="1.3" intercept="-0.15000000000000002" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter:sepia(0.5) contrast(1.3); filter:sepia(0.5) contrast(1.3);');

        decl.remove();
      };

    // Filter: Earlybird
    var filterEarlybird = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        earlybirdRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      earlybirdRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #222;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      earlybirdRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.7572 0.30760000000000004 0.0756 0 0 0.1396 0.8744000000000001 0.06720000000000001 0 0 0.10880000000000001 0.2136 0.6524 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.6296000000000002 -0.572 -0.0576 0 0 -0.17040000000000002 1.246 -0.0576 0 0 -0.17040000000000002 -0.572 1.7424000000000002 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncG type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncB type="linear" slope="1.1" intercept="-0.050000000000000044" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" /><feFuncG type="linear" slope="0.9" /><feFuncB type="linear" slope="0.9" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter:sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg); filter:sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg);');

        decl.remove();
      };

    // Filter: Toaster
    var filterToaster = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        toasterRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      toasterRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 3em #222;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      toasterRule.append('-webkit-filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67); -filter:sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67);');

        decl.remove();
      };

    // Filter: Inkwell
    var filterInkwell = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        inkwellRule;

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');

      inkwellRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      origRule.append('position:relative;display:inline-block');

      inkwellRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.2" /><feFuncG type="linear" slope="1.2" /><feFuncB type="linear" slope="1.2" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.05" intercept="-0.025000000000000022" /><feFuncG type="linear" slope="1.05" intercept="-0.025000000000000022" /><feFuncB type="linear" slope="1.05" intercept="-0.025000000000000022" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter:grayscale(1) brightness(1.2) contrast(1.05); filter:grayscale(1) brightness(1.2) contrast(1.05);');

        decl.remove();
        };

    // Filter: Lo-Fi
    var filterLoFi = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        lofiRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      lofiRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 7em #000;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      lofiRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.5" intercept="-0.25" /><feFuncG type="linear" slope="1.5" intercept="-0.25" /><feFuncB type="linear" slope="1.5" intercept="-0.25" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" /><feFuncG type="linear" slope="0.9" /><feFuncB type="linear" slope="0.9" /></feComponentTransfer><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.96965 0.038449999999999984 0.009450000000000014 0 0 0.01745000000000002 0.9843000000000001 0.008400000000000019 0 0 0.013600000000000001 0.026700000000000057 0.95655 0 0 0 0 0 1 0" /></filter></svg>#filter\'); filter:contrast(1.5) brightness(0.9) sepia(0.05); -webkit-filter:contrast(1.5) brightness(0.9) sepia(0.05);');

        decl.remove();
      };

    // Filter: Nashville
    var filterNashville = function(decl) {
      var origRule = decl.parent,
        ruleSelectors = origRule.selectors,
        afterRuleSelectors,
        imgRuleSelectors,
        afterRule,
        nashvilleRule;

        afterRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ':after';
        }).join(',\n');

        imgRuleSelectors = ruleSelectors.map(function(ruleSelector){
              return ruleSelector + ' img';
        }).join(',\n');


      afterRule = origRule.cloneBefore({
        selector: afterRuleSelectors
      }).removeAll();

      nashvilleRule = origRule.cloneBefore({
        selector: imgRuleSelectors
      }).removeAll();

      afterRule.append('box-shadow:inset 0 0 100em #00f;opacity:0.5;position:absolute;top:0;right:0;bottom:2px;left:0;z-index:1;content:\'\'');

      origRule.append('position:relative;display:inline-block');

      nashvilleRule.append('filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.7572 0.30760000000000004 0.0756 0 0 0.1396 0.8744000000000001 0.06720000000000001 0 0 0.10880000000000001 0.2136 0.6524 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.3935000000000002 -0.35750000000000004 -0.03599999999999999 0 0 -0.10650000000000001 1.1575 -0.03599999999999999 0 0 -0.10650000000000001 -0.35750000000000004 1.4640000000000002 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncG type="linear" slope="0.9" intercept="0.04999999999999999" /><feFuncB type="linear" slope="0.9" intercept="0.04999999999999999" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.1" /><feFuncG type="linear" slope="1.1" /><feFuncB type="linear" slope="1.1" /></feComponentTransfer></filter></svg>#filter\'); -webkit-filter:sepia(0.4) saturate(1.5) contrast(0.9) brightness(1.1) hue-rotate(-15deg); filter:sepia(0.4) saturate(1.5) contrast(0.9) brightness(1.1) hue-rotate(-15deg);');

        decl.remove();
      };

      css.walkDecls('filter', function(decl) {
        switch (decl.value) {
          case 'kalvin':
            filterKalvin(decl);
            break;
          case 'amaro':
            filterAmaro(decl);
            break;
          case '1977':
            filter1977(decl);
            break;
          case 'brannan':
            filterBrannan(decl);
            break;
          case 'earlybird':
            filterEarlybird(decl);
            break;
          case 'toaster':
            filterToaster(decl);
            break;
          case 'inkwell':
            filterInkwell(decl);
            break;
          case 'lo-fi':
            filterLoFi(decl);
            break;
          case 'nashville':
            filterNashville(decl);
            break;
        }
      });
    };
  });
