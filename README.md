# electron-starter
A remixable electron app starter

## Getting Started
1. Clone repo on to your local machine

``` bash
$ git clone https://github.com/rocketbear27/electron-starter.git
``` 

2. Install dependencies from `package.json`

``` bash
$ npm install
```

3. Edit `.html`, `.css`, and the `script.js` (avoid tampering with `main.js`)

4. Run the gulp command below to minify html and css files (run this everytime before you commit)

``` bash
$ gulp css html
```

_This minifies the big files and replaces the files to a minified version_

5. Add files to stage, commit, and push to your repo

``` bash
$ git add .

$ git commit -m "summary here"

$ git push
```