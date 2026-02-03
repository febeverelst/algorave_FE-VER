<a href="#" onclick="loadPage('blog'); return false;" style="font-size: 0.9em; color: #888;">← Back to Daily Log</a>

# Week 13: 2 February – 7 February 2026

## Monday

My goal today is to make the OBS studio stream work so that I can use it on my jury to have both my Strudel and P5LIVE visible.

### Setting up
<img src="assets/images/week13_OBSdownload.png" alt="Download screen OBS studios" width="100%"> 

I downloaded the Apple Silicon version since I use a macbook air 2022 with a M2 chip. After downloading I made use of the auto-configuration wizard selecting these options:
- optimize just for recording, i will not be streaming
- 60 or 30 fps but prefer 60 when possible
- 1920x1080 resolution, H.264
- allow external input/output

This is the editor: 
<img src="assets/images/week13_OBSeditor.png" alt="OBS editor interface" width="100%"> 

The official [OBS website](https://obsproject.com/) contains a [starterguide](https://obsproject.com/kb/quick-start-guide) to get things up and running.

These are the steps I took:
1. Adding a scene with the `+`-button on the left bottom corner, naming it "Strudel + Visual"
2. Creating visual window in _source panel_, option: macOS screencapture
3. Change method from _display capture_ to _window capture_
4. Check the `show fullscreen and hidden windows / applications` checkbox
5. Choose your desired window

My editor looks like this now (ps. I used a quick pinterest picture for visuals)
<img src="assets/images/week13_OBSvisuals.png" alt="OBS editor with visual screen layer" width="100%"> 

6. Creating Strudel window in _source panel_, option: macOS screencapture
7. Repeat steps 3 to 5 for this window capture

I dragged my Strudel source above my visuals source so that are currently overlayed ontop of eachother, looking like this:
<img src="assets/images/week13_OBSstrudel.png" alt="OBS editor with strudel screen layer" width="100%"> 

I cropped the screen capture so that the adress bar, tabs and bookmarks aren't visible in both screens. Next step it to lock the layers in place by clicking the _lock-icon_ next to both Strudel and Visuals to prevent accidental dragging during a preformance.

At the moment, my layers are just ontop of eachother making only the top layer visible. That has to change since I want to have both windows visible in the same fullsize format. In OBS Studio you are able to put filters on your sources by _right-clicking_ the layer and selecting _filters_. Next I followed these steps:

1. On the Effect filters windown, click the `+`-button
2. Choose _Colour Correction_
3. Set gamma to `-2.7`
4. Set contrast to `1`
5. Set brightness to `-0.5`
6. Set hue shift to `180.00`
7. Set opacity to `0.3`

### The Result
<img src="assets/images/week13_OBSresult.png" alt="OBS editor final screen" width="100%"> 

To be able to see the Full screen you _right click_ anywhere in the editor and select _Open Preview Projector_

## Tuesday
I deployed the cookbook on friday but I just now noticed some issues with the URL path; The initial homepage is correct but then when you want to continue browsing to other pages it leaves out the `/algorave_FE-VER` after the `febeverelst.github.io`. 

The correct basepath should be _febeverelst.github.io/algorave_FE-VER/cookbook_. Im guessing the problem is with the astro.config.mjs file because I had to specify the basepath there since im deploying with github pages. I also have the scenario where I deploy two separate folders in one repository.

This was the astro.config.mjs when I had the issue:

<img src="assets/images/week13_astroConfig1.png" alt="v1 of astro.config.mjs" width="50%"> 

And I changed it to:

<img src="assets/images/week13_astroConfig2.png" alt="v2 of astro.config.mjs" width="50%"> 

---
<div class="week-grid" style="margin-top: 2em;">
    <a href="#" onclick="loadPage('blog', 'week-12'); return false;">
        <h3>Week 12</h3>
        <p>Finalizing Cookbook, website adjustments, and preparing live performance.</p>
    </a>
</div>