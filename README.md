# freewizard20.github.io
Powered by pelican static site generator

## How to make your own

1. `pip install pelican`
2. `pelican-quickstart`
3. make "posts" subdirectory as I did, and make markdown files as I did
4. `make html` at root directory and you get your static site at /output/(`mingw32-make html` for mingw users)
5. on `pelicanconf.py`, fill `SITEURL='https://yoursite.github.io/output'`
6. add the `index.html` file on my root directory
