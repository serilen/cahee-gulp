import webpack from "webpack-stream";
import concat from "gulp-concat";
import terser from "gulp-terser";
import sourcemaps from 'gulp-sourcemaps';
import rename from 'gulp-rename';


export const js = () => {
   let listSrcMain = [
      app.path.src.js + '*.js',
   ];

   return app.gulp.src(listSrcMain)
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "JS",
            message: "Error: <%= error.message %>"
         }))
      )
      .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(rename({ suffix: '.min' }))
      .pipe(terser())
      .pipe(sourcemaps.write('./'))
      .pipe(app.gulp.dest(app.path.build.js))
      .pipe(app.plugins.browsersync.stream());
}