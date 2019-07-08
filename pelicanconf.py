#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Jinhyuk Jeon'
SITENAME = "Jinhyuk Jeon's Blog"
SITEURL = 'https://freewizard20.github.io/output'

PATH = 'content'

TIMEZONE = 'Asia/Tokyo'

DEFAULT_LANG = 'En'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('github', 'https://github.com/freewizard20'),
            ('twitter', 'https://twitter.com/jeonjinhyuk')
            )

#SIDEBAR_DIGEST = 'Programmer'
#FAVICON = 'https://github.com/freewizard20/logo.ico'
#DISPLAY_PAGES_ON_MENU = True

DEFAULT_PAGINATION = 8

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True