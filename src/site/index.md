---
title: Homebrew Website Club London
subtitle: A project scaffold for getting building with Eleventy quickly.<br /> Made by <a href="https://twitter.com/philhawksworth">Phil</a> for <a href="https://twitter.com/philhawksworth">Phil</a>, but perhaps you might also find it useful.
layout: layouts/base.njk
---
## Join us at our fortnightly meetup

Finish that blog post you've been working on. Demos of personal websites and technology. Discussion around the independent web. Join a community with like-minded interests. Bring friends that want a personal site!

<div class="button-container">
  <a href="#rsvp" class="button">RSVP to our next event</a>
</div>

<img src="/photos/2019-08-07.jpg" alt="Ana Rodrigues, Calum Ryan, Bobby Sebolao, Neil Mather inside at ProvenDough cafe, London Covent Garden 2019-08-07">

## Upcoming events

<ul class="listing">
{%- for page in collections.events -%}
  <li>
    <a href="{{ page.url }}">{{ page.data.title }}</a> -
    <time datetime="{{ page.date }}">{{ page.date | dateDisplay("LLLL d, y") }}</time>
  </li>
{%- endfor -%}
</ul>
