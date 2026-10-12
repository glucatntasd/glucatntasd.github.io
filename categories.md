---
layout: default
title: Categorie
permalink: /categories/
---

# Categorie

{% assign categorie = site.categories | sort %}

{% for categoria in categorie %}
## <span id="{{ categoria[0] | slugify }}"></span>{{ categoria[0] }}

<ul class="category-articles">
{% assign articoli = categoria[1] | sort: "date" | reverse %}
{% for post in articoli %}
<li>
  <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  <small>{{ post.date | date: "%d/%m/%Y" }}</small>
</li>
{% endfor %}
</ul>
{% endfor %}