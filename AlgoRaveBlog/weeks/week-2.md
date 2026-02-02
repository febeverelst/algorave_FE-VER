<a href="#" onclick="loadPage('blog'); return false;" style="font-size: 0.9em; color: #888;">← Back to Daily Log</a>

# Week 2: 10 – 16 November 2025

### Learning by Imitation & Experimentation
**Focus:** Learning Strudel through existing algorave practices, experimenting with parameters, and questioning audiovisual possibilities



## Inspiration & Research

While browsing Instagram and TikTok, I started following several algorave artists who regularly post short live-coding snippets with explanations. Two artists that stood out immediately were **DJ_DAVE** and **switch_angel**.

What made their content valuable is that they don’t just show results but also explain *why* they use certain structures or values. I copied several of their examples into Strudel and started tweaking parameters to better understand the language.

At this stage, I still struggle with:
- creating harmonies  
- understanding which notes and sounds are available  
- finding a clear overview of options in the documentation  

This made me realize that learning Strudel is less about memorizing syntax and more about **developing musical intuition through experimentation**.


## Musical Influences & Questions

The work of **Pauric Freeman** has a strong influence on me. His use of synthesis feels performative and expressive in a way I want to explore further.

This raised several questions for me:

### What would I need to work like this?
- Synthesizers  
- Cable routing / signal flow  
- TouchDesigner skills  

### Questions for Further Research
- Strudel allows visualization (waves, punchcards, pianorolls).  
  → Could I analyze these patterns and generate visuals from them?
- Is it possible to write a script that detects patterns in sound waves and visualizes them?
- Could these visuals respond live during a performance?

These questions started pushing the project beyond sound alone and towards **audiovisual performance**.


## Algorave Experiments

### Based on DJ_DAVE — San Francisco Rave

This experiment was co-coded using a tutorial/sample from DJ_DAVE’s San Francisco performance.  
The bassline functions correctly, but the vocal chop does not play, probably because it relies on a **personal or custom sample**.

This made me aware of how much live-coding setups depend on personal sample libraries.

<iframe src="https://strudel.cc/#CkJBU1NMSU5FOiBub3RlKCJnIzJAMTYgYSMyQDggYzNAMyBkIzNANiIpCi5zdHJ1Y3QoIngqMTYiKQouc3VzdGFpbigiMC41IikKLnNvdW5kKCJbc3F1YXJlLCBzYXd0b290aF0iKQoudHJhbnNwb3NlKCItMTIsIDAsIDciKQouY29hcnNlKDIpCi5kZWNheSgwLjA3NSkuZ2FpbigwLjc1KS5ocGYoMTUwKQoubHBmKHNsaWRlcig4MDAsMzAwLDQwMDApKQovLy5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSkKLl9wdW5jaGNhcmQoe3dpZHRoOiA2MDB9KQoKVk9YQ0hPUDE6IHMoImhlYXJ0YmVhdDowIi5zbG93KDIpKQoubm90ZSgnZyMxJykKLnNsaWNlKDgsICI8NSA2PiIuZmFzdCgyKSkKLmdhaW4oIjwwLjYgMS42PiIuc2xvdygyKSkucm9vbSgyKQoubHBmKHNsaWRlcig0MDAwLCA2MDAsIDQwMDApKQ%3D%3D" width="100%" height="500px"></iframe>

📎 Reference video:  
https://www.instagram.com/p/DOeyQ6ggQrR/

Another DJ_DAVE video worth analyzing later:  
https://www.instagram.com/p/DA4vr_gvZcJ/



### Based on *switch_angel* — Acid Patterns

I discovered switch_angel through TikTok and Instagram. Her work stood out because of its stylistic diversity, which shows a deep understanding of the coding language.

She posts structured explanations of her samples and functions. I first recreated her code exactly, then gradually altered notes, values, and scales to understand their effect.

<iframe src="https://strudel.cc/#CnNldENwbSgxMzYvNCkKcmVnaXN0ZXIoJ2FjaWRlbnYnLCAoeCwgcGF0KSA9PiBwYXQubHBmKDEwMCkKICAgICAgICAubHBlbnYoeCAqIDkpLmxwcyguMikubHBkKC4xMikKKQoKJDogbigiPDAgNCAwIDkgNz4qMTYiKQouc2NhbGUoImc6bWlub3IiKS50cmFucygtMTIpCi5zb3VuZCgic2F3dG9vdGgiKS5hY2lkZW52KHNsaWRlcigwLjQxKSkKLl9waWFub3JvbGwoKQokOiBuKCI8MD4qMTYiKQouc2NhbGUoImc6bWlub3IiKS50cmFucygtMjQpCi5zb3VuZCgic3VwZXJzYXciKS5hY2lkZW52KHNsaWRlcigwLjQ3MykpCi5fcGlhbm9yb2xsKCkKJDogcygidG9wOjEvMiIpLmZpdCgpCgokOiBzKCJiZDoyITQiKQouZHVjaygiMzo0OjU6NiIpCi5kdWNrZGVwdGgoLjgpCi5kdWNrYXR0YWNrKC4xNikKLl9zY29wZSgp" width="100%" height="500px"></iframe>


### First Own Melody Using *switch_angel’s* Acid Function

This was an important moment for me: I created this melody in **15 minutes**, which is extremely fast compared to earlier attempts.

It made me realize that:
- reusable functions (like the acid envelope) speed up creativity  
- I need to study **frequencies, scales, and note relationships** more deeply  

<iframe src="https://strudel.cc/#CnNldENwbSgxMzYvNCkKcmVnaXN0ZXIoJ2FjaWRlbnYnLCAoeCwgcGF0KSA9PiBwYXQubHBmKDEwMCkKICAgICAgICAubHBlbnYoeCAqIDkpLmxwcyguMikubHBkKC4xMikKKQoKJDogbigiPDAgNyAwIDYgMCA0IDMgMyAwPio4IikKLnNjYWxlKCJEOm1pbm9yIikudHJhbnMoLTgpCi5hY2lkZW52KHNsaWRlcigwLjUpKSAuX3BpYW5vcm9sbCgpLnNvdW5kKCJnbV9zeW50aF9icmFzc18yIikKCiQ6IG4oIjwwPioxNiIpCi5zY2FsZSgiZzptaW5vciIpLnRyYW5zKC0yNCkKLmFjaWRlbnYoc2xpZGVyKDAuMykpIC5fcGlhbm9yb2xsKCkuc291bmQoInNhd3Rvb3RoIikKCiQ6IHMoImJkOjIhNCIpCi5kdWNrKCIzOjQ6NTo2IikKLmR1Y2tkZXB0aCguOCkKLmR1Y2thdHRhY2soLjE2KQouX3Njb3BlKCk%3D" width="100%" height="500px"></iframe>


## Thursday — Equipment & Consultation

A friend who works as a DJ offered to let me use his synthesizer, but because his equipment is expensive, I felt hesitant.

Instead, we looked at more accessible personal equipment options:
- Novation Launchkey Mini MK3  
  https://novationmusic.com/products/launchkey-mini-mk3
- Novation Launchpad Mini MK3  
  https://novationmusic.com/products/launchpad-mini-mk3

### Consult Takeaways
- Expectation of **live performance**
- Possible integration of **Arduino**
- Ideas about combining **movement/dance with sound manipulation**

---

## In-Between Session Experiment

I quickly formed this melody when my teammates were taking a smoke outside. It was just finished when they came back. I looked up online how long an average cigarette break takes and that’s about 5 to 7 minutes. So i improved in timespeed but it’s not my proudest melody because i just added some notes and prayed that it would work. Again using angel’s acid function made it already sound way cooler and with the sliders i could kinda build up momentum and then i added a bassdrum to create a drop.

<iframe src="https://strudel.cc/#CnNldENwbSgxMzYvNCkKcmVnaXN0ZXIoJ2FjaWRlbnYnLCAoeCwgcGF0KSA9PiBwYXQubHBmKDEwMCkKICAgICAgICAubHBlbnYoeCAqIDkpLmxwcyguMikubHBkKC4xMikKKQoKTUVMT0RZOiBuKCI8NyA1IDEgMiA3IDcgNiA2Pio4IikvLy5hZGQoIjEyIikKLnNjYWxlKCJBOm1pbm9yIikudHJhbnMoIi0xMiIpLnBseSgiMSAyIFsuNXwyXSIpCi5wb3N0Z2FpbigiPDAuMyAwLjg%2BKjgiKQouYWNpZGVudihzbGlkZXIoMC43NjUpKQouc291bmQoInN1cGVyc2F3IikuX3B1bmNoY2FyZCgpCgpCQVNTTElORTogbigiPDA%2BKjgiKQouYWNpZGVudihzbGlkZXIoMC4yMjkpKQouc291bmQoInNhd3Rvb3RoIikKLl9wdW5jaGNhcmQoKQpLSUNLUzogcygiPGJkPio0Iik%3D" width="100%" height="500px"></iframe>

Reference video:  
https://www.youtube.com/watch?v=HkgV_-nJOuE

---

## Segments & Building Blocks

These segments function as **reusable studies** rather than finished compositions.

### DJ_DAVE Voice Sampler (Non-functional without custom samples)

<iframe src="https://strudel.cc/#CkJBU1NMSU5FOiBub3RlKCJnIzJAMTYgYSMyQDggYzNAMyBkIzNANiIpCi5zdHJ1Y3QoIngqMTYiKQouc3VzdGFpbigiMC41IikKLnNvdW5kKCJbc3F1YXJlLCBzYXd0b290aF0iKQoudHJhbnNwb3NlKCItMTIsIDAsIDciKQouY29hcnNlKDIpCi5kZWNheSgwLjA3NSkuZ2FpbigwLjc1KS5ocGYoMTUwKQoubHBmKHNsaWRlcig4MDAsMzAwLDQwMDApKQovLy5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSkKLl9wdW5jaGNhcmQoe3dpZHRoOiA2MDB9KQoKLy8gZm91bmQgb3V0IHRoYXQgd2UgbmVlZCBhIGRqX2RhdmUgc2FtcGxlIGZvciB0aGlzIChnaXRodWIpClZPWENIT1AxOiBzKCJoZWFydGJlYXQ6MCIuc2xvdygyKSkKLm5vdGUoJ2cjMScpCi5zbGljZSg4LCAiPDUgNj4iLmZhc3QoMikpCi5nYWluKCI8MC42IDEuNj4iLnNsb3coMikpLnJvb20oMikKLmxwZihzbGlkZXIoNDAwMCwgNjAwLCA0MDAwKSk%3D" width="100%" height="500px"></iframe>



### switch_angel — Fast Acid Structure

<iframe src="https://strudel.cc/#CnNldENwbSgxMzYvNCkKcmVnaXN0ZXIoJ2FjaWRlbnYnLCAoeCwgcGF0KSA9PiBwYXQubHBmKDEwMCkKICAgICAgICAubHBlbnYoeCAqIDkpLmxwcyguMikubHBkKC4xMikKKQoKJDogbigiPDAgNCAwIDkgNz4qMTYiKQouc2NhbGUoImc6bWlub3IiKS50cmFucygtMTIpCi5zb3VuZCgic2F3dG9vdGgiKS5hY2lkZW52KHNsaWRlcigwLjUyKSkKLl9waWFub3JvbGwoKQokOiBuKCI8MD4qMTYiKQouc2NhbGUoImc6bWlub3IiKS50cmFucygtMjQpCi5zb3VuZCgic3VwZXJzYXciKS5hY2lkZW52KHNsaWRlcigwLjU5NSkpCi5fcGlhbm9yb2xsKCkKJDogcygidG9wOjEvMiIpLmZpdCgpCgokOiBzKCJiZDoyITQiKQouZHVjaygiMzo0OjU6NiIpCi5kdWNrZGVwdGgoLjgpCi5kdWNrYXR0YWNrKC4xNikKLl9zY29wZSgp" width="100%" height="500px"></iframe>



### Own Melody (Based on Previous Samples & Film Soundtracks)

<iframe src="https://strudel.cc/#CnNldENwbSgxMzYvNCkKcmVnaXN0ZXIoJ2FjaWRlbnYnLCAoeCwgcGF0KSA9PiBwYXQubHBmKDEwMCkKICAgICAgICAubHBlbnYoeCAqIDkpLmxwcyguMikubHBkKC4xMikKKQoKJDogbigiPDAgNyAwIDYgMCA0IDMgMyAwPio4IikKLnNjYWxlKCJEOm1pbm9yIikudHJhbnMoLTgpCi5hY2lkZW52KHNsaWRlcigwLjcwNykpIC5fcGlhbm9yb2xsKCkuc291bmQoImdtX3N5bnRoX2JyYXNzXzIiKQoKJDogbigiPDA%2BKjgiKQouc2NhbGUoImc6bWlub3IiKS50cmFucygtMjQpCi5hY2lkZW52KHNsaWRlcigwLjQ2MykpIC5fcGlhbm9yb2xsKCkuc291bmQoInNhd3Rvb3RoIikKCiQ6IHMoImJkOjIhNCIpCi5kdWNrKCIzOjQ6NTo2IikKLmR1Y2tkZXB0aCguOCkKLmR1Y2thdHRhY2soLjE2KQouX3Njb3BlKCk%3D" width="100%" height="500px"></iframe>



### Random Acid Notes Experiment

<iframe src="https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCiREUlVNUzogcygic2JkITQiKS5fc2NvcGUoKQoKJEJBU1M6IG4oaXJhbmQoMTApLnN1Yig3KS5zZWcoMTYpKS5zY2FsZSgiQzptaW5vciIpCi5zb3VuZCgiZ21fZnhfYXRtb3NwaGVyZSIpLmxwZigyMDApLmxwZW52KDIpLmxwcSgxMikKICAub3JiaXQoMikucm9vbSgxKQouX3BpYW5vcm9sbCgp" width="100%" height="500px"></iframe>



### Code-Along with DJ_DAVE

<iframe src="https://strudel.cc/#CnNldENwcygxMzAvNjAvNCkKY29uc3QgbHBmID0gc2xpZGVyKDEyODMuMiwgNDAwLCA1MDAwKQpyZWdpc3RlcignYWNpZGVudicsICh4LCBwYXQpID0%2BIHBhdC5scGYoMTAwKQogICAgICAgIC5scGVudih4ICogOSkubHBzKC4yKS5scGQoLjEyKQopCi8vIF9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18gLy8KCkxFQUQ6IG4oaXJhbmQoOCkpLnNjYWxlKCJmIzM6bWlub3I6cGVudGF0b25pYyIpCi5zZWcoMTYpLnNvdW5kKCJzYXciKS5hY2lkZW52KHNsaWRlcigwLjQwNSkpCi5yaWJib24oOCwgMSkKLl9wdW5jaGNhcmQoKQoKQkFTU0xJTkU6IG4oaXJhbmQoIjwxITcgOD4iLmZhc3QoMikpKQouc2NhbGUoIjxmIyBhIGUgYyM%2BOm1pbm9yOnBlbnRhdG9uaWMiKQouc2VnKDE2KS50cmFuc3Bvc2UoIlstMTIsIDBdIikuZ2FpbigwLjUpCi5zb3VuZCgic3F1YXJlLCBzYXciKS5scGYobHBmKQouX3B1bmNoY2FyZCgpCgpLSUNLOiBzKCJiZDo1KjQiKS5nYWluKDEuNSkKLl9wdW5jaGNhcmQoKQ%3D%3D" width="100%" height="500px"></iframe>


<div class="week-grid" style="margin-top: 2em;">
	<a href="#" onclick="loadPage('blog', 'week-1'); return false;">
		<h3>Week 1</h3>
		<p>Tool research, TidalCycles installation attempts, and early friction</p>
	</a>
	<a href="#" onclick="loadPage('blog', 'week-3'); return false;">
		<h3>Week 3</h3>
		<p>Sound patterns, visuals, and live performance ideas.</p>
	</a>
</div>
