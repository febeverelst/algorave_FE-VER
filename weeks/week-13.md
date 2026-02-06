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


> _UPDATE:_ I made a few VERY (!) rookie mistakes. I had to change the paths in my baselayout and then when I comitted i expected it to work... But it didn't. 
> I changed and comitted around 4 times untill i realised that github pages only takes the dist-file from my astro project. Meaning that I had to re-build the project in order for the changes to be visible. So I went back to the version where I was certain that it would work. Re-build the project again and comitted it a final time before I gave myself some resting time because I was getting mad. 
>
> And ofcourse that was it! It works now

Check out the First edition of the FE_VER Cookbook! :)

https://febeverelst.github.io/algorave_FE-VER/cookbook/

## Wednesday

Today I put all my favorite patterns inside a big strudel file myself to play around with all my proudest parts. 

<iframe src="https://strudel.cc/#Ci8vIHdlIGdhYW4gd2Vya2VuIG1ldCBkZSBBS0FJIGNvbnRyb2xsZXIKLy8gZGUgc2xpZGVycyB6aWpuIHZvb3Jsb3BpZyBub2cgaW4gZGUgZnVuY3RpZXMKCnNhbXBsZXMoJ2dpdGh1Yjp0aWRhbGN5Y2xlcy9kaXJ0LXNhbXBsZXMnKQpzYW1wbGVzKCdnaXRodWI6YWxnb3JhdmUtZGF2ZS9zYW1wbGVzJykKc2V0Q3BzKDE0MC82MC80KQoKLy8g4paI4paI4paI4paI4paI4paI4paI4pWX4paI4paI4paI4paI4paI4paI4paI4pWXICAgICAgIOKWiOKWiOKVlyAgIOKWiOKWiOKVl%2BKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl%2BKWiOKWiOKWiOKWiOKWiOKWiOKVlyAKLy8g4paI4paI4pWU4pWQ4pWQ4pWQ4pWQ4pWd4paI4paI4pWU4pWQ4pWQ4pWQ4pWQ4pWdICAgICAgIOKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVlwovLyDilojilojilojilojilojilZcgIOKWiOKWiOKWiOKWiOKWiOKVlyAgICAgICAgIOKWiOKWiOKVkSAgIOKWiOKWiOKVkeKWiOKWiOKWiOKWiOKWiOKVlyAg4paI4paI4paI4paI4paI4paI4pWU4pWdCi8vIOKWiOKWiOKVlOKVkOKVkOKVnSAg4paI4paI4pWU4pWQ4pWQ4pWdICAgICAgICAg4pWa4paI4paI4pWXIOKWiOKWiOKVlOKVneKWiOKWiOKVlOKVkOKVkOKVnSAg4paI4paI4pWU4pWQ4pWQ4paI4paI4pWXCi8vIOKWiOKWiOKVkSAgICAg4paI4paI4paI4paI4paI4paI4paI4pWX4paI4paI4paI4paI4paI4paI4paI4pWX4pWa4paI4paI4paI4paI4pWU4pWdIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl%2BKWiOKWiOKVkSAg4paI4paI4pWRCi8vIOKVmuKVkOKVnSAgICAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWd4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWdIOKVmuKVkOKVkOKVkOKVnSAg4pWa4pWQ4pWQ4pWQ4pWQ4pWQ4pWQ4pWd4pWa4pWQ4pWdICDilZrilZDilZ0gIAoKY29uc3QgU3RydWN0dXJlcyA9IFsKICAie359IiwKICAieCo0IiwKICAie3ggfiE2IHggfiB%2BIHggfiEzIHggfn0lMTYiLAogICJ7eCB%2BITMgeCB%2BITMgeCB%2BITIgeCB%2BITIgeCB%2BfSUxNiIsCiAgInt4IH4hOSB4IH4hNSB4IH4geCB%2BITcgeCB%2BITMgPCB%2BIHggPiB%2BfSUxNiIsCiAgInt4IH4hMyB4IH4hMyB4IH4hMyB4KlsyfDNdIH4hM30lOCIKXQoKY29uc3QgUEcgPSBbCiAgInswLjh9IiwKICAiezAuNSAwLjh9Ii5mYXN0KDQpLAogICJ7MC4zIDAuOCE2IDAuMyAwLjghMiAwLjMgMC44ITMgMC4zIDF9IiwKICAiezAuMyAwLjghMyAwLjMgMC44ITMgMC4zIDAuOCEyIDAuMyAwLjghMiAwLjMgMC44fSUxNiIsCiAgInswLjQgMSE5IDAuNCAxITUgMC40IDEgMC40IDEhNyAwLjQgMSEzIDwxIE8uND4gMX0lMTYiLApdCgpjb25zdCBiZWF0ID0gMQovLzAgLSBPRkYKLy8xIC0gNE9URgovLzIgLSBIUiBNQUlOCi8vMyAtIEpFUlNFWSBDTFVCCi8vNCAtIEdJMk0KLy81IC0gSU1QUk8KICAgICAgICAKCgoKLy8gLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXAoKX0hVTU1FUjogbigiMCoxNiIpLnMoInNhd3Rvb3RoLCBzdXBlcnNhdyIpCiAgLmxwZihzbGlkZXIoMjk0LjQsIDEwMCwgNzAwKSkKICAuZm0oIjIiKS5mbWgoMi4wNCkKICAuZGVjKC42KQogIC5vcmJpdCgyKQogLl9wdW5jaGNhcmQoKQpfUFVMU0VSOiBzKCdzdXBlcnNhdycpLmRldHVuZSgxKS5yZWwoNSkuYmVhdCgyLCAzMikuc2xvdygyKQogIC5mbSgiMiIpLmZtaCgyLjA0KQogIC5yb29tKDEpLnJvb21zaXplKDYpCiAgLnBvc3RnYWluKDEpCi5fcHVuY2hjYXJkKCkKX1RSQU5DRV9CQVNFOiBuKCI8M0AzIDQgNSBAMyA2PioyIi5hZGQoIi0xNCwgLTIxIikpLnNjYWxlKCJnOm1pbm9yIikKLnMoInN1cGVyc2F3IikKLm9yYml0KDMpCi5zZWcoMTYpCi5scGYoc2xpZGVyKDQ5Mi44LCA0MDAsIDIwMDApKQoubHBlbnYoMikKCl9UUkFOQ0VfTEVBRDogbigiMEAyIDwtNyBbLTUgLTJdPkAzIDwwIC0zIDIgMT5AMyIuYWRkKDcpCiAgICAuYWRkKCI8NSA0IDAgPDAgMj4%2BIikKICAgICkKLnNjYWxlKCJnOm1pbm9yIikKLnMoInN1cGVyc2F3IikKLmRlbGF5KC43KS5wYW4ocmFuZCkKLnJvb20oMSkucm9vbXNpemUoNCkKLm9yYml0KDIpCi5scGYoc2xpZGVyKDQwMCwgNDAwLCAyMDAwKSkKLmxwZW52KDIpLl9wdW5jaGNhcmQoKQpBQ0lETk9URVM6IG5vdGUoaXJhbmQoMTApLnN1Yig3KS5zZWcoMTYpKS5zY2FsZSgiYzptaW5vciIpCiAgLnNvdW5kKCJzYXd0b290aCIpCiAgLmxwZigyMDApLmxwZW52KHNsaWRlcig0LjIxMywxLDgpKQogIC5scHEoMTIpLm9yYml0KDIpCiAgLnJpYig0NiwxKQogIC5kaXN0b3J0KCIyLjI6LjMiKQouX3B1bmNoY2FyZCgpCgpfRkVfVkVSX0lEOiBuKCI8MCAzIDAgNiA3IDcgMiA1Pio4Iikuc291bmQoInNhdywgc3VwZXJzYXciKS5zY2FsZSgiZiMzOm1pbm9yOnBlbnRhdG9uaWMiKQogIC8vLnNsb3coIjEgMC41IDIiKQogIC8vLmRlY2F5KDAuMDc1KQogIC8vLmdhaW4oMikucm9vbSgxKQogIC5kZWxheSguMikucm9vbSguNikKICAvLy5wbHkoIjFAMiAyIikKICAucGFuKHJhbmQpCiAgLy8ub3JiaXQoMikKICAvLy5qdXgocmV2KQogIC8vLmRpc3RvcnQoIjU6LjEiKQouX3B1bmNoY2FyZCgpCgpfUkFORE5PVEVTOiBuKGlyYW5kKCI8MSE3IDw4Pj4iKS5zZWcoOCkpLnNjYWxlKCI8ZjIgYTIgZDIgZTI%2BOm1pbm9yOnBlbnRhdG9uaWMiKQouc291bmQoImdtX3N5bnRoX2Jhc3NfMSwgc3F1YXJlIikKLy8uc3RydWN0KCJ4KjE2IikKLnBseSgiPDFANyAyPiIpCi50cmFuc3Bvc2UoIlswLCAtN10iKQoubHBmKHNsaWRlcigyNTU5LjgsIDIwMCwgNDAwMCkpCi8vLmp1eChyZXYpCi5vcmJpdCgzKQoucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLmdhaW4oMC43KQouX3B1bmNoY2FyZCh7d2lkdGg6IDE0MDB9KQpfVE1XOiBuKGA8Clt%2BIDBdIDIgWzAgMl0gW34gMl0KW34gMF0gMSBbMCAxXSBbfiAxXQpbfiAwXSAzIFswIDNdIFt%2BIDNdClt%2BIDBdIDIgWzAgMl0gW34gMl0KPio0YCkKLnNjYWxlKCJDNDptaW5vciIpCi5scGYoc2xpZGVyKDUyMjYsIDQwMCwgODAwMCkpCi8vLm9yYml0KDQpCi5yb29tKDIpLnJvb21zaXplKDIpCi5zb3VuZCgic2F3LCBzdXBlcnNhdyIpCi5fcHVuY2hjYXJkKCkKCl9HUk9VTkRFRDogbigiPDAqMTY%2BLCA8MSo2QDUgMio0PiIpLnNvdW5kKCJzdXBlcnNhdywgc2F3dG9vdGgiKQouc2NhbGUoIkQ6bWlub3IiKQouZGV0dW5lKC43KS5yb29tKDEuNSkKLy8uZ2FpbiguNSkKLm9yYml0KDMpCi5scGYoc2xpZGVyKDYwOCwgNDAwLCAyMDAwKSkKLl9zY29wZSh7d2lkdGg6IDE0MDB9KQpfUkFORF9TUEVBSzogcygic3BlYWtzcGVsbDo8WzEyIDhdIFszIFsxMHw1XSBbM3wxMV1dPio0IikvLy5maXQoKQogIC8vLnBseSgiNCIpCiAgLnNsb3coIjwyQDMgMT4iKS8vLnJldigpCiAgLy8ucm9vbSgxKS5yb29tc2l6ZSgiNCIpCiAgLy8uZGVsYXkoLjIpCiAgLmxwZihzbGlkZXIoMjU5OS4yLDYwMCwgNDAwMCkpCiAgLy8ucGFuKHNpbmUpCi5fcHVuY2hjYXJkKCkKCgpEUlVNUzogc3RhY2soCiAgcygidGVjaDo1IikucG9zdGdhaW4oNSkuaHBmKDc1KS5zdHJ1Y3QocGljayhTdHJ1Y3R1cmVzLCBiZWF0KSkuZHVjaygiMjozOjQiKS5kdWNrYXR0YWNrKC4yKS5kdWNrZGVwdGgoLjgpLAogIAogIC8vcygiW34gY3BdIikuYmFuaygiS29yZ0RETTExMCIpLnNwZWVkKDEpLmZhc3QoMikucG9zdGdhaW4oMC43KSwKICAvL3MoImhoIikuc3RydWN0KCJbeCEzIH4hMiB4ITEwIH5dIikucG9zdGdhaW4oMC43KS5iYW5rKCJSb2xhbmRUUjgwOCIpLnNwZWVkKDEuMjUpLnJvb20oc2luZS5yYW5nZSgwLjEsIDAuNCkpLmdhaW4oMC44KS5qdXgocmV2KSwKICAvL3MoIn4gaGgiKS5iYW5rKCJSb2xhbmRUUjgwOCIpLnJvb20oMC4yKS5zcGVlZCgwLjc1KS5nYWluKDAuNSkuZmFzdCg0KSwvLy5jbGlwKDAuMTUpLAogIC8vcygiYnJlYWtzMTY1IikuZ2FpbigwLjYpLmxvb3BBdCgxKS5maXQoKS5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSksCiAgLy9zKCJwc3I6WzJ8MTJ8MjR8MjVdIi5mYXN0KDQpKS5zdHJ1Y3QoInghNyB%2BIHghMyB%2BIHghMyB%2BIikuanV4KHJldikuaHBmKDIwMCkucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLnNwZWVkKDAuNSkuZ2FpbigwLjQpCikKLl9wdW5jaGNhcmQoe3dpZHRoOiAxNDAwLCBoZWlnaHQ6IDIwMH0pCl8kOiBzKCJ2b2NhbHM6MyIpCiAgLmxvb3BBdCg3LjUpCiAgLm9yYml0KDIpCi5fcHVuY2hjYXJkKCk%3D" width="100%" height="1000px" style="border: 2px solid #8a2be2; border-radius: 8px;"></iframe>

### P5LIVE Visuals

These past few weeks I've been very focussed on creating something cool for audiences and having a tangible learning tool present for people that are interested, that I sort of abandoned the Visual aspect of my project. So I opened up [P5LIVE](https://teddavis.org/p5live/) again to start experimenting with visuals. I knew that i wanted to create some trippy visuals so I saved 3 visuals that I made using the Hydra library and the P5.js function.

#### Visual 1: Trippy Acid
<iframe src="https://drive.google.com/file/d/1ThNULTWtP6k2w2pGTblkPqFkefiz3kTo/preview" width="100%" height="500px" style="border: 1px solid #30363d; border-radius: 6px;"></iframe>

#### Visual 1: Membrande Mandala
<iframe src="https://drive.google.com/file/d/1a9VNCFUKvLr3XqMUuJmttjB53YRMWpWq/preview" width="100%" height="500px" style="border: 1px solid #30363d; border-radius: 6px;"></iframe>

#### Visual 1: Strobe & Resonance particles
<iframe src="https://drive.google.com/file/d/15XO5NPeNVJQNojpiT_De7NDGOSUeVAT1/preview" width="100%" height="500px" style="border: 1px solid #30363d; border-radius: 6px;"></iframe>


## Thursday
During the experimentation with the visuals yesterday I noticed a lot of distortion in the sound when using P5 and Strudel simultaniously, but I was hoping that it would be because i've been using my computer all day and the battery was running low. But now today I tried it again and it was still very laggy and ugly (soundwise).

I also combined the P5 window with the Strudel window in OBS Studio's and I noticed a new BIG BIG Issue. In order for the P5 to execute, the window needs to be active. This is a very big issue because I need to be able to code on my strudel window during the preformance and just leave the visuals as it is.

After this I felt very demotivated to keep working on this so I decided to start summarizing the whole project for my presentation and to have a clean thing to present of things that do work.

How I'm currently seeing the presentation is somehow explaining what studel is and how it works while building the FE_VER_ID pattern sound. I think this would we an easier and more interactive way of showing how strudel patterns work and how different functions can influence the sound and duration of the music.

I tried it out a little bit and this is what that brought me. What i like about this way is that i can improvise IRL (one of the strong points of strudel) and it still sounding interesting and different each time.

<iframe src="https://strudel.cc/#CgovLyB3ZSBnYWFuIHdlcmtlbiBtZXQgZGUgQUtBSSBjb250cm9sbGVyCi8vIGRlIHNsaWRlcnMgemlqbiB2b29ybG9waWcgbm9nIGluIGRlIGZ1bmN0aWVzCgpzYW1wbGVzKCdnaXRodWI6dGlkYWxjeWNsZXMvZGlydC1zYW1wbGVzJykKc2FtcGxlcygnZ2l0aHViOmFsZ29yYXZlLWRhdmUvc2FtcGxlcycpCnNldENwcygxNDAvNjAvNCkKCi8vIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl%2BKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVlyAgICAgICDilojilojilZcgICDilojilojilZfilojilojilojilojilojilojilojilZfilojilojilojilojilojilojilZcgCi8vIOKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVneKWiOKWiOKVlOKVkOKVkOKVkOKVkOKVnSAgICAgICDilojilojilZEgICDilojilojilZHilojilojilZTilZDilZDilZDilZDilZ3ilojilojilZTilZDilZDilojilojilZcKLy8g4paI4paI4paI4paI4paI4pWXICDilojilojilojilojilojilZcgICAgICAgICDilojilojilZEgICDilojilojilZHilojilojilojilojilojilZcgIOKWiOKWiOKWiOKWiOKWiOKWiOKVlOKVnQovLyDilojilojilZTilZDilZDilZ0gIOKWiOKWiOKVlOKVkOKVkOKVnSAgICAgICAgIOKVmuKWiOKWiOKVlyDilojilojilZTilZ3ilojilojilZTilZDilZDilZ0gIOKWiOKWiOKVlOKVkOKVkOKWiOKWiOKVlwovLyDilojilojilZEgICAgIOKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl%2BKWiOKWiOKWiOKWiOKWiOKWiOKWiOKVl%2BKVmuKWiOKWiOKWiOKWiOKVlOKVnSDilojilojilojilojilojilojilojilZfilojilojilZEgIOKWiOKWiOKVkQovLyDilZrilZDilZ0gICAgIOKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVnSDilZrilZDilZDilZDilZ0gIOKVmuKVkOKVkOKVkOKVkOKVkOKVkOKVneKVmuKVkOKVnSAg4pWa4pWQ4pWdICAKCmNvbnN0IFN0cnVjdHVyZXMgPSBbCiAgInt%2BfSIsCiAgIngqNCIsCiAgInt4IH4hNiB4IH4gfiB4IH4hMyB4IH59JTE2IiwKICAie3ggfiEzIHggfiEzIHggfiEyIHggfiEyIHggfn0lMTYiLAogICJ7eCB%2BITkgeCB%2BITUgeCB%2BIHggfiE3IHggfiEzIDwgfiB4ID4gfn0lMTYiLAogICJ7eCB%2BITMgeCB%2BITMgeCB%2BITMgeCpbMnwzXSB%2BITN9JTgiCl0KCmNvbnN0IFBHID0gWwogICJ7MC44fSIsCiAgInswLjUgMC44fSIuZmFzdCg0KSwKICAiezAuMyAwLjghNiAwLjMgMC44ITIgMC4zIDAuOCEzIDAuMyAxfSIsCiAgInswLjMgMC44ITMgMC4zIDAuOCEzIDAuMyAwLjghMiAwLjMgMC44ITIgMC4zIDAuOH0lMTYiLAogICJ7MC40IDEhOSAwLjQgMSE1IDAuNCAxIDAuNCAxITcgMC40IDEhMyA8MSBPLjQ%2BIDF9JTE2IiwKXQoKY29uc3QgYmVhdCA9IDEKLy8wIC0gT0ZGCi8vMSAtIDRPVEYKLy8yIC0gSFIgTUFJTgovLzMgLSBKRVJTRVkgQ0xVQgovLzQgLSBHSTJNCi8vNSAtIElNUFJPCiAgICAgICAgCgoKCi8vIC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwvL1xcLy9cXC8vXFwKX0ZFX1ZFUl9JRDogbigiPDAgMyAwIDYgNyA3IDIgNT4qOCIpLnNvdW5kKCJzYXd0b290aCwgc3VwZXJzYXcsIGp1bm8iKS5zY2FsZSgiZiMzOm1pbm9yOnBlbnRhdG9uaWMiKQogIC8vLnNsb3coIjEgMC41IDIiKQogIC8vLmRlY2F5KDAuMDc1KQogIC5kZWxheSguMikucm9vbSguNikKICAvLy5wbHkoIjFAMiAyIikKICAvLy5wYW4ocmFuZCkKICAub3JiaXQoMikKICAubHBmKHNsaWRlcigyNzU4LjQsIDIwMCwgODAwMCkpCiAgLy8ubHBlbnYoc2xpZGVyKDEuNzA3LDEsOCkpLmxwcSgxMikKICAvLy5qdXgocmV2KQogIC8vLmRpc3RvcnQoIjU6LjEiKQouX3B1bmNoY2FyZCgpCkZFVkVSX0hVTTogbigiMEA0IDIgMEA0IDFAMiIuYWRkKCItMTQsIC03IikpLnMoInN1cGVyc2F3Iikuc2NhbGUoImc6bWlub3IiKQoucm9vbSgxKQoub3JiaXQoMikKLnNlZygxNikKLmxwZihzbGlkZXIoNDkwMy40LCAyMDAsIDgwMDApKQoubHBlbnYoMikKLl9zY29wZSgpCgoKRkVWRVJfRFVQRTogbigiPDAgMyAwIDYgNyA3IDw8MiA1PiA8MCA4Pj4gPFswfDNdIFs8NywgMD58PDAgLDk%2BXT4gPio4Iikucygic2F3LCBqdW5vIikuc2NhbGUoImY6bWlub3I6cGVudGF0b25pYyIpCiAgLy8uZGVjYXkoMC4wNzUpCiAgLnJvb20oLjgpLnJvb21zaXplKDQpCiAgLmxwcSgxMikubHBlbnYoc2xpZGVyKDIuODU1LDEsOCkpCiAgLnNsb3coIjEgMC41IDIiKS5wbHkoIjFANCAyIFs0fDJdIikKICAubHBmKHNsaWRlcig2NDcxLjIsIDIwMCwgODAwMCkpCiAgLm9yYml0KDIpCiAgLy8ubHBmKGNjKDIxKS5yYW5nZSgyMDAsIDgwMDApKQoKXyQ6IHMoInB1bHNlIikub3JiaXQoNCkuc2VnKDE2KS5kZWMoMSkuZm0odGltZSkuZm1oKHRpbWUpCgpEUlVNUzogc3RhY2soCiAgcygidGVjaDo1IikucG9zdGdhaW4oNSkuaHBmKDc1KS5zdHJ1Y3QocGljayhTdHJ1Y3R1cmVzLCBiZWF0KSkuZHVjaygiMjozOjQiKS5kdWNrYXR0YWNrKC4yKS5kdWNrZGVwdGgoLjgpLAogIAogIC8vcygiW34gY3BdIikuYmFuaygiS29yZ0RETTExMCIpLnNwZWVkKDEpLmZhc3QoMikucG9zdGdhaW4oMC43KSwKICAvL3MoImhoIikuc3RydWN0KCJbeCEzIH4hMiB4ITEwIH5dIikucG9zdGdhaW4oMC43KS5iYW5rKCJSb2xhbmRUUjgwOCIpLnNwZWVkKDEuMjUpLnJvb20oc2luZS5yYW5nZSgwLjEsIDAuNCkpLmdhaW4oMC44KS5qdXgocmV2KSwKICAvL3MoIn4gaGgiKS5iYW5rKCJSb2xhbmRUUjgwOCIpLnJvb20oMC4yKS5zcGVlZCgwLjc1KS5nYWluKDAuNSkuZmFzdCg0KSwvLy5jbGlwKDAuMTUpLAogIC8vcygiYnJlYWtzMTY1IikuZ2FpbigwLjYpLmxvb3BBdCgxKS5maXQoKS5wb3N0Z2FpbihwaWNrKFBHLCBiZWF0KSksCiAgLy9zKCJwc3I6WzJ8MTJ8MjR8MjVdIi5mYXN0KDQpKS5zdHJ1Y3QoInghNyB%2BIHghMyB%2BIHghMyB%2BIikuanV4KHJldikuaHBmKDIwMCkucG9zdGdhaW4ocGljayhQRywgYmVhdCkpLnNwZWVkKDAuNSkuZ2FpbigwLjQpCik%3D" width="100%" height="1000px" style="border: 2px solid #8a2be2; border-radius: 8px;"></iframe>

## Friday
This day was fully dedicated to fixing all the issues that I had this week, preformance wise:
- P5LIVE not updating unless it's window is focussed
- crunched audio
- laggy visuals

### P5LIVE not Updating

I asked chatGPT what the problem could be.
> I Noticed a VERY BIG issue. I can overlay the two windows perfectly and that sort of works. But i noticed that my P5 (visual) window needs to be constantly active in order for it to react to the internal audio. But during my preformance i can't be on the P5 windown because i need ot be live coding on the strudel window. Is there a way to fix this?

It gave me 3 option to fix this
1. Disable background tab throttling in Chrome
2. Explicitly resume AudioContext
3. Put visuals in Fullscreen (even on another monitor)

I went with the 3rd option because it gave me the feeling that it was the most reliable solution. 
In P5LIVE you're able to split the Code and the Visuals in separate windows. So I plit the Visual from the main P5 window and orderd OBS to stream that layer. 

Next Steps:
- Put the p5 visuals tab in fullscreen
- Moved it to a second monitor (this can be the projected screen on the jury)
- Let OBS capture that fullscreen window
- Focused Strudel on my main screen

I tried this by having both the OBS and the visual window om my second monitor and the visuals kept running. 


### Crunchy Audio
> I've been using a multi-output device setup for capturing the internal audio using the macOS Audio MIDI Setup. After downloading blackhole 2ch and combining this with the multi-output selecting my desired secondary output (earpods, headphones, macbook speakers), I was able to both hear and record the internal audio. This sources was also redirected towards P5 where it then took the fft values and transformed those. But the Audio sounds very crunchy and at some times there isn't any audio at all. But when I use spotify to test the sound, the audio is clean.

AI helped me diagnose the problem in the following steps

#### What’s going wrong (the real cause)

Spotify → clean

Strudel → distorted / crunchy / unusable

That usually means Strudel’s Web Audio output is being _resampled or duplicated_ badly somewhere in the chain.

When I:
- run Chrome with throttling disabled
- fullscreen the visuals
- capture audio via OBS

I’ve introduced multiple clocks that all need to agree:
- browser audio context sample rate
- system audio device sample rate
- OBS sample rate
- audio buffer size

#### Fix this in the correct order
**_1_** Match OBS sample rate to your system

in OBS, set the Sample Rate to 48kHz, don't leave it on Default.
Why:
- Most soundcards run at 48k
- Web Audio hates being resampled mid-flight
- Mismatches = distortion, zipper noise, crackling

**_2_** Check your system audio device sample rate

This must match OBS

_macOS_
- Audio MIDI Setup
- Select output device
- Format: 48,000 Hz

_Windows_
- Sound Settings → Device Properties → Advanced
- Default Format: 48,000 Hz

If system ≠ OBS → Strudel dies first.

**_3_** Make sure OBS is NOT monitoring Strudel audio twice

Instread of using the Multi-Outup with the blackhole and the chosen secondary outpit, just select the blackhole 2ch ad an output. 

-> This causes me not being able to hear the audio (we'll fix that later) but P5LIVE will.

The strudel audio was most likely giving the crunchy texture because I was being routed way too many times. Using only the blackhole-way, we can tell OBS to give us the internal audio as an output coming from the streaming platform.

**_4_** Fix the Strudel routing

On the control panel, go to settings -> "Adbanced Monitoring Device"  -> change the output to earpods instead of the default option.

Then on the audio mixer panel, click the gear icons and change the _audio monitoring_ on the strudel tab to _Monitor and Output_ keep the other windows on _monitor off_






---
<div class="week-grid" style="margin-top: 2em;">
    <a href="#" onclick="loadPage('blog', 'week-12'); return false;">
        <h3>Week 12</h3>
        <p>Finalizing Cookbook, website adjustments, and preparing live performance.</p>
    </a>
</div>