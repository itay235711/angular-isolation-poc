var fs = require('fs');
var less = require('requireg')('less');

var styleFile = fs.readFileSync('full.less', 'utf8');

less.render(styleFile).then(function(output) {
	var adjustedCss = adjustCssAncestorRules(output.css);

	fs.writeFileSync('dist.css', adjustedCss);
	process.exit(0);
}).catch(function(err) {
	throw err;
});


function adjustCssAncestorRules(cssStr) {
	cssStr = cssStr.replace(new RegExp(' html', 'g'), '');
	cssStr = cssStr.replace(new RegExp(' body', 'g'), '');

	return cssStr;
}