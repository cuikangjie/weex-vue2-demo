var gulp = require('gulp');

gulp.task('cpAndroid',function(){
  gulp.src('dist/app.weex.js').pipe(gulp.dest('android/app/src/main/assets'));
});
