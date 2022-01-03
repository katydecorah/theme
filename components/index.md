---
title: Components
layout: default
categories:
  - adventures
tags:
  - Mapbox
  - Node.js
coordinates:
  - -73.2968605,44.4926914
  - -72.8459604,44.6418721
  - -72.7846185,44.5195254
  - -72.6415568,44.4820269
  - -71.3208248,44.2706142
  - -70.3084914,43.5862495
  - -70.5117881,43.39658
locations:
  - Burlington
  - Jeffersonville
  - Bingham Falls
  - Moss Glen Falls
  - Mount Washington
  - Cape Elizabeth
  - Kennebunkport
date: 2021-01-03
recipe: https://cooking.nytimes.com/recipes/1019729-rose-apple-tart
recipe-title: Rose Apple Tart
books:
  - title: People We Meet on Vacation
    authors: Emily Henry
    url: >-
      https://books.google.com/books/about/People_We_Meet_on_Vacation.html?hl=&id=5fooEAAAQBAJ
    isbn: "9781984806758"
  - title: Beautiful World, Where Are You
    authors: Sally Rooney
    url: https://play.google.com/store/books/details?id=sL4SEAAAQBAJ
    isbn: "9780374602611"
  - title: Freshwater
    authors: Akwaeke Emezi
    url: https://play.google.com/store/books/details?id=_eUoDwAAQBAJ
    isbn: "9780802165565"
  - title: The Renunciations
    authors: Donika Kelly
    url: >-
      https://books.google.com/books/about/The_Renunciations.html?hl=&id=_xC-zQEACAAJ
    isbn: "9781644450536"
recipes:
  - title: Gyeran Bap (Egg Rice) Recipe
    site: NYT Cooking
    url: https://cooking.nytimes.com/recipes/1022530-gyeran-bap-egg-rice
  - title: Breakfast Burritos Recipe
    site: NYT Cooking
    url: https://cooking.nytimes.com/recipes/1022540-breakfast-burritos
  - title: Pressure Cooker Pot Roast Recipe
    site: NYT Cooking
    url: https://cooking.nytimes.com/recipes/1020846-pressure-cooker-pot-roast
playlist: 2021 Fall
spotify: https://open.spotify.com/playlist/2YnPs9UNBkJpswmsRNwQ1o
tracks:
  - track: can't stop me from dying
    artist: Ada Lea
    album: one hand on the steering wheel the other sewing a garden
  - track: No Shadow
    artist: Hyd
    album: No Shadow
  - track: Trip To Japan
    artist: The Shacks
    album: Trip To Japan
---

## note.html

{% include post/note.html content="This is my note" %}

## support.html

{% include post/support.html org=page.give %}

## post-link.html

{% assign post = site.posts | first %}
{% include post/post-link.html post=post %}

## post-locations.html

{% include post/post-locations.html %}

## post-tags.html

{% include post/tags.html %}

## post-map-header.html

{% include post/post-map-header.html %}

## post-meta.html

{% include post/post-meta.html %}

## post-recipe.html

{% include post/post-recipe.html %}

## prev-next.html

{% include post/prev-next.html %}

## post-season.html

{% include post/post-season.html %}
