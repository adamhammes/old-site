# hammes.io

> ## The source for my personal website, located at [hammes.io](http://hammes.io).

### Dependencies

Jekyll is used to build the site.
To get Jekyll, first install [Ruby](https://www.ruby-lang.org/en/documentation/installation/) and then run

```
$ gem install jekyll
```

Additionally, [node.js](https://nodejs.org/) is needed for live reloading during development.
If you have access to `apt`, run

```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

### Developing:

```
$ git clone https://github.com/adamhammes/hammes.io
$ cd hammes.io
$ npm install
$ npm start
```

### Windows

If you are running Windows 10 or higher, [Ubuntu bash](https://msdn.microsoft.com/en-us/commandline/wsl/install_guide) is highly recommended.

[Dave Rupert's instructions](http://daverupert.com/2016/04/jekyll-on-windows-with-bash/) were the only way I could get Jekyll installed properly.
For posterity:

```
$ sudo -s
$ apt update
$ apt install make gcc
$ apt-add-repository ppa:brightbox/ruby-ng
$ apt update
$ apt install ruby2.3 ruby2.3-dev ruby-switch
$ gem install jekyll
```

