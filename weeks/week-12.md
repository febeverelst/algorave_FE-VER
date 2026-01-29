<a href="#" onclick="loadPage('blog'); return false;" style="font-size: 0.9em; color: #888;">← Back to Daily Log</a>

# Week 12: 26 January – 1 February 2026

## Monday

From this day on I have 2 more weeks left to finish this project. But idealy i would like to mostly finish this project by Friday, Januray 30th.
For next week I'd like to just focus on preforming and setting a solid performance. I only have 15 minutes to present my whole project to the jury so I'd have to be very considerate of everything that I want to show.

### A Trance set a day, Keeps the Doctor Away
I was just having some fun here to start the day so excuse me if some parts sound very choppy.
 <iframe src="https://drive.google.com/file/d/1YNL0vDJQ9r5fhKD4tLKGmZSaJoZGiiLo/preview" width="60%" height="500px" style="border: 1px solid #30363d; border-radius: 6px;"></iframe>


### Planning
Last week was a bit of a let down on my part. I wasn't as productive as the past ones eventhough I worked at school all the time. I had a very hard time focussing so I hope that will get better this week. So my on my first working hour this week I took some time to plan everything to make sure that I'd be done on time

<img src="assets/images/week12_planning.png" alt="week 12 planning" width="100%"> 

## Tuesday
I finished the cookbook so all the current recipes are in there. I decided to work with _Astro_ and have all the recipes in a _data-js_ file so that I can keep adding recipes by just adding a new entry to the file and it will automatically make a new recipe card with a slug to have it's own recipe page aswell.

I removed the dead ends ont he recipe pages so you're able to go to other recipes without using the navigation.
<img src="assets/images/week12_noDeadEnd.png" alt="click through" width="100%"> 

## Wednesday

### Research
This day I dedicated to finding a solution of both displaying the strudel window and the visuals on the same time. I was talking with some friends that also know how to code to see if maybe they have an idea on how to tackle it.

I got reccommended to look at the use of child windows and see how I can use those to maybe overlay ontop of eachother. Someone told me that I might be able to change the opacity and overlay them like that.

> A child window is a graphical user interface (GUI) component that opens inside a main "parent" window, inheriting its coordinate system and behavior. 
>
>Key Characteristics of Child Windows:
> - **_Dependency_**: They are contained within the parent window's boundaries, and closing or minimizing the parent window automatically closes or minimizes the child window.
> - **_Containment_**: They are typically restricted to the client area of the parent and cannot be moved outside that frame.
> - **_Functionality_**: Often used to divide the parent window into functional areas, such as dialog boxes, toolbars, or specific application views.
> - **_Taskbar_**: They generally do not have their own separate entry in the Windows taskbar, unlike the parent window. 

### Help of AI
I wasn't so convinced about the child windows, so I explained to AI what I would like to do and what things I would use so that it could help me.

> **_Prompt :_**
>
> I’m working on a personal project and I want to combine the content of two separate browser windows into a third display window.
>
> In the first browser window, I’ll have the Strudel REPL open where I’m writing code live. In the second browser window, I’ll have a separate page showing visuals that react to the code.
>
> What I want is a third browser window that acts as a composite view: it should show the visuals window as the background, with the Strudel REPL window overlaid on top (picture-in-picture style).
>
> Is this possible to do in a browser-based setup? If so, what approaches or technologies could I use (for example, screen capture APIs, OBS-style compositing, browser extensions, iframes, WebRTC, or window capture)? I’m especially interested in solutions that work in real time and are suitable for live performance or streaming.

### OBS Studio's
Open Broadcase Software is a real-time video mixing and streaming application. Conceptually, it works a lot like a digital video switcher plus a compositor.

OBS is popular because it can do exactly what I need it to do: capture Window A (Strudel), capture Window B (visuals), put B as a full-screen background, overlay A on top, and output that as one clean feed. You don’t need to hack browser APIs — OBS is purpose-built for this kind of live compositing.

Technically, OBS is written in C/C++ and uses graphics APIs (like DirectX, OpenGL, Metal depending on OS) to hook into window surfaces and GPU textures. That’s why it can capture individual windows and render them efficiently with transforms and filters in real time.

_Pros_
- real-time window capture and compositing
- layer model where I can treat Strudel as a top layer, visuals as a background, and freely move, crop, scale, add opacity, masks, and even shaders/filters
- OBS using GPU capture making it's latency low and predictable
- output flexibility is huge: fullscreen output on another monitor, a stream, a recording, or a virtual camera that any browser or app can consume
- Tons of live coders, VJs, and streamers already use OBS

_Cons_
- OBS is a separate native app and part of your performance stack
- less programmable from my project’s code
- If someone else wants to run my project, they need to install OBS and set up scenes correctly


### Browser Approach
_Screen capture + Canvas_

A third browser window requests permission to capture tab 1 (strudel) and tab 2 (visuals) and draws both video streams into a `<canvas/>`.

Practical:
- In window 3, use `navigator.mediaDevices.getDisplayMedia()`
- Capture Strudel tab
- Capture visuals tab
- Convert streams to <video> elements
- Draw both onto <canvas> with positioning

---

<div class="week-grid" style="margin-top: 2em;">
	<a href="#" onclick="loadPage('blog', 'week-11'); return false;">
		<h3>Week 11</h3>
		<p>Cookbook & Midi-Contoller</p>
	</a>
</div>
