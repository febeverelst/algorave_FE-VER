<a href="#" onclick="loadPage('blog'); return false;" style="font-size: 0.9em; color: #888;">← Back to Daily Log</a>

# Week 11: 19–25 January 2026

## Monday

I start the day with summarizing what I did previous week to adapt/improve my planning. 

### The proces

To import custom samples into your project you need to have and active github repo present. Since I already have mine for this project I created a new folder "Samples" where I could start importing my audio files. Once imported into github I can just use this link to have the samples available `samples('github:febeverelst/algorave_FE-VER/main/Samples')`

Because they come from _.mp4's_ I had to convert them to _.mp3's_, normally strudel should be able to read that. 

I created a JSON-file and added the paths to the audio samples in there.
<img src="assets/images/week11_sampleJson.png" alt="JSON file with samples" width="100%"> 

Now with with import function we should be able to import the sound files into our strudelREPL and use those.
<img src="assets/images/week11_sampleREPL.png" alt="REPL with imported samples" width="100%"> 

Looking at the side window on the user-tab showed me that the files are succesfully loaded in the REPL
<img src="assets/images/week11_sampleImports.png" alt="proof of imported samples" width="100%"> 

But the audio wouldn't play. I didn't get any errors and the _._punchard()_ function told me that the REPL was recognising the notes, just the sound was an issue. Normally _mp3_ should be fine but to be sure I also converted the audio files to _.wav_. I lost a lot of time doing this for it to still not play any sound, but now at least my console was giving me error feedback `[getTrigger] error: Unable to decode audio data`.

This meant that my .wav file was corrupted, probably because I went from MP4 to MP3 to WAV. I opened _Adobe Audition_ to directly convert my _mp4 to wav_ hoping that it would be cleaner and not break my audio file.  But I still got the same error...!?

### Inbetween discovery

As I was looking at the REPL under the sound category I saw the tab _import-sounds_ so I clicked and I found this page:
<img src="assets/images/week11_importSound.png" alt="proof of imported samples" width="100%"> 

I uploaded my samples folder in there and the `try`-sound worked now, but the others didn't. The actual vocals that I want to use still give me the _decoding failed error_

> I found this really cool [sample library](https://samples.landr.com/browse?tab=samples&instruments=vocals&utm_source=google&utm_medium=paid_search&utm_campaign=sales_samples_en_intl_generic&utm_term=vocal+samples&utm_content=756223495604&gad_source=1&gad_campaignid=20410427518&gbraid=0AAAAADpPPVE3h6wRomFNtPtvepKqUtHNx&gclid=CjwKCAiAybfLBhAjEiwAI0mBBmibiKsF2iMn6X3cPF9hMpi8HsaqxY4isEhwB0g4HJERRiJMA7-SIhoCWTYQAvD_BwE&genres=techno&bpmlowerbound=140&bpmupperbound=160&page=2) that I could use for finding different vocal samples that I want to use.

---

I've decided to let the samples rest for a minute and focus back on the cookbook. I was talking with Jana, a friend of mine that is also studying Devine, and she asked me if I was planning on doing the Cookbook online or on paper. That made me realise that I actually don't know on what medium I'll be doing the cookbook on. I Thought it was obvious that I would do it on paper since it's a cookbook but if people will be using it during a set, as intended, it would be much easier for them to copy past the part and then start modifying it. Meaning that I have to make another website

### Cookbook Website
I stared by just quickly adding 3 pieces in there to have an overview and something to show on my consult for the next day.

I made the website using Astro and decided to store the recepies in a data folder (recipes.js) to maybe later convert them to an actual database but that will only be the case if I have time left. For now this way will do.
<img src="assets/images/week11_cbHome.png" alt="Homepage" width="100%"> 
<img src="assets/images/week11_cbEntree.png" alt="Entrées page" width="100%"> 
<img src="assets/images/week11_cbRecipe1.png" alt="recipe slug 1" width="100%"> 
<img src="assets/images/week11_cbRecipe2.png" alt="recipe slug 2" width="100%"> 


## Tuesday
After a nights rest I realised that the content should be VERY easily accessible for people to quickly reach and with how the content now is placed the people have to scroll first to get to the method part of the recipe page. So I adapted the layout to have all the content visible before the fold of the page.

<img src="assets/images/week11_cbRecipe2.0.png" alt="recipe slug 2" width="100%"> 

### AKAI MPD226 x Strudel communication
Recapping back to last friday where I tried connecting the MIDI PAD Controller to my strudel, I failed big time. I couldn't figure out how to connect the Control Channels to the connection with strudel. With the consult that I had today we finally figured out what the problem was. I was doing things that the documentation was telling me to do: initialising the Midi-connection and then setting the variable on a function that I want to modify

```
let cc = await midin('MPD226 Port A')
note("c a f e").lpf(cc(0).range(0, 1000)).lpq(cc(1).range(0, 10)).sound("sawtooth")
```

Only this didn't work. I got the console message that the connection was made with the strudel and that it could start reading, only it didn't read?!

I asked it to ChatGPT and it told me that it probably had to do with the control channel value that had to wrong number. Looking back at the MPD226-software I saw that I was indeed using the wrong numbers.

<img src="assets/images/week11_mpdEditor.png" alt="MPD226 editor interface" width="60%"> 

In the image above you see the interfact of the _MPD226 Editor_. You can click on the different pads, sliders and knobs to reveal more information about them, including what cc-number I should normally use to get the serial information flowing.

But those number weren't working either so we looked for half an hour, watching youtube videos, opening random websites and asking AI for more information and clarity. We then found a website where you can test your MIDI Controller and that would directly tell us what contols were being activated. So we connected the AKAI again and opend the [WEBSITE](https://versioduo.com/webmidi-test/?utm_source=chatgpt.com). 

<img src="assets/images/week11_midiTester.png" alt="webMidi tester" width="100%"> 

With the connection in place, by selecting the "MPD226 Port A" on the bottom underneath the "recieve midi", we could now see exactly what values were being changed by what controller. From there we could lead to the conclusion that the slider had the cc-numbers: 12 13 14 15, instead of: 20 21 22 23.

Now we tried it out with those number and IT WORKED! FINALLY!

**Disclaimer**: This next code block will only work with an AKAI MPD226 connection though port A:
<iframe src="https://strudel.cc/#CmxldCBjYyA9IGF3YWl0IG1pZGluKCdNUEQyMjYgUG9ydCBBJykKCnNhbXBsZXMoJ2dpdGh1Yjp0aWRhbGN5Y2xlcy9kaXJ0LXNhbXBsZXMnKQpzYW1wbGVzKCdnaXRodWI6YWxnb3JhdmUtZGF2ZS9zYW1wbGVzJykKc2V0Q3BzKDE0MC82MC80KQoKY29uc3QgU3RydWN0dXJlcyA9IFsKICAie359IiwKICAieCo0IiwKICAie3ggfiE2IHggfiB%2BIHggfiEzIHggfn0lMTYiLAogICJ7eCB%2BITMgeCB%2BITMgeCB%2BITIgeCB%2BITIgeCB%2BfSUxNiIsCiAgInt4IH4hOSB4IH4hNSB4IH4geCB%2BITcgeCB%2BITMgPCB%2BIHggPiB%2BfSUxNiIsCiAgInt4IH4hMyB4IH4hMyB4IH4hMyB4KlsyfDNdIH4hM30lOCIKXQoKY29uc3QgUEcgPSBbCiAgInswLjh9IiwKICAiezAuNSAwLjh9Ii5mYXN0KDQpLAogICJ7MC4zIDAuOCE2IDAuMyAwLjghMiAwLjMgMC44ITMgMC4zIDF9IiwKICAiezAuMyAwLjghMyAwLjMgMC44ITMgMC4zIDAuOCEyIDAuMyAwLjghMiAwLjMgMC44fSUxNiIsCiAgInswLjQgMSE5IDAuNCAxITUgMC40IDEgMC40IDEhNyAwLjQgMSEzIDwxIE8uND4gMX0lMTYiLApdCgpjb25zdCBiZWF0ID0gNAovLzAgLSBPRkYKLy8xIC0gNE9URgovLzIgLSBIUiBNQUlOCi8vMyAtIEpFUlNFWSBDTFVCCi8vNCAtIEdJMk0KLy81IC0gSU1QUk8KCgpMRUFEOiBuKCI8MCAzIDAgNiA3IDcgMiA1Pio4Iikuc291bmQoInNhdywgc3VwZXJzYXciKS5zY2FsZSgiZiMzOm1pbm9yOnBlbnRhdG9uaWMiKQogIC5zbG93KCIxIDAuNSAyIikucGx5KCIxQDIgWzJ8NF0iKQogIC5scGYoY2MoMTIpLnJhbmdlKDQwMCwgODAwMCkpCiAgLmdhaW4oY2MoMTMpLnJhbmdlKDEsIDQpKQogIC5yb29tKGNjKDE0KS5yYW5nZSgwLCAyKSkKICAuZGVjYXkoMC4wNzUpCiAgLy8uZ2FpbigyKQogIC8vLnJvb21zaXplKDIpCiAgLnBhbihyYW5kKQogIC8vLmp1eChyZXYpCiAgLnBvc3RnYWluKHBpY2soUEcsIGJlYXQpKQouX3B1bmNoY2FyZCgpCgpfUkFORF9TUEVBSzogcygic3BlYWtzcGVsbDo8WzEyIDhdIFszIFsxMHw1XSBbM3wxMV1dPio0IikvLy5maXQoKQogIC5wbHkoIjQiKQogIC5zbG93KCI8MkAzIDE%2BIikvLy5yZXYoKQogIC8vLmdhaW4oMC41KQogIC5yb29tKDEpLnJvb21zaXplKCI0IikKICAuZGVsYXkoLjIpCiAgLmxwZihjYygxMikucmFuZ2UoNDAwLCA4MDAwKSkKICAvLy5scGYoMTAwMCkKICAvLy5wYW4oc2luZSkKICAvLy5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSkKLl9wdW5jaGNhcmQoKQoKRFJVTVM6IHN0YWNrKAogIHMoInRlY2g6NSIpLnBvc3RnYWluKDUpLmhwZig3NSkuc3RydWN0KHBpY2soU3RydWN0dXJlcywgYmVhdCkpLC8vLmdhaW4oMSksCiAgCiAgcygiW34gY3BdIikuYmFuaygiS29yZ0RETTExMCIpLnNwZWVkKDEpLmZhc3QoMikucG9zdGdhaW4oMC43KSwKICBzKCJoaCIpLnN0cnVjdCgiW3ghMyB%2BITIgeCExMCB%2BXSIpLnBvc3RnYWluKDAuNykuYmFuaygiUm9sYW5kVFI4MDgiKS5zcGVlZCgxLjI1KS5yb29tKHNpbmUucmFuZ2UoMC4xLCAwLjQpKS5nYWluKDAuOCkuanV4KHJldiksCiAgcygifiBoaCIpLmJhbmsoIlJvbGFuZFRSODA4Iikucm9vbSgwLjIpLnNwZWVkKDAuNzUpLmdhaW4oMC41KS5mYXN0KDQpLC8vLmNsaXAoMC4xNSksCiAgLy9zKCJicmVha3MxNjUiKS5nYWluKDAuNikubG9vcEF0KDEpLmZpdCgpLnBvc3RnYWluKHBpY2soUEcsIGJlYXQpKSwKICAvL3MoInBzcjpbMnwxMnwyNHwyNV0iLmZhc3QoNCkpLnN0cnVjdCgieCE3IH4geCEzIH4geCEzIH4iKS5qdXgocmV2KS5ocGYoMjAwKS5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSkuc3BlZWQoMC41KS5nYWluKDAuNCkKKQouX3B1bmNoY2FyZCh7d2lkdGg6IDE0MDAsIGhlaWdodDogMjAwfSk%3D"
 width="100%" height="500"></iframe>

## Wednesday

I started tonday with looking up some theory. I'm a big fan of acid techno but in order to have that vibe you need a very specific sound. I started with google and the AI-suggestion already gave a very detailed description of how to achieve the acid sound.

### Acid Exploration

> The "acid sound" in electronic music, known for its distinctive "squelching" or "gurgling" quality, is primarily created using a Roland TB-303 synthesizer (or emulations) by heavily modulating a low-pass filter with high resonance, combined with techniques like adding distortion, using accent/slide functions, and automating filter cutoff/resonance for that signature evolving, liquid sound. 
>
> Here's a breakdown of the core elements:
> - **_The Synthesizer_**: The Roland TB-303 bass synthesizer is the original source of the sound, famous for its unique filter section.
> - **_Low-Pass Filter_**: This filter removes higher frequencies, but when cranked up, it lets certain frequencies through.
> - **_Resonance (Q)_**: Turning up the resonance creates a peak at the cutoff frequency, emphasizing those specific tones and causing the "squelch".
> - **_Cutoff Frequency_**: Automating the cutoff frequency (sweeping it up and down) makes the sound change pitch and texture rapidly.
> - **_Accent & Slide_**: The TB-303's built-in accent (for punchy notes) and slide (for smooth pitch bends) functions are key for rhythmic variations.
> - **_Distortion/Overdrive_**: Adding saturation or distortion makes the sound scream and become more aggressive. 

I gave this to AI and asked it to create me something with this information and I got this :/

<iframe src="https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCkFDSUROT1RFUzogbm90ZSgiPGMyIGMyIGcxIGMyIFtjMiBnMV0gYzI%2BIikKICAuc291bmQoInNhd3Rvb3RoIikKICAubGVnYXRvKCI8MSAxIDEuNSAxIDI%2BIikKICAuZ2FpbigiPDAuOCAwLjggMS4yIDAuOCAxLjM%2BIikKICAubHBmKHNpbmUucmFuZ2UoNDAwLCAzMDAwKS5zbG93KDQpKQogIC5scHEoMC44NSkKICAuZGlzdG9ydCgwLjYpCg%3D%3D"
 width="100%" height="500"></iframe>

After the consult yesterday I had some hopes that AI would've improved by now but this just shows that I really can't trust it for this project...

So I went back to one of my favorite strudel DJ's (Switch_angel) and took inpiration from her video. 
<iframe width="100%" height="400"
src="https://www.youtube.com/watch?v=HkgV_-nJOuE"
title="Fast Acid Switch_angel"
frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
allowfullscreen></iframe>
This made me happy again :) 
Remove the "_" infront of the _QUICKDRUM_ function when you see fit and press ctrl+enter for the beat to drop ;)


<iframe src="https://strudel.cc/#CgpzZXRDcHMoMTQwLzYwLzQpCgpfUVVJQ0tEUlVNOiBzKCJzYmQhNCIpLmRpc3RvcnQoIjM6LjMiKQogIC5kdWNrKCIyOjM6NCIpLmR1Y2thdHRhY2soLjIpLmR1Y2tkZXB0aCguOCkKICAuX3Njb3BlKCkKCkFDSUROT1RFUzogbm90ZShpcmFuZCgxMCkuc3ViKDcpLnNlZygxNikpLnNjYWxlKCJjOm1pbm9yIikKICAuc291bmQoInNhd3Rvb3RoIikKICAubHBmKDIwMCkubHBlbnYoc2xpZGVyKDQuMDI0LDAsOCkpLmxwcSgxMikub3JiaXQoMikKICAucmliKDQ2LDEpCiAgLmRpc3RvcnQoIjIuMjouMyIpCi5fcHVuY2hjYXJkKCkKJDogcygnc3VwZXJzYXcnKS5kZXR1bmUoMSkucmVsKDUpLmJlYXQoMiwgMzIpLnNsb3coMikub3JiaXQoMykKICAuZm0oIjIiKS5mbWgoMi4wNCkKICAucm9vbSgxKS5yb29tc2l6ZSg2KQouX3B1bmNoY2FyZCgpCiQ6IHMoInB1bHNlIikub3JiaXQoNCkuc2VnKDE2KS5kZWMoMSkuZm0odGltZSkuZm1oKHRpbWUpCgo%3D"
 width="100%" height="500"></iframe>

Next, I connected the Midi pad to this session and made something really cool with it. I would be able to achieve the exact same thing without the AKAI but that required me to add multiple slider and then i'd have to change them one by one. But since I used the AKAI, I was able to change multiple values at one with just one hand and 3 fingers making the experience much more professional and better sounding.

 <iframe src="https://drive.google.com/file/d/1aB9Wy1-5nVKDK44VIKZ3y1d2b-_PiSaz/preview" width="60%" height="500px" style="border: 1px solid #30363d; border-radius: 6px;"></iframe>

 I thought it would also be cool to add a vocal sample so I imported my samples file locally and experimented a bit with those

``` 
VOCAL: s("vocals:4").begin("<[.5|.4] <[.3|.8] [.2|.4]>>")
  .clip(.99)
  //.room(2)
  .orbit(5)
  .gain(cc(12).range(0,1))
._punchcard()
```

### Cookbook Additions

I started modifying the content of the _entrées_ to have a clear and refined idea of how I want to put all the different recipes on there.

### Wednesday Evening Sidequest

I was originally going to sleep but I got sidequested with this banger. Enjoy!!

> remove the underscore from the top function and press _ctrl+enter_ to drop the beat.

<iframe src="https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCl8kOiBzKCJzYmQ6MiE0IikuZHVjaygiMjozOjQiKS5kdWNrYXR0YWNrKC4yKS5kdWNrZGVwdGgoMikuX3Njb3BlKCkKJDogbigiPDNAMyA0IDUgQDMgNj4qMiIuYWRkKCItMTQsIC0yMSIpKS5zY2FsZSgiZzptaW5vciIpCi5zKCJzdXBlcnNhdyIpCi5vcmJpdCgyKQouc2VnKDE2KQoubHBlbnYoMikKCiQ6IG4oIjBAMiA8LTcgWy01IC0yXT5AMyA8MCAtMyAyIDE%2BQDMiLmFkZCg3KQogICAgLmFkZCgiPDUgNCAwIDwwIDI%2BPiIpCiAgICApCi5zY2FsZSgiZzptaW5vciIpCi5zKCJzdXBlcnNhdyIpCi5vcmJpdCgzKQouZGVsYXkoLjcpLnBhbihyYW5kKS5yb29tKDEpLnJvb21zaXplKDQpCi8vLmZtKC41KS5mbXdhdmUoIndoaXRlIikKLmxwZihzbGlkZXIoMTY0MCwgNDAwLCAyMDAwKSkKLmxwZW52KDIpLl9wdW5jaGNhcmQoKQpfJDpzKCJwdWxzZSExNiIpLmRlYyguMSkuZm0odGltZSkuZm1oKHRpbWUpLm9yYml0KDQp"
 width="100%" height="500"></iframe>

## Thurdays

Right now i really have to force myself to start adding all the content to the cookbook and make it as complete as possible. I would really like to test it this weekend with my sister and maybe some friends if I have time.

> I git a little sidetracked once again and looked back at some old sessions that I did and with all the new knowledge I have obtained these past fex weeks did some modification to make it sound even better

<iframe src="https://strudel.cc/#CnNldENwcygxODAvNDAvNCkKY29uc3QgbHBmID0gc2xpZGVyKDY1Ny4xLDEwMCwgMTAwMCkKCkxFQURISUdIOiBuKGlyYW5kKDgpLnNlZyg0KS5hZGQoIi03LCAtMjEiKSkuc291bmQoInNhdyIpLnNjYWxlKCJmIzM6bWlub3I6cGVudGF0b25pYyIpLmxwZihscGYpCiAgLnNsb3coIjEgMiAwLjUgMiIpLnJldigpLnJvb20oMSkuZGVjYXkoMC43NSkvLy5ocGYoODAwKQogIC8vLm9yYml0KDIpCi5fcHVuY2hjYXJkKCkKCkxFQURNRUxPRFk6IG4oIjwwIDRAMyAwIDQgMEA0IDwxIDAgMj5AMj4qNCIuYWRkKCI1LCAtNywgMCIpLmFkZCgiPDUgNCAwIDwxIDM%2BPi80IikpCiAgLnNvdW5kKCJzdXBlcnNhdyIpLnNjYWxlKCJmIzM6bWlub3I6cGVudGF0b25pYyIpCiAgLnNlZyg4KQogIC5kZWxheSguNCkucm9vbSgxKS5yb29tc2l6ZSg0KQogIC5vcmJpdCgiMyIpCiAgLy8uc2xvdygiMSAyIDAuNSIpLnZvd2VsKCJbaXx1XSIpCi5fcHVuY2hjYXJkKCkKCl9CQVNTS0lDSzogcygic2JkOjIhMiIpLl9wdW5jaGNhcmQoKQoubHBmKDIwMCkKCktJQ0s6IHMoImJkOjIhMiIpLmR1Y2soIjI6Mzo0IikuZHVja2F0dGFjayguMikuX3Njb3BlKCkKX0tJQ0syOiBzKCJoaDoyKjQiKS5fc2NvcGUoKQ%3D%3D"
 width="100%" height="500"></iframe>

 ### Cookbook Progress
 I'm having a very hard time making progress with the cookbook because I'd rather experiment more with strudel and the opportunities there to get even better and make more impressive sets. But I've established the idea of making a cookbook for others to make it accessible so I'll have to stick with it.

 I had a hard time finding a structure for myself to get all the content so I went back to _Notion_ and made a page there where I could collect all the information I need.
<img src="assets/images/week11_notionCook.png" alt="notion cookbook" width="100%"> 

 ## Friday
 I added _Main Courses and Sides_ to the recipe content in _Notion_. I've come to realise that it's actually taking way longer to build the pre-sets for on the cookbook. Im also constantly testing if the work together with other things in the cookbook so that the people that would be using it can actually create something with it and not just use one segment without the others working alongside it.
 
<img src="assets/images/cookbook_nav1.png" alt="notion cookbook" width="25%"> 
<img src="assets/images/cookbook_nav2.png" alt="notion cookbook" width="25%"> 
<img src="assets/images/cookbook_nav3.png" alt="notion cookbook" width="25%"> 
<img src="assets/images/cookbook_nav4.png" alt="notion cookbook" width="25%"> 
<img src="assets/images/cookbook_nav5.png" alt="notion cookbook" width="25%"> 

---

<div class="week-grid" style="margin-top: 2em;">
	<a href="#" onclick="loadPage('blog', 'week-10'); return false;">
		<h3>Week 10</h3>
		<p>Placeholder for Week 10.</p>
	</a>
	<a href="#" onclick="loadPage('blog', 'week-12'); return false;">
		<h3>Week 12</h3>
		<p>Placeholder for Week 12.</p>
	</a>
</div>
