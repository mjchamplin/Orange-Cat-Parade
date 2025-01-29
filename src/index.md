---
layout: base
title: Orange Cat Parade
description: ''
---

<p>In 2022 I created a Patreon with the goal of <span class="orange">making a zine every month</span>.</p>

I have a storied history of engaging in "<em>do _____ every _____ challenges</em>" &mdash; see: 
National Novel Design Month([NaNoDeMo](https://blog.mjchamplin.com/2019/12/nanodemo/)), 
[Inktober](https://blog.mjchamplin.com/2019/12/inktober/), 
[]()
etc.

I didn't end up making 12 zines, but I did have a great little following on Patreon (thanks to all who subscribed there) and created a number of things I'm proud of. This site exists to archive the zines and various weird things I made. 

<em>xoxo</em>

<br/><br/>

## Monthly Zines: 

<div class="full-width-grid">

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-1.jpg">
        </div>
        <div class="card-caption">
            <h3>1. Library Zine</h3>
            <p>
                Made at my neighborhood library on an old Xerox machine, as the lord intended.
            </p>
        </div>
    </article>

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-2.jpg">
        </div>
        <div class="card-caption">
            <h3>2. From a Long Day in February</h3>
            <p>
                A long, long day in black and white photographs.
            </p>
        </div>
    </article>
    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-3.jpg">
        </div>
        <div class="card-caption">
            <h3>3. Drawings of Trees</h3>
            <p>
                Pretty much what it sounds like. Trees...pen...and ink!
            </p>
        </div>
    </article>

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-4.jpg">
        </div>
        <div class="card-caption">
            <h3>4. "Magazine"</h3>
            <p>
                A whole little magazine.
            </p>
        </div>
    </article>

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-5.jpg">
        </div>
        <div class="card-caption">
            <h3>5. Loot</h3>
            <p></p>
        </div>
    </article>

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-6.jpg">
        </div>
        <div class="card-caption">
            <h3>6. Bean Zine*</h3>
            <p></p>
        </div>
    </article>

    <article class="card grid-item-2">
        <div class="card-thumbnail">
            <img src="/_assets/img/zine-thumbnail-7.jpg">
        </div>
        <div class="card-caption">
            <h3>7. Arrangements*</h3>
            <p></p>
        </div>
    </article>

</div>
<br/>
<small>*previously unreleased</small>
<br/><br/><br/>

## Other Stuff
<div style="margin: 4em 0; background-color: #eee">
    <ul>
    {%- for post in collections.all -%}
        <li class="archive-list-item">
            <a href="{{ post.url }}"><code>{{ post.url }}</code></a>
            {% if post.data.description %}
                {{ post.data.description }}
            {% else %}
                <p><em>No description</em></p>
            {% endif %}
            <ul>
                {%- for tag in post.data.tags -%}
                    <li class="tag">
                        {{ tag }}
                    </li>
                {%- else -%}
                    <li class="notags">
                        No tags
                    </li>
                {%- endfor -%}
            </ul>
      </li>
    {%- endfor -%}
    </ul>
</div>

