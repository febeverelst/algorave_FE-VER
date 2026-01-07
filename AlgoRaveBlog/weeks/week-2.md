# Week 2: 10 – 16 November 2025

###   Learning by Imitation & Experimentation
**Focus:** Learning Strudel through existing algorave practices, experimenting with parameters, and questioning audiovisual possibilities

---

## 🎧 Inspiration & Research

While browsing Instagram and TikTok, I started following several algorave artists who regularly post short live-coding snippets with explanations. Two artists that stood out immediately were **DJ_DAVE** and **switch_angel**.

What made their content valuable is that they don’t just show results but also explain *why* they use certain structures or values. I copied several of their examples into Strudel and started tweaking parameters to better understand the language.

At this stage, I still struggle with:
- creating harmonies  
- understanding which notes and sounds are available  
- finding a clear overview of options in the documentation  

This made me realize that learning Strudel is less about memorizing syntax and more about **developing musical intuition through experimentation**.

---

## 🎹 Musical Influences & Questions

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

---

## 🎛️ Algorave Experiments

### Based on DJ_DAVE — San Francisco Rave

This experiment was co-coded using a tutorial/sample from DJ_DAVE’s San Francisco performance.  
The bassline functions correctly, but the vocal chop does not play, probably because it relies on a **personal or custom sample**.

This made me aware of how much live-coding setups depend on personal sample libraries.

**this still needs to be fixed
<iframe src="https://strudel.cc/#code=BASSLINE%3A%20note%28%22g%232%4016%20a%232%408%20c3%403%20d%233%406%22%29%0A.struct%28%22x%2A16%22%29%0A.sustain%28%220.5%22%29%0A.sound%28%22%5Bsquare%2C%20sawtooth%5D%22%29%0A.transpose%28%22-12%2C%200%2C%207%22%29%0A.coarse%282%29%0A.decay%280.075%29.gain%280.75%29.hpf%28150%29%0A.lpf%28slider%284000%2C300%2C4000%29%29%0A%2F%2F.postgain%28pick%28PG%2C%20beat%29%29%0A._punchcard%28%7Bwidth%3A%20600%7D%29%0A%0AVOXCHOP1%3A%20s%28%22heartbeat%3A0%22.slow%282%29%29%0A.note%28%27g%231%27%29%0A.slice%288%2C%20%22%3C5%206%3E%22.fast%282%29%29%0A.gain%28%22%3C0.6%201.6%3E%22.slow%282%29%29.room%282%29%0A.lpf%28slider%284000%2C%20600%2C%204000%29%29" width="100%" height="500px"></iframe>

📎 Reference video:  
https://www.instagram.com/p/DOeyQ6ggQrR/

Another DJ_DAVE video worth analyzing later:  
https://www.instagram.com/p/DA4vr_gvZcJ/

---

### Based on *switch_angel* — Acid Patterns

I discovered switch_angel through TikTok and Instagram. Her work stood out because of its stylistic diversity, which shows a deep understanding of the coding language.

She posts structured explanations of her samples and functions. I first recreated her code exactly, then gradually altered notes, values, and scales to understand their effect.

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

### First Own Melody Using *switch_angel’s* Acid Function

This was an important moment for me: I created this melody in **15 minutes**, which is extremely fast compared to earlier attempts.

It made me realize that:
- reusable functions (like the acid envelope) speed up creativity  
- I need to study **frequencies, scales, and note relationships** more deeply  

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

## 🎚️ Thursday — Equipment & Consultation

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

## 🚬 In-Between Session Experiment

I quickly formed this melody when my teammates were taking a smoke outside. It was just finished when they came back. I looked up online how long an average cigarette break takes and that’s about 5 to 7 minutes. So i improved in timespeed but it’s not my proudest melody because i just added some notes and prayed that it would work. Again using angel’s acid function made it already sound way cooler and with the sliders i could kinda build up momentum and then i added a bassdrum to create a drop.

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

📺 Reference video:  
https://www.youtube.com/watch?v=HkgV_-nJOuE

---

## 🧩 Segments & Building Blocks

These segments function as **reusable studies** rather than finished compositions.

### DJ_DAVE Voice Sampler (Non-functional without custom samples)

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

### switch_angel — Fast Acid Structure

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

### Own Melody (Based on Previous Samples & Film Soundtracks)

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

### Random Acid Notes Experiment

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>

---

### Code-Along with DJ_DAVE

<iframe src="https://strudel.cc/" width="100%" height="500px"></iframe>
