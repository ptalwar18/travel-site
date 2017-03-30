//gulp.src() - where to begin pulling water from..
// gulp.src('./main.css');
//gulp.dest() - where we want to place the water once it's done running through the pipes
//gulp.dest('./temp/styles');
// pipe() - 

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');

