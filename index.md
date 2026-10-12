---
layout: default
title: Tutti gli articoli
---

# Dal territorio

Storie, attività e progetti di **Terracina Network Trails A.S.D.**

Gli articoli più recenti sono elencati qui sotto.

{% for post in site.posts %}
<article class="post-card">
  {% if post.image %}
  <a href="{{ post.url | relative_url }}"><img src="{{ post.image | relative_url }}" alt="" loading="lazy"></a>
  {% endif %}
  <p class="meta">{{ post.category }}{% if post.date %} · {{ post.date | date: "%d/%m/%Y" }}{% endif %}</p>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <p>{{ post.excerpt | strip_html | strip_newlines | truncate: 190 }}</p>
  <a class="read-more" href="{{ post.url | relative_url }}">Leggi l'articolo →</a>
</article>
{% endfor %}
