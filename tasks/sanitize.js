/*
 * grunt-sanitize
 * https://github.com/christill/grunt-sanitize
 *
 * Copyright (c) 2015 Chris Till
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    var fs = require('fs');
    var path = require('path');
    var options;

    /**
     * Format file name
     * @param  {String} path
     * @return {String}     
     */
    function formatFileName(filepath) {

        var validFilename;

        validFilename = filepath.replace(/\s/g, options.separator);
        validFilename = validFilename.replace(/[^a-zA-Z_0-9.]/, '');
        validFilename = validFilename.toLowerCase();
        
        return validFilename;
    }


    grunt.registerMultiTask('sanitize', 'A grunt plugin that sanitizes filenames by either removing or replacing spaces and forcing them to lowercase.', function() {
      
        // Merge task-specific and/or target-specific options with these defaults.
        options = this.options({
            separator: '_',
        });


        this.files.forEach(function(f) {

            for (var i = 0; i < f.src.length; i++) {

                var fileName = path.basename(f.src[i]),
                    newFileName = formatFileName(fileName),
                    newFilePath = path.dirname(f.src[i]) + '/' + newFileName,
                    options1 = {color: 'red'},
                    options2 = {color: 'green'};

                if( f.src[i] == newFilePath ) {
                    continue;
                }
                
                fs.rename(f.src[i], newFilePath);

                // Log a response to the console
                grunt.log.writeln("File has been sanitized from : " + grunt.log.wordlist([fileName], options1) + 
                    ' to: ' + grunt.log.wordlist([newFileName], options2));
            }
 
        });

    });

};
