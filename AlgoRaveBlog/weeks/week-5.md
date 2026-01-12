<a href="#" onclick="loadPage('blog'); return false;" style="font-size: 0.9em; color: #888;">← Back to Daily Log</a>

# Week 5: 1–7 December 2025

## Monday

### References & Inspiration

<iframe width="80%" height="400"
src="https://www.youtube.com/embed/E1K6Sv-oIb0"
title="DJ Dave hybrid 808 set"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

<iframe width="80%" height="400"
src="https://www.youtube.com/embed/vAPX6g2eHgA"
title="hard groove live coding"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

<img src="assets/images/week5_djdave.png" alt="github 808 stream, DJ Dave" width="100%">

> Because strudel is an open source coding framework, public dj’s using it should always display what they’re doing. Because of this i could get the drumstack from this dj and use that as a base for my own drumstack.


### Basic drumstack

<iframe src="https://strudel.cc/#CnNhbXBsZXMoJ2dpdGh1YjphbGdvcmF2ZS1kYXZlL3NhbXBsZXMnKQpzYW1wbGVzKCdnaXRodWI6dGlkYWxjeWNsZXMvZGlydC1zYW1wbGVzJykKc2FtcGxlcygnc2hhYmRhL3NwZWVjaC9lbi1VUy9mOmhlbGxvLHdvcmxkLGRpc2tvLGtpbmEnKQpzZXRDcHMoMTQwLzYwLzQpCgpjb25zdCBTdHJ1Y3R1cmVzID0gWwogICJ7fn0iLAogICJ4KjQiLAogICJ7eCB%2BITYgeCB%2BIH4geCB%2BITMgeCB%2BfSUxNiIsCiAgInt4IH4hMyB4IH4hMyB4IH4hMiB4IH4hMiB4IH59JTE2IiwKICAie3ggfiE5IHggfiE1IHggfiB4IH4hNyB4IH4hMyA8IH4geCA%2BIH59JTE2IiwKXQoKY29uc3QgUEcgPSBbCiAgInswLjh9IiwKICAiMC4zIDAuOCIuZmFzdCg0KSwKICAiezAuMyAwLjghNiAwLjMgMC44ITIgMC4zIDAuOCEzIDAuMyAxfSIsCiAgInswLjMgMC44ITMgMC4zIDAuOCEzIDAuMyAwLjghMiAwLjMgMC44ITIgMC4zIDAuOH0lMTYiLAogICJ7MC40IDEhOSAwLjQgMSE1IDAuNCAxIDAuNCAxITcgMC40IDEhMyA8MSBPLjQ%2BIDF9JTE2IiwKXQoKY29uc3QgYmVhdCA9IDEKLy8wIC0gT0ZGCi8vMSAtIDRPVEYKLy8yIC0gSFIgTUFJTgovLzMgLSBKRVJTRVkgQ0xVQgovLzQgLSBHSTJNCgpEUlVNUzogc3RhY2soCiAgcygidGVjaDo1IikucG9zdGdhaW4oNSkuaHBmKDc1KS5zdHJ1Y3QocGljayhTdHJ1Y3R1cmVzLCBiZWF0KSksCiAgCiAgcygiW34gY3BdIikuYmFuaygiS29yZ0RETTExMCIpLnNwZWVkKDEpLmZhc3QoMikucG9zdGdhaW4oMC4yKS5scGYoMzAwMCksCiAgcygiaGgiKS5zdHJ1Y3QoIlt4ITMgfiEyIHghMTAgfl0iKS5wb3N0Z2FpbigwLjUpLmJhbmsoIlJvbGFuZFRSODA4Iikuc3BlZWQoMS4yNSkucm9vbShzaW5lLnJhbmdlKDAuMSwgMC40KSkuZ2FpbigwLjYpLmp1eChyZXYpLAogIHMoIn4gaGgiKS5iYW5rKCJSb2xhbmRUUjgwOCIpLnJvb20oMC4yKS5zcGVlZCgwLjc1KS5nYWluKDAuNSkuZmFzdCg0KSwvLy5jbGlwKDAuMTUpLAogIHMoImJyZWFrczE2NSIpLmdhaW4oMC42KS5sb29wQXQoMSkuZml0KCkucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLAogIHMoInBzcjpbMnwxMnwyNHwyNV0iLmZhc3QoNCkpLnN0cnVjdCgieCE3IH4geCEzIH4geCEzIH4iKS5qdXgocmV2KS5ocGYoMTAwMCkucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLnNwZWVkKDAuNSkuZ2FpbigwLjQpCikKLl9wdW5jaGNhcmQoe3dpZHRoOiAxNDAwLCBoZWlnaHQ6IDIwMH0p" width="100%" height="500"></iframe>


### Session from that drum stack (mostly code along with DJ Dave)

<iframe src="https://strudel.cc/#CnNhbXBsZXMoJ2dpdGh1YjphbGdvcmF2ZS1kYXZlL3NhbXBsZXMnKQpzYW1wbGVzKCdnaXRodWI6dGlkYWxjeWNsZXMvZGlydC1zYW1wbGVzJykKc2FtcGxlcygnc2hhYmRhL3NwZWVjaC9lbi1VUy9mOmhlbGxvLHdvcmxkLGZldmVyLGtpbmEnKQoKc2V0Q3BzKDE0MC82MC80KQoKY29uc3QgU3RydWN0dXJlcyA9IFsKICAie359IiwKICAieCo0IiwKICAie3ggfiE2IHggfiB%2BIHggfiEzIHggfn0lMTYiLAogICJ7eCB%2BITMgeCB%2BITMgeCB%2BITIgeCB%2BITIgeCB%2BfSUxNiIsCiAgInt4IH4hOSB4IH4hNSB4IH4geCB%2BITcgeCB%2BITMgPCB%2BIHggPiB%2BfSUxNiIsCl0KCmNvbnN0IFBHID0gWwogICJ7MC44fSIsCiAgIjAuMyAwLjgiLmZhc3QoNCksCiAgInswLjMgMC44ITYgMC4zIDAuOCEyIDAuMyAwLjghMyAwLjMgMX0iLAogICJ7MC4zIDAuOCEzIDAuMyAwLjghMyAwLjMgMC44ITIgMC4zIDAuOCEyIDAuMyAwLjh9JTE2IiwKICAiezAuNCAxITkgMC40IDEhNSAwLjQgMSAwLjQgMSE3IDAuNCAxITMgPDEgTy40PiAxfSUxNiIsCl0KCmNvbnN0IGJlYXQgPSAzCi8vMCAtIE9GRgovLzEgLSA0T1RGCi8vMiAtIEhSIE1BSU4KLy8zIC0gSkVSU0VZIENMVUIKLy80IC0gR0kyTQoKY29uc3QgZW5lcmd5ID0gc2xpZGVyKDMwMDAsIDQwMCwgNTAwMCkKCmNvbnN0IG5vdGVzc3MgPSBbCiAgIntmMyBjNCB%2BfSUyIiwKICAie2EzIGU0IH59JTIiLAogICJ7ZDMgYTMgfn0lMiIsCiAgIntlMyBiMyB%2BfSUyIiwKXQoKLy8gLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXAoKSFdfTk9URVM6IG5vdGUocGljaygiPDAhOCAxITggMiE4IDMhOD4iLCBub3Rlc3NzKSkuZmFzdCg4KQogIC8vLnBseSgiPDIgND4iLnNsb3coMikpCiAgLnNvdW5kKCJzcXVhcmUiKQogIC50cmFuc3Bvc2UoIlswXSIpLy8uc29tZXRpbWVzKHggLT4geC50YW5zcG9zZSgiWzAsIDEyXSIpKQogIC5scGYoMjAwMCkKICAvLy5jcnVzaCg3KQogIC5kZWNheSgwLjUpLnJhcmVseSh4ID0%2BIHguZGVjYXkoIlswLjJ8MC4zfDAuNF0iKSkKICAubHBmKGVuZXJneSkKICAucm9vbSgiWzAuNXwxXSIuZmFzdCg0KSkKICAucG9zdGdhaW4ocGljayhQRywgYmVhdCkpCi5fcHVuY2hjYXJkKHt3aWR0aDogMTQwMH0pCgpfSFdfVkVSU0VfQ0hPUFM6IHMoImh3OjEiKQogIC5zbGljZSgxNiwgIjF8Mnw0fDV8OXwxMHwxMXwxMnwxMyIuZmFzdCg0KSkuc3RydWN0KCJ4IikvLy5wbHkoMikKICAuY2hvcCg4KQogIC5jbGlwKDAuNSkucGx5KDIpCiAgLmN1dCgxKQogIC5scGYoc2xpZGVyKDQzNDAuMSwzMDAsNzAwMCkpCiAgLnJvb20oMSkucmZhZGUoMzApCiAgLnBvc3RnYWluKHBpY2soUEcsIGJlYXQpKS5nYWluKDMpCi5fcHVuY2hjYXJkKCkKX0hXX1NQRUVDSDogCiAgcygiPGhlbGxvIHdvcmxkPiIpLmJlZ2luKCI8MC4xOCAwLjE%2BIikKICAgIC8vcygiPGZldmVyIGtpbmE%2BIikuYmVnaW4oIjAuMDkiKQogIC5yb29tKDAuNSkKICAucG9zdGdhaW4oIjwwLjYgMT4iKQogIC8vLmZhc3QoOCkuY3V0KDEpCiAgLnNsb3coMikKICAuZWNobyg4LDAuMjUsMC43NSkKCkhXX0JBU1NMSU5FOiBuKGlyYW5kKCI8MSE3IDw4Pj4iLmZhc3QoMikpKS5zY2FsZSgiPGYyIGEyIGQyIGUyPjptaW5vcjpwZW50YXRvbmljIikKICAuc291bmQoImdtX3N5bnRoX2Jhc3NfMSwgc3F1YXJlIikKICAudHJhbnNwb3NlKCJbMCwgMTJdIikKICAvLyAuc3RydWN0KCJ4Iikucm9vbSgxKQogIC5zdHJ1Y3QoIngqMTYiKS5kZWNheSgwLjMpLmhwZigyMDApLnJvb20oMC41KQogIC5scGYoZW5lcmd5KQogIC5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSkuZ2FpbigwLjcpCiAgCi5fcHVuY2hjYXJkKHt3aWR0aDogMTQwMH0pCgoKCgpEUlVNUzogc3RhY2soCiAgcygidGVjaDo1IikucG9zdGdhaW4oNSkuaHBmKDc1KS5zdHJ1Y3QocGljayhTdHJ1Y3R1cmVzLCBiZWF0KSksCiAgCiAgcygiW34gY3BdIikuYmFuaygiS29yZ0RETTExMCIpLnNwZWVkKDEpLmZhc3QoMikucG9zdGdhaW4oMC4yKS5scGYoMzAwMCksCiAgcygiaGgiKS5zdHJ1Y3QoIlt4ITMgfiEyIHghMTAgfl0iKS5wb3N0Z2FpbigwLjUpLmJhbmsoIlJvbGFuZFRSODA4Iikuc3BlZWQoMS4yNSkucm9vbShzaW5lLnJhbmdlKDAuMSwgMC40KSkuZ2FpbigwLjYpLmp1eChyZXYpLAogIHMoIn4gaGgiKS5iYW5rKCJSb2xhbmRUUjgwOCIpLnJvb20oMC4yKS5zcGVlZCgwLjc1KS5nYWluKDAuNSkuZmFzdCg0KSwvLy5jbGlwKDAuMTUpLAogIC8vcygiYnJlYWtzMTY1IikuZ2FpbigwLjYpLmxvb3BBdCgxKS5maXQoKS5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSksCiAgLy9zKCJwc3I6WzJ8MTJ8MjR8MjVdIi5mYXN0KDQpKS5zdHJ1Y3QoInghNyB%2BIHghMyB%2BIHghMyB%2BIikuanV4KHJldikuaHBmKDIwMCkucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLnNwZWVkKDAuNSkuZ2FpbigwLjQpCikKLl9wdW5jaGNhcmQoe3dpZHRoOiAxNDAwLCBoZWlnaHQ6IDIwMH0p" width="100%" height="500"></iframe>


I was reading through the documentation of Strudel and I came across an article that was talking about **Hydra** (a visualiser that can be used inside of Strudel).

- [Hydra 🚀 Strudel](https://strudel.cc/learn/hydra/)
- [HYDRA Playground](https://hydra.ojack.xyz/?sketch_id=flor_1)

This got me thinking about how visuals could be tightly coupled to the sound structures and patterns I’m already generating inside Strudel.


## Wednesday

> Because i want to tell the story of techno on my juryset i stared listening to some techno sets from one of my favorite dj’s, Charlotte de Witte. She’s known for playing classic techno, trance and acid so i listed to her closing set of Tomorrowland 2025.

<iframe width="80%" height="400"
src="https://www.youtube.com/embed/fjnSF0K70q4"
title="Charlotte de Witte Tomorrowland 2025 Closing Set"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>

- At **8:30 minutes** she was using a sound where the crowd heavily reacted to.
- It resembled the *hey-ho* sound.
- I think it’s really interesting how she was able to make the crowd do that without even directly telling them to.

This made me think more about **call-and-response**, repetition, and how simple sound gestures can have a massive impact in a live context.


## Friday

<iframe width="200" height="400"
src="https://www.youtube.com/embed/x-_WyM7MuxI"
title="YouTube Shorts video"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>


<div class="week-grid" style="margin-top: 2em;">
	<a href="#" onclick="loadPage('blog', 'week-4'); return false;">
		<h3>Week 4</h3>
		<p>Performance &amp; optimization ideas.</p>
	</a>
	<a href="#" onclick="loadPage('blog', 'week-6'); return false;">
		<h3>Week 6</h3>
		<p>Sample documentation &amp; tutorials</p>
	</a>
</div>
