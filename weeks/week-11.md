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

I made the websiter using Astro and decided to store the recepies in a data folder (recipes.js) to maybe later convert them to an actual database but that will only be the case if I have time left. For now this way will do.
<img src="assets/images/week11_cbHome.png" alt="Homepage" width="100%"> 
<img src="assets/images/week11_cbEntree.png" alt="Entrées page" width="100%"> 
<img src="assets/images/week11_cbRecipe1.png" alt="recipe slug 1" width="100%"> 
<img src="assets/images/week11_cbRecipe2.png" alt="recipe slug 2" width="100%"> 


## Tuesday

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
