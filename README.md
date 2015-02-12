# grunt-sanitize

> A grunt plugin that sanitizes filenames by either removing or replacing spaces, forcing them to lowercase and removing any non alphanumeric characters.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sanitize --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sanitize');
```

## The "sanitize" task

### Overview
In your project's Gruntfile, add a section named `sanitize` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  sanitize: {
    all: {
      options: {
        separator: '_'
      },
      files: {
        src: [
          'test/fixtures/*'
        ]
      }
    }
  }
});
```

### Options

#### options.separator
Type: `String`
Default value: `'_'`

A string value that is used to replace spaces in the filename.


### Usage Examples

#### Default Options
In this example, the default options are used. So if there is a file named `my logo.jpg` it would be replaced with `my_logo.jpg`.

```js
grunt.initConfig({
 sanitize: {
    options: {},
    files: {
      src: [
        'test/fixtures/*'
      ]
    }
  }
});
```

#### Custom Options
In this example, the `separator` option is defined as `-` rather than the default `_`. So if there is a file named `my logo.jpg` it would be replaced with `my-logo.jpg`.

```js
grunt.initConfig({
  sanitize: {
    all: {
      options: {
        separator: '_'
      },
      files: {
        src: [
          'test/fixtures/*'
        ]
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
