# custom-element-ie11
Example of how to to get a [custom elements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) working cross browser including ie11 (SO answer)

The files are already compiled and bundled, anyway if you want to see the scripts in action:

```bash
$ npm i
$ npm run build
$ npm run build:shim
```

Scripts are located in ```package.json```.

In order to get [custom elements v1](https://developers.google.com/web/fundamentals/getting-started/primers/customelements) working cross browser we need to add [this](https://github.com/webcomponents/custom-elements/blob/master/src/native-shim.js) native-shim ([here](https://github.com/webcomponents/custom-elements#known-issues) more infos about it).

This works well in all major browsers (edge, safari, firefox etc..) but doesn't in ie11!

When we try to import it in ie11 we get a bunch of syntax errors because the shim is written with some es6.

A simple workaround (what i did in this repo) is to compile the shim to  es5 and add it in addition of the es6 version (first es6 then es5 to ommit errors).

This isn't the cleanest solution, but at least it works.

I created this repo as answer to [this](http://stackoverflow.com/questions/43427281/custom-elements-v1-in-ecmascript-5-failing-under-ie11/43451866?noredirect=1#comment74043860_43451866) SO question.
Hopefully it will help some of you guys out.

Cheers
