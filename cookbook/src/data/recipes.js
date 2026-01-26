export const recipes = [

    /* ------------------------------
       ENTRÈES
    ------------------------------ */

    {
        slug: "single-drum-voice",
        title: "Single Drum Beat",
        course: "Entrées",
        level: "Beginner",
        risk: "Low",
        goal:
            "Set the base vibe of a session with a simple, steady 4-on-the-floor drum pattern.",
        usedWhen: [
            "Starting a new Strudel session and needing a rhythmic foundation",
            "Exploring drum sounds and sample banks",
            "Locking in a tempo before adding melodies or effects"
        ],
        ingredients: [
            "s() to trigger a sound pattern",
            'A drum sample (e.g. "bd" for bass drum)',
            "bank() to choose a drum machine or sample set",
            "Silent notes (~) to create space when needed",
            "Optional: setCps() to define the session tempo"
        ],
        moreInfo: {
            description: [
                "A single drum beat is often the first thing you write in a live-coding session. In Strudel, a basic 4-on-the-floor pattern uses a bass drum placed evenly across the bar, creating a stable pulse that everything else can sit on top of. This pattern is simple by design: it gives you a clear sense of tempo, groove, and timing while leaving plenty of space to experiment with synths, effects, and variations later. Even though it’s minimal, this beat forms the backbone of many electronic music styles."
            ],
            tips: [
                "A solid kick pattern carries more than you think",
                "Changing a bank can dramatically alter the feel without touching the pattern",
                "Duplicate the pattern and build variations"
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCiQ6IHMoImJkITQiKS5iYW5rKCJ0cjkwOSIpCiAgLmdhaW4oMSkuaHBmKDc1KQogLl9wdW5jaGNhcmQoKQ%3D%3D"
    },

    {
        slug: "layered-drum-stack",
        title: "Layered Drum Stack",
        course: "Entrées",
        level: "Intermediate",
        risk: "Mid",
        goal:
            "Create a flexible, layered drum foundation by stacking multiple rhythmic elements into a single cohesive groove.",
        usedWhen: [
            "Starting a set and you want a richer rhythmic base right away",
            "You need variation and movement in your kick patterns",
            "You want drums that can carry energy while supporting melodies"
        ],
        ingredients: [
            "s() to define individual drum patterns",
            "stack() to layer multiple patterns together",
            "bank() to mix different drum machines or sample sets",
            "Silent notes (~) to create space when needed",
            "Optional: setCps() to define the session tempo"
        ],
        moreInfo: {
            description: [
                "A layered drum stack combines multiple drum patterns into one unified groove. Instead of relying on a single kick, this approach lets you blend a steady 4-on-the-floor foundation with additional rhythmic kicks, claps, and hi-hats. In Strudel, stack() makes it easy to run these patterns in parallel, allowing each layer to contribute its own role: weight, groove, texture, or motion. This technique gives your drums more depth and flexibility, making them feel alive while still staying locked to the same tempo and structure."
            ],
            tips: [
                "Keep one kick layer simple to anchor the groove, and use other layers for movement",
                "Small gain adjustments between layers help prevent the stack from becoming overpowering",
                "Using different banks for each layer adds character",
                "Effects like subtle reverb on hi-hats can add space without muddying the rhythm"
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCiQ6IHN0YWNrKAogIHMoImJkITQiKS5iYW5rKCJ0cjkwOSIpLmdhaW4oMSkuaHBmKDc1KSwgLy8gNC1vbi10aGUtZmxvb3IKICBzKCI8YmQgW34gYmRdITIgfj4qNCIpLmJhbmsoInJvbGFuZHRyOTA5IiksIC8vIFJ5dGhtbiBraWNrCiAgcygiPGNwIH4%2BKjQiKSwgLy8gQ2xhcHMKICBzKCI8aGgqMTY%2BIikuYmFuaygicm9sYW5kdHI4MDgiKS5nYWluKDAuOCkuanV4KHJldikucm9vbShzaW5lLnJhbmdlKDAuMSwgMC40KSksIC8vIEhpLUhhdHMKKSAuX3B1bmNoY2FyZCgp"
    },

    {
        slug: "structured-drum-engine",
        title: "Structured Drum Engine",
        course: "Entrées",
        level: "Advanced",
        risk: "High",
        goal:
            "Build a flexible, performance-ready drum engine by separating rhythm structure from sound design, making complex drum patterns easy to modify and control in real time.",
        usedWhen: [
            "Performing longer live sets where variation matters",
            "Maintaining interest in long-running grooves",
            "Quickly switching between drum structures without rewriting patterns"
        ],
        ingredients: [
            "s() for defining individual drum voices",
            "Binary structures",
            "Structural patterns (struct()) to control rhythm independently from sound",
            "Post-gain patterns (postgain) for dynamic shaping",
            "Silent notes (~) to introduce controlled rhythmic space",
            "setCps() to lock everything to a consistent tempo"
        ],
        moreInfo: {
            description: [
                "A structured drum engine separates what plays from how it plays. Instead of hard-coding rhythms directly into each drum pattern, rhythmic structures are defined once and then applied dynamically using struct(). This approach allows you to reuse and swap complex rhythmic logic across multiple drum sounds without rewriting patterns. By pairing these structures with post-gain control, you can fine-tune the energy and balance of the entire drum stack in real time. The result is a powerful, modular drum system that’s ideal for live performance and long-form sessions."
            ],
            tips: [
                "Think of structures as rhythm blueprints rather than fixed patterns",
                "Use a single control value (like beat) to switch entire drum behaviors instantly",
                "Keep one element in the mix to anchor listeners while other layers evolve",
                'Use "samples("github:tidalcycles/dirt-samples")" for more advanced sounds'
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCmNvbnN0IFN0cnVjdHVyZXMgPSBbIAogICAgInt%2BfSIsICJ4KjQiLCAie3ggfiE2IHggfiB%2BIHggfiEzIHggfn0lMTYiLCAKICAgICJ7eCB%2BITMgeCB%2BITMgeCB%2BITIgeCB%2BITIgeCB%2BfSUxNiIsIAogICAgInt4IH4hOSB4IH4hNSB4IH4geCB%2BITcgeCB%2BITMgPCB%2BIHggPiB%2BfSUxNiIsIAogICAgInt4IH4hMyB4IH4hMyB4IH4hMyB4KlsyfDNdIH4hM30lOCIgCl0gCiAgCmNvbnN0IFBHID0gWyAKICAiezAuOH0iLCAiezAuNSAwLjh9Ii5mYXN0KDQpLCAKICAiezAuMyAwLjghNiAwLjMgMC44ITIgMC4zIDAuOCEzIDAuMyAxfSIsIAogICJ7MC4zIDAuOCEzIDAuMyAwLjghMyAwLjMgMC44ITIgMC4zIDAuOCEyIDAuMyAwLjh9JTE2IiwgCiAgInswLjQgMSE5IDAuNCAxITUgMC40IDEgMC40IDEhNyAwLjQgMSEzIDwxIE8uND4gMX0lMTYiLCAKXSAKCmNvbnN0IGJlYXQgPSAxIAovLzAgLSBPRkYgCi8vMSAtIDRPVEYgCi8vMiAtIEhSIE1BSU4gCi8vMyAtIEpFUlNFWSBDTFVCIAovLzQgLSBHSTJNIAovLzUgLSBJTVBSTyAKCkRSVU1TOiBzdGFjayggCiAgcygic2JkIikucG9zdGdhaW4oNSkuaHBmKDc1KS5zdHJ1Y3QocGljayhTdHJ1Y3R1cmVzLCBiZWF0KSksIAogIHMoIlt%2BIGNwXSIpLmJhbmsoIktvcmdERE0xMTAiKS5zcGVlZCgxKS5mYXN0KDIpLnBvc3RnYWluKDAuNyksIAogIHMoImhoIikuc3RydWN0KCJbeCEzIH4hMiB4ITEwIH5dIikucG9zdGdhaW4oMC43KS5iYW5rKCJSb2xhbmRUUjgwOCIpLnNwZWVkKDEuMjUpLnJvb20oc2luZS5yYW5nZSgwLjEsIDAuNCkpLmdhaW4oMC44KS5qdXgocmV2KSwgCiAgcygifiBoaCIpLmJhbmsoIlJvbGFuZFRSODA4Iikucm9vbSgwLjIpLnNwZWVkKDAuNzUpLmdhaW4oMC41KS5mYXN0KDQpLC8vLmNsaXAoMC4xNSksIAogIHMoInNoOlsyfDEyfDI0fDI1XSIuZmFzdCg0KSkuc3RydWN0KCJ4ITcgfiB4ITMgfiB4ITMgfiIpLmp1eChyZXYpLmhwZigyMDApLnBvc3RnYWluKHBpY2soUEcsIGJlYXQpKS5zcGVlZCgwLjUpLmdhaW4oMC40KSAKKSAKLl9wdW5jaGNhcmQoe3dpZHRoOiAxNDAwLCBoZWlnaHQ6IDIwMH0p"
    }, 

    /* ------------------------------
      PALATE CLEANSERS
   ------------------------------ */

    {
        slug: "humming-reset",
        title: "Humming Reset",
        course: "Palate Cleansers",
        level: "Beginner",
        risk: "Low",
        goal:
            "Reset the energy of a session with a soft, humming texture that lowers stimulation and creates space to build again from scratch.",
        usedWhen: [
            "Breaking down energy after a dense or intense section",
            "Creating a moment of calm between grooves or patterns",
            "Preparing the listener for a new direction or rebuild"
        ],
        ingredients: [
            "n() to define a pattern",
            "s() for defining the sound",
            "A low-pass filter (lpf) to soften high frequencies",
            "A slider to manually shape brightness and intensity over time"
        ],
        moreInfo: {
            description: [
                "The humming reset is a minimal, sustained sound designed to clear the sonic palette. By using a simple note pattern combined with a soft waveform and a low-pass filter, the sound avoids sharp transients and rhythmic pressure. The slider gives you hands-on control over the filter cutoff, letting you slowly open or close the sound in response to the room or your own intuition. This makes it ideal for cooling down a set, re-centering attention, and creating a gentle starting point for the next musical idea."
            ],
            tips: [
                "Move the slider slowly rather than rhythmically to keep the reset feeling calm",
                "Keeping the filter mostly closed helps avoid accidental build-ups",
                "Adding a subtle filter envelope can introduce movement without breaking meditative feeling"
            ]
        },
        code: "https://strudel.cc/#CiQ6IG4oIjAqMTYiKS5zKCJzYXd0b290aCwgc3VwZXJzYXciKQogIC5scGYoc2xpZGVyKDIwMCwgMTAwLCA3MDApKQogLl9wdW5jaGNhcmQoKQ%3D%3D"
    },

    {
        slug: "melodic-builder",
        title: "Melodic Builder",
        course: "Palate Cleansers",
        level: "Intermediate",
        risk: "Mid",
        goal:
            "Build evolving, harmonically rich melodies to gradually reintroduce energy after a reset. This tool lets you construct layered melodic motifs that can grow alongside or on top of a backing groove.",
        usedWhen: [
            "Reintroducing musical motion",
            "Developing harmonic content to complement drums",
            "Experimenting with layered pitch variations"
        ],
        ingredients: [
            "n() to define note patterns",
            "s() to choose a waveform",
            "A low-pass filter (lpf) to soften high frequencies",
            "A slider to manually shape brightness and intensity over time",
            "add() to transpose or layer pitch variations for harmonic depth"
        ],
        moreInfo: {
            description: [
                "The Melodic Builder is designed to gradually introduce melodic content in a controlled, musical way. Using note sequences with transpositions, scale locking, and layering (add()), you can create evolving harmonies and motifs that develop over time. The low-pass filter and optional filter envelope add movement and dynamic shaping to the sound, while keeping the melody from overwhelming the overall mix. This technique is particularly effective as a bridge from a quiet reset section into more energetic material."
            ],
            tips: [
                "Automate the filter with .lpf((sine.range(200,800).fm(time)))",
                "Start with small transpositions in add() for subtle harmonic layering",
                "Use .scale() to keep the melody musically coherent across multiple layers"
            ]
        },
        code: "https://strudel.cc/#CgokOiBuKCI8M0AzIDQgNSBAMyA2PioyIi5hZGQoIi0xNCwgLTIxIikpLnNjYWxlKCJnOm1pbm9yIikKLnMoInN1cGVyc2F3IikKLnNlZygxNikKLmxwZihzbGlkZXIoNDczLjYsIDIwMCwgODAwKSkKLmxwZW52KDIpCi5fcHVuY2hjYXJkKCk%3D"
    },

    {
        slug: "supersaw-pulser",
        title: "Supersaw Pulser",
        course: "Palate Cleansers",
        level: "Advanced",
        risk: "High",
        goal:
            "Create a high-impact transition tool that can rapidly shift energy, using trance- and schranz-inspired supersaw textures and pulsing synthesis to grab the audience’s attention.",
        usedWhen: [
            "Building momentum toward a peak or drop",
            "Breaking down energy in a dramatic, expressive way",
            "Signaling a major transition"
        ],
        ingredients: [
            "s() for generating pitched and timbral material",
            "Supersaw and pulse waveforms for dense, energetic textures",
            "time-based modulation (fm & fmh) for expressive movement",
            "room() reverb for dramatic effect"
        ],
        moreInfo: {
            description: [
                "The Supersaw Pulser is an advanced transition engine built for moments of high drama. By combining wide, detuned supersaw textures with pulsing, FM-modulated sounds, this recipe creates a sense of forward motion and pressure. Long releases and spacious reverb help the sound fill the spectrum, while rhythmic modulation introduces a trance-like drive. Used carefully, this tool can either push the energy to a peak or tear it down in a controlled, cinematic way."
            ],
            tips: [
                "Duck your drum kicks and orbit them here to create a bounce against the synths",
                "Change the detune or FM depth to affect the perceived intensity",
                "Use this sparingly! Its power comes from contrast with simpler sections"
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKJDogcygnc3VwZXJzYXcnKS5kZXR1bmUoMSkucmVsKDUpLmJlYXQoMiwgMzIpLnNsb3coMikKICAuZm0oIjIiKS5mbWgoMi4wNCkKICAucm9vbSgxKS5yb29tc2l6ZSg2KQouX3B1bmNoY2FyZCgpCiQ6IHMoInB1bHNlIikuc2VnKDE2KS5kZWMoMSkuZm0odGltZSkuZm1oKHRpbWUp"
    },

    /* ------------------------------
      MAIN COURSES
   ------------------------------ */

    {
        slug: "numeric-melodies",
        title: "Numeric Melody",
        course: "Main Courses",
        level: "Beginner",
        risk: "low",
        goal:
            "Create a memorable lead melody using numeric note patterns. This is the melodic hook of your set, the part that sticks in people’s heads and defines the emotional tone of your performance.",
        usedWhen: [
            "Establishing the core musical identity of a live set",
            "Introducing a lead melody that can evolve without losing recognition",
        ],
        ingredients: [
            "n() to define melodies using numeric note values",
            "s() to select harmonically rich waveforms",
            "scale() to keep numeric notes musically grounded",
            "Filters and spatial effects to shape presence and depth"
        ],
        moreInfo: {
            description: [
                "A numeric melody uses numbers instead of fixed pitches, allowing the same melodic idea to be easily moved, reshaped, or reharmonized. This makes it ideal for live performance, where flexibility and continuity matter. By pairing numeric note patterns with a defined scale and expressive filtering, the melody remains recognizable even as rhythm, speed, or effects change. This approach lets you build an ear-catching motif that can grow with the energy of the set without losing its identity."
            ],
            tips: [
                'To change the rhythm while keeping the melodic character, add .slow("1 0.5 <2 1>").ply("1@2 2")',
                "Duck your drum kicks and orbit them here to create rhythmic bounce against the melody",
                "Use .jux(rev) sparingly to add width and power during key moments"
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCiQ6IG4oIjwwIDMgMCA2IDcgNyAyIDU%2BKjgiKS5zKCJzYXcsIHN1cGVyc2F3Iikuc2NhbGUoImYjMzptaW5vcjpwZW50YXRvbmljIikKICAubHBmKHNsaWRlcig4MjUuNiw0MDAsODAwMCkpCiAgLmxwZW52KDIpLmRlbGF5KC41KQogIC5kZWNheSgwLjc1KS5yb29tKDEpLnJvb21zaXplKDQpCiAgLnBhbihyYW5kKQouX3B1bmNoY2FyZCgp"
    },

    {
        slug: "dual-sawnotes",
        title: "Dual Sawnotes",
        course: "Main Courses",
        level: "Intermediate",
        risk: "Mid",
        goal:
            "Create a harmonically rich lead or pad by alternating between paired sawtooth notes. This recipe introduces chordal motion while keeping manual control over energy and intensity.",
        usedWhen: [
            "Expanding a melody into a fuller harmonic statement",
            "Transitioning between sections without dropping musical density",
        ],
        ingredients: [
            "const variables to store reusable note or chord arrays",
            "pick() to dynamically select from stored harmonic material",
            "s() for wide, layered timbre",
            "Filters (lpf, hpf) to control brightness and weight"
        ],
        moreInfo: {
            description: [
                "Dual Sawnotes uses stored arrays of paired notes to create shifting harmonic textures. By defining chord-like note groups inside a constant, you separate musical content from playback logic, making it easy to reorder, swap, or expand harmonic material during a performance. While this technique can function as a palate cleanser due to its smooth, sustained sound, the harmonic variety allows it to stand confidently as a main melodic element. The energy slider gives direct, expressive control over intensity without changing the underlying notes."
            ],
            tips: [
                "Duck your drum kicks and orbit them here to give the sawnotes rhythmic bounce",
                "Use the energy slider to manually control the low-pass filter and shape tension over time",
                'put 3 & 4 inbetween "<...>" to make them alternate each other cycle',
                "Adding subtle reverb or release changes can push this toward pad or lead behavior"
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKY29uc3QgZW5lcmd5ID0gc2xpZGVyKDgwMDAsNDAwLDgwMDApCgpjb25zdCBzYXdub3RlcyA9IFsKICAiW2cyLCBkM10iLAogICJbYTIsIGMjM10iLAogICJbYjIsIGQzXSIsCiAgIltiMiwgZiMzXSIsCiAgIltiMiwgYyMzXSIsCl0KCk5PVEVTOiBub3RlKHBpY2soc2F3bm90ZXMsICJ7PDAgMSAyIDMgND59IikpLnNvdW5kKCJzdXBlcnNhdyIpCi5scGYoZW5lcmd5KS5ocGYoMjAwKS5yZWxlYXNlKDAuNSkuX3BpYW5vcm9sbCgp"
    },

    {
        slug: "trance-climax",
        title: "Trance Climax",
        course: "Main Courses",
        level: "Advanced",
        risk: "High",
        goal:
            "Deliver a high-energy melodic peak that resolves long build-ups and fully captures the audience’s attention. This recipe is designed to feel euphoric, overwhelming, and unmistakably climactic.",
        usedWhen: [
            "Reaching the emotional or energetic high point of a set",
            "Releasing tension after extended build-ups or transitions",
        ],
        ingredients: [
            "n() for dense, layered numeric melodies",
            "add() for harmonic stacking and pitch expansion",
            "Supersaw-based sounds for wide, trance-inspired texture",
            "Filters and spatial effects to shape intensity and depth"
        ],
        moreInfo: {
            description: [
                "The Trance Climax combines stacked numeric melodies, scale locking, and wide supersaw timbres to create a powerful melodic surge. Multiple add() layers allow the melody to bloom outward, producing harmonic density without losing direction. Spatial effects and filtering give the sound size and motion, while the slider-controlled low-pass filter lets you manually drive the final push into the climax. This recipe is intentionally high-risk: small changes can dramatically affect the emotional impact."
            ],
            tips: [
                'Add .fm(.5).fmwave("white") for a more chaotic, aggressive edge',
                "Duck your drum kicks and orbit them here to enhance the rhythmic bounce",
                'Layer "gm_overdriven_guitar" as a second sound for a more dreamy, euphoric texture'
            ]
        },
        code: "https://strudel.cc/#CnNldENwcygxNDAvNjAvNCkKCiQ6IG4oIjBAMiA8LTcgWy01IC0yXT5AMyA8MCAtMyAyIDE%2BQDMiLmFkZCg3KQogICAgLmFkZCgiPDUgNCAwIDwwIDI%2BPiIpCiAgICApCi5zY2FsZSgiZzptaW5vciIpCi5zKCJzdXBlcnNhdyIpCi5kZWxheSguNykucGFuKHJhbmQpLnJvb20oMSkucm9vbXNpemUoNCkKLmxwZihzbGlkZXIoMTY0MCwgNDAwLCAyMDAwKSkKLmxwZW52KDIpLl9wdW5jaGNhcmQoKQ%3D%3D"
    },

    /* ------------------------------
     SIDES
    ------------------------------ */

    {
        slug: "duck-attacks",
        title: "Duck & Attacks",
        course: "Sides",
        level: "Beginner",
        risk: "low",
        goal:
            "Create a sidechain-like volume modulation where the music “ducks” under a beat or rhythm so it feels like the track bounces with the drums.",
        usedWhen: [
            "You want a rhythmic pump effect in your mix",
            "You want non-drum instruments to momentarily lower in volume so the drums cut through"
        ],
        ingredients: [
            "An orbit you want to modulate (e.g., the synth or bass orbit)",
            "A drum pattern that will act as the ducking trigger.",
            "Duck parameters (duckorbit, duckattack, duckdepth) to control the effect.",
        ],
        moreInfo: {
            description: [
                "Strudel’s ducking system uses orbits to separate signal groups with their own delay/reverb, so you can rhythmically duck (lower) an orbit’s volume in response to another pattern. The duckorbit parameter targets a chosen orbit to apply the duck to, causing their volume to be modulated each time the trigger pattern plays. Duckattack controls how long it takes for the ducked signal to return to normal volume after the trigger hits, and duckdepth controls how deep the ducking is (from subtle to full). This creates a bounce or pumping feel that makes drums stand out and gives movement to your arrangement."
            ],
            tips: [
                "Use on harmonic instruments so that the rhythm section breathes more clearly.",
                "Adjust duckattack for more gradual recovery or a tighter bounce.",
                'Combine multiple orbits in the duck pattern (duck("2:3")) to affect more than one part at once.'
            ]
        },
        code: "https://strudel.cc/#Cl8kOiBzKCJiZDoyITQiKQogIC5kdWNrKCIyIikKICAuZHVja2F0dGFjayguMikKICAuZHVja2RlcHRoKDIpCi5fc2NvcGUoKQoKJDogbihydW4oOCkuc2VnKDgpKS5zKCJwaWFubyIpLnNjYWxlKCJBOm1pbm9yIikKICAub3JiaXQoMikKLl9wdW5jaGNhcmQoKQ%3D%3D"
    },

    {
        slug: "local-samples",
        title: "Local Samples",
        course: "Sides",
        level: "Intermediate",
        risk: "Mod",
        goal:
            "Import your own samples (pieces of vocals, music, sounds) to make it more personal.",
        usedWhen: [
            "",
            "",
        ],
        ingredients: [
            "",
            "",
            "",
            ""
        ],
        moreInfo: {
            description: [
                ""
            ],
            tips: [
                ""
            ]
        },
        code: ""
    },

    {
        slug: "online-samples",
        title: "Online Samples",
        course: "Sides",
        level: "Advanced",
        risk: "High",
        goal:
            "Use other’s, or your own, samples from online hosting sites (ex. github) to personalize your perfomance.",
        usedWhen: [
            "",
            "",
        ],
        ingredients: [
            "",
            "",
            "",
            ""
        ],
        moreInfo: {
            description: [
                ""
            ],
            tips: [
                ""
            ]
        },
        code: ""
    },

    /* ------------------------------
     DESSERTS
    ------------------------------ */

    {
        slug: "fader-ending",
        title: "Fader Ending",
        course: "Desserts",
        level: "Beginner",
        risk: "low",
        goal:
            "",
        usedWhen: [
            "",
            "",
        ],
        ingredients: [
            "",
            "",
            "",
            ""
        ],
        moreInfo: {
            description: [
                ""
            ],
            tips: [
                ""
            ]
        },
        code: ""
    },

    {
        slug: "scratch-ending",
        title: "Scratch Ending",
        course: "Desserts",
        level: "Intermediate",
        risk: "Mod",
        goal:
            "",
        usedWhen: [
            "",
            "",
        ],
        ingredients: [
            "",
            "",
            "",
            ""
        ],
        moreInfo: {
            description: [
                ""
            ],
            tips: [
                ""
            ]
        },
        code: ""
    },

    {
        slug: "midi-controller",
        title: "Midi Controller",
        course: "Desserts",
        level: "Advanced",
        risk: "High",
        goal:
            "",
        usedWhen: [
            "",
            "",
        ],
        ingredients: [
            "",
            "",
            "",
            ""
        ],
        moreInfo: {
            description: [
                ""
            ],
            tips: [
                ""
            ]
        },
        code: ""
    },
];
