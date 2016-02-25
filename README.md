# postcss-instagram


<img align="right" width="130" height="130" title="PostCSS" src="http://postcss.github.io/postcss/logo.svg">

[![Build Status](https://travis-ci.org/azat-io/postcss-instagram.svg?branch=master)][ci] [![NPM version](https://badge.fury.io/js/postcss-instagram.svg)][npm] [![Dependency Status](https://gemnasium.com/azat-io/postcss-instagram.svg)][deps]

This is a PostCSS plugin for adding Instagram filters to your photos.

## Install

With [npm](https://npmjs.org/package/postcss-instagram) do:

```
npm install postcss-instagram --save
```

## Example

### Input

```html
<div class="boo">
  <img src="..." alt="">
</div>
```

```css
.boo {
  filter: earlybird;
}
```

### Output

```css
.boo:after {
  box-shadow:inset 0 0 3em #222;
  position:absolute;
  top:0;
  right:0;
  bottom:2px;
  left:0;
  z-index:1;
  content:'';
}

.boo img{
  filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.7572 0.30760000000000004 0.0756 0 0 0.1396 0.8744000000000001 0.06720000000000001 0 0 0.10880000000000001 0.2136 0.6524 0 0 0 0 0 1 0" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="1.6296000000000002 -0.572 -0.0576 0 0 -0.17040000000000002 1.246 -0.0576 0 0 -0.17040000000000002 -0.572 1.7424000000000002 0 0 0 0 0 1 0" /><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncG type="linear" slope="1.1" intercept="-0.050000000000000044" /><feFuncB type="linear" slope="1.1" intercept="-0.050000000000000044" /></feComponentTransfer><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="0.9" /><feFuncG type="linear" slope="0.9" /><feFuncB type="linear" slope="0.9" /></feComponentTransfer></filter></svg>#filter');
  -webkit-filter:sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg);
  filter:sepia(0.4) saturate(1.8) contrast(1.1) brightness(0.9) hue-rotate(-20deg);
}

.boo {
  position:relative;
  display:inline-block;
}
```

### Filters

Here is a full list of plugin filters:
* 1977
* amaro
* brannan
* earlybird
* inkwell
* kalvin
* lo-fi
* nashville
* toaster

You can look filter examples [here](https://github.com/azat-io/postcss-instagram/blob/master/LIST.md).

## Contributing

Pull requests are welcome.

## Author

Azat S.

<a href="https://github.com/azat-io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/github.png" style="float:right">
</a>
<a href="https://twitter.com/azat_io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/twitter.png" style="float:right">
</a>
<a href="https://www.facebook.com/azats.io">
  <img src="https://raw.githubusercontent.com/azat-io/generator-alchemist/master/images/facebook.png" style="float:right">
</a>

## License

MIT

[ci]:      https://travis-ci.org/azat-io/postcss-instagram
[deps]:    https://gemnasium.com/azat-io/postcss-instagram
[npm]:     http://badge.fury.io/js/postcss-instagram
[postcss]: https://github.com/postcss/postcss
