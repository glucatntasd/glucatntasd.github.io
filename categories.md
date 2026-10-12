---
layout: default
title: Categorie
permalink: /categories/
---

# Categorie

{% assign categorie = site.categories | sort %}

{% for categoria in categorie %}
## {{ categoria[0] }}

{% assign articoli = categoria[1] | sort: "date" | reverse %}

<ul class="category-articles">
{% for post in articoli %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%d/%m/%Y" }}</small>
  </li>
{% endfor %}
</ul>
{% endfor %}