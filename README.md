[![Build Status](https://travis-ci.org/derruba2000/miniApp.svg?branch=End2End_Protractor)](https://travis-ci.org/derruba2000/miniApp)
# miniApp
##D3.js Angular Example APP

Just a small AngularJS project with a directive using d3.js. No CSS applied.

###Installation
Install node.js first then go to your github clone and
``` shell
 npm install
```


###For unit tests:
(PhantomJS configured)
``` shell
 grunt karma:unit
```

###For integration (E2E) tests with karma:
(PhantomJS configured)
``` shell
 grunt karma:e2e
```

###For integration (E2E) tests with protractor:
(PhantomJS configured)
``` shell
 grunt E2ETest_protractor
```



###For starting a local server:
``` shell
$ grunt start
```

No watch and livereload tasks configured in grunt

###
It runs on port 9000 on a localhost, but you can check it on Github pages
http://derruba2000.github.io/miniApp

This project is configured for travis CI check please .travis.yml file and the respective jobs at
https://travis-ci.org/derruba2000/miniApp




