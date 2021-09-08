const mix = require('laravel-mix');
const glob = require('glob')
const dirdest = 'public/assets';

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
/* 
function mixAssetsDir(query, cb) {
    (glob.sync('resources/' + query) || []).forEach(f => {
        f = f.replace(/[\\\/]+/g, '/');
        cb(f, f.replace('resources', dirdest));
    });
}




mixAssetsDir('js/*.js', (src, dest) => mix.script(src, dest)); */

mix.js('resources/js/app.js', dirdest + '/js')
    // .sass('resources/sass/app.scss', dirdest + '/css')
    // .sass('resources/sass/main.scss', dirdest + '/css')
    .sourceMaps();

mix.copy('resources/js/main.js', dirdest + '/js');
mix.copy('resources/js/functions.js', dirdest + '/js');
mix.copy('resources/js/components.js', dirdest + '/js');