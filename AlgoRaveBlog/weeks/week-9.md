# Week 9: 5 – 11 January 2026

## Monday

My friend recommended me to look up some cool touchdesigner tutorials and he gave me some names like Pao Olea and Okamirufu but I stepped away from this idea because after my meeting with my coach we established that the touchdesigner visual felt more like an add-on instead of an integration in the project.  

### Bitter sweet ending

<iframe   src="https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKClNXQU5fRU9XcGlhbm86IG5vdGUoIjxnNCBmNCBkNSBnNCBmNCBkNSBnNCBnNCEyIGQ1IGc0IGc0IGY0IGQ1IGQ1PiIpCi5zKCJwaWFubyIpLmRlbGF5KC42KS5yZWwoMikuZ2FpbiguNikKClNXQU5fRU9XOiBub3RlKCI8PDE0IFsyOSBfIF8gMTldPkAzIDMzQDQgMjY%2BIi5hZGQoMzYpKQouZGV0dW5lKC43KS5wd3JhdGUoLjMpLnJvb20oMSkucm9vbSgzKQoucygicHVsc2UiKQouZm0oIjIuMDMiKS5mbWgoMi4wMSkubHBmKHNsaWRlcig0MjguOCwgMjAwLCAxMDAwKSkKLmRpb2RlKCIxIikubyg0KS5wb3N0Z2FpbiguNSkuX3Njb3BlKCkKCl9TV0FOX0VPVzI6IG5vdGUoIjwwIDYgMTAgMTMgND4qMTYiLmFkZCgiPDAgNCAzIDY%2BKjIiKSkKLnNjYWxlKCJkOnBocnlnaWFuIikucygidHJpYW5nbGUiKS5wYW4ocmFuZCkKLmRlbGF5KC41KS5nYWluKDEpLm8oNSkuZGVjKC4xKQoKU1dBTl9FT1czOiBub3RlKCI8N0A0IDE1QDIgMTBAMj4iLmFkZCgyNCkpCi5kZXR1bmUoLjcpCi5zKCJzdXBlcnNhdyIpLmxwZihzbGlkZXIoODAwLCAyMDAsIDEwMDApKQouZGlvZGUoIjE6MSIpLm8oNCkucm9vbSguNikucm9vbXNpemUoMykuX3Njb3BlKCk%3D"
 width="100%" height="500"></iframe>

 Cool notes creating a tune → pegassi set ADL - 19/04/2025, 10’

📎 Amsterdam ADL 2025 - Pegassi: https://soundcloud.com/dgtl-festival/pegassi-full-set-dgtl-amsterdam-2025-1942025

---

## Tuesday

I was looking into the samples section on the strudel documentation and i read that you can use a json file if your planning on using a lot of custom samples.
Normally you’d have to load in each sample to get that sound.

```
samples({
bassdrum: 'bd/BT0AADA.wav',
hihat: 'hh27/000_hh27closedhh.wav',
snaredrum: ['sd/rytm-01-classic.wav', 'sd/rytm-00-hard.wav'],
}, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');
```

But that’s a lot of work if you’re gonna use a lot of them → strudel let’s you use a json format for that that you can install by doing: 

`npx --yes @strudel/sampler --json > strudel.json`

📎 JSON installing reference: https://www.npmjs.com/package/@strudel/sampler

This explains in dept how to get that json file up and running by using your local host.
This is also something that i saw _switch_angel using in one of her video’s and i remember writing that down and being confused as to why she was referencing a localhost.

⇒ Loading sounds from a github repo is still recommended and mostly used. It also has a notation shortcut.

ex: `samples('github:tidalcycles/dirt-samples')` format is **`samples('github:<user>/<repo>/<branch>')`** 

→ omitting the branch (like ex. above) will just take the main branch as default
!! It assumes a **`strudel.json`** file to be present at the root of the repository !!

---
While looking at the documentation i was smart shuffling trough my “[hard gaan] (https://open.spotify.com/playlist/7MGatkR55pKlSJg6GWibE7?si=9e29801b0c9b48fe)” playlist with all the best bangers and virtual zone started playing. I browsed to it’s artist profile and started pressing play on that because at that time i was really feeling the music. I stared wondering why and i noticed that all of the notes had a bizarre echt/reverb on them that made the song sound like you’re almost dreaming; I really liked that and i will definetly start experimenting with the room() function 

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7MGatkR55pKlSJg6GWibE7?utm_source=generator" width="80%" height="400" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

This embed somehow only shows the 1st 100 songs but the other ones are also bangers so I definetly recommend checking out the whole playlist ;-)

---

## Wednesday

This day was filled with snowfall so I forced myself to take it easy and lay off some work to enjoy the snow. I didn’t really experiment a lot with strudel today but I did try and convert my blog to markdown. 

It’s still a struggle to change from Notion to Markdown because for now i see no benefits for it except that markdown let’s me play the coding segments and notion (as far as i know doesn’t). With UX i’ve grown very fond of notion so i know how it works.

---

## Thursday

I used this day to convert my whole blog into markdown but im having struggles trying to import the exact coding segments. I have to encode the whole session for it to be imported exactly like the codeblock in notion because if i just use the normal iframe with the default strudel link, i can live edit in the editor but when the page refreshes, it goes back to the default content…

> Update: I fixed it. I put each coding segment in a REPL and then pressed the sharing button to get the link of that session. That's the link that I then used in the scr-tag to make the correct section play the correct sound.