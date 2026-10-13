---
layout: default
title: Tag
permalink: /tags/
---

<h1>Tag</h1>

{% assign all_tags = site.tags | sort %}

{% for tag in all_tags %}
  <h2 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h2>
  <ul>
    {% assign tag_posts = tag[1] | sort: "date" | reverse %}
    {% for post in tag_posts %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>({{ post.date | date: "%d/%m/%Y" }})</small>
      </li>
    {% endfor %}
  </ul>
{% endfor %}
