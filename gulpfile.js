const gulp = require('gulp'); // Load Gulp
const mainUtil = require('./main_util');

// Start Watching: Run "gulp"
gulp.task('default', ['watch']);

// JSON to JSON: Building initial state
gulp.task('build-json', function() {
  let results = {}, name, files = mainUtil.getFiles('./json_splices');

  files.forEach(function(file) {
    name = file.split('.')[0];
    results[name] = mainUtil.readFile(['json_splices'], name, 'json');
  })

	 mainUtil.writeFile(['json_assembled'], 'result', 'json', results);
});

// Default task
gulp.task('watch', function() {
    gulp.watch('json_splices/**/*.json', ['build-json']);
});
