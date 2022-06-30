---
title: Who are we?
layout: layouts/base.njk
subtitle:
attendees:
  - http://anomalily.net/
  - https://joshvazq.github.io/
  - https://bobbysebolao.com/
  - https://johnconway.co
  - http://domscomedypi.com/
  - https://www.inoxygen.net/
  - https://realize.be/
  - https://andrew-marks.com/
  - http://voss.co/
  - https://ohhelloana.blog
  - https://chrisburnell.com
  - https://letorey.co.uk/
  - http://shevski.com
  - http://tantek.com
  - http://www.jeanmrussell.com/
  - https://tommorris.org
  - https://doubleloop.net/
  - https://web.manuelpueyo.tech/
  - https://calumryan.com/
  - http://www.kevinmarks.com/
  - https://martinheathsjournal.blog/
  - https://mey.vn/
  - https://barryfrost.com/
  - https://marksuth.dev/
  - https://jamesg.blog/
---

# People

Our community continues to grow with new people of all backgrounds and abilities. If you’d like to get featured here with your personal website then come along to one of our future events.

<ul>
{% for attendee in data_attendees %}
<li>{% if data_attendees.indexOf(attendee.url) %}<a href="{{ attendee.url }}">{{ attendee.name }}</a>{% else %}{{ attendee.name }}{% endif %}</li>
{% endfor %}
</ul>