const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeYLvTkzBXKB6Bs6sUom3BnKmMkWks8BnPszXKOiTYsVUDu-w/viewform?usp=dialog";

const ruleData = {
  general:{title:"General Rules",sub:"APPLIES TO ALL PARTICIPANTS",items:[
    "Participants must carry valid college/student identification and present it when requested.",
    "Registration must be completed through the official form. Entry is subject to verification by the organizing committee.",
    "Participants must report to the assigned venue at least 30 minutes before their slot.",
    "Any use of abusive, discriminatory, obscene or unsafe content is prohibited.",
    "The judges' decision will be final. The committee may disqualify entries for rule violations.",
    "Participants are responsible for their own props, instruments, costumes and personal belongings unless otherwise announced."
  ],criteria:["Discipline","Originality","Time adherence","Judge's decision final"]},
  "group-dance":{title:"Group Dance",sub:"RAMAN HALL",items:[
    "Recommended team size: 4–12 participants; final limit may be fixed by the committee.",
    "Performance duration: target 5–7 minutes including entry and exit.",
    "Music must be submitted in the prescribed format before the reporting deadline.",
    "Choreography, synchronization, formations, costume and overall stage impact may be judged.",
    "Props are permitted only if safe, self-managed and cleared by the coordinator."
  ],criteria:["Choreography","Synchronization","Expression","Stage presence","Costume"]},
  "solo-dance":{title:"Solo Dance",sub:"CLASS NO. 66",items:[
    "One participant per entry; performance duration should be within the announced slot.",
    "Music must be submitted in the prescribed format before the performance.",
    "Judging may consider technique, expressions, rhythm, originality and stage utilization.",
    "Dangerous props, liquids, fire or material that can damage the venue are prohibited."
  ],criteria:["Technique","Rhythm","Expression","Originality","Stage use"]},
  singing:{title:"Solo Singing",sub:"CLASS NO. 66",items:[
    "One participant per entry. Participants may perform with an approved backing track or permitted accompaniment.",
    "Song selection must be appropriate for a college cultural event.",
    "Participants should report with their audio file/instrumental track ready before the slot.",
    "Judging may consider sur, taal, voice quality, expression, diction and overall presentation."
  ],criteria:["Voice","Pitch","Rhythm","Expression","Presentation"]},
  fashion:{title:"Fashion Show",sub:"RAMAN HALL",items:[
    "Team size, round structure and duration will be finalized by the organizing committee.",
    "Costumes must be decent, safe and suitable for a college event.",
    "No hazardous materials, open flames or sharp props are permitted.",
    "Teams may be judged on concept, styling, confidence, walk, coordination and presentation.",
    "Respect for cultural diversity and individual dignity is mandatory."
  ],criteria:["Concept","Styling","Confidence","Walk","Team coordination"]},
  photography:{title:"Photography",sub:"ALL CAMPUS",items:[
    "Participants must use their own camera/mobile device unless otherwise specified.",
    "Theme, submission format and time window should be announced at the briefing.",
    "Photographs must be captured during the event; pre-existing images are not eligible.",
    "Basic exposure/crop adjustments may be allowed; heavy compositing or AI-generated imagery should not be used unless explicitly permitted.",
    "Participants must respect privacy and obtain consent where reasonably required."
  ],criteria:["Composition","Storytelling","Creativity","Technical quality","Theme"]},
  mehendi:{title:"Mehendi",sub:"CLASSES 64 & 65",items:[
    "Participants must bring their own mehendi cones and required materials.",
    "Design should be created within the time announced at the venue.",
    "Participants should work only on the designated hand/area provided by the committee or model.",
    "Use safe, skin-appropriate materials; harmful chemicals or unsafe mixtures are prohibited.",
    "Judging may consider neatness, symmetry, detailing, creativity and completion."
  ],criteria:["Neatness","Detail","Creativity","Symmetry","Finish"]},
  sketch:{title:"Sketch",sub:"CLASS NO. 70",items:[
    "Medium, paper size and theme will be announced by the committee.",
    "Participants should carry permitted drawing materials; the committee may provide the base sheet.",
    "Artwork must be original and completed within the allotted time.",
    "Tracing, copied artwork or digitally generated output is not permitted.",
    "Judging may consider observation, proportion, technique, creativity and finish."
  ],criteria:["Observation","Technique","Proportion","Creativity","Finish"]},
  caricature:{title:"Caricature",sub:"CLASS NO. 70",items:[
    "Participants create an original caricature based on the announced subject/theme.",
    "Materials and time limits will be specified at the briefing.",
    "The work should demonstrate recognizable features with creative exaggeration.",
    "Respectful portrayal is required; hateful, defamatory or degrading content is not permitted.",
    "Judging may consider likeness, exaggeration, creativity, line quality and presentation."
  ],criteria:["Likeness","Exaggeration","Creativity","Line quality","Presentation"]},
  "street-play":{title:"Street Play",sub:"LIBRARY AREA",items:[
    "Team size and performance duration should be confirmed by the committee before registration closes.",
    "The performance must be suitable for a public campus environment and should not obstruct emergency access.",
    "Original scripting, acting, group coordination and message clarity are encouraged.",
    "No fire, weapons, dangerous stunts, permanent markings or damaging materials are permitted.",
    "Teams must keep the performance area clean after their slot."
  ],criteria:["Message","Acting","Teamwork","Audience connect","Impact"]},
  poetry:{title:"Poetry",sub:"CONFERENCE HALL NO. 40",items:[
    "One participant per entry unless a group-poetry format is specifically announced.",
    "Original poetry is preferred and may be required by the final rulebook.",
    "Language may be Marathi, Hindi or English, subject to the final event notice.",
    "Time limit should be respected; excessive background music/props may not be allowed.",
    "Judging may consider content, voice modulation, diction, emotion and originality."
  ],criteria:["Content","Diction","Voice","Emotion","Originality"]},
  standup:{title:"Stand-up Comedy",sub:"CONFERENCE HALL NO. 40",items:[
    "Material should be original or properly attributed where quotation is unavoidable.",
    "No hate speech, targeted harassment, explicit sexual content or discriminatory jokes.",
    "Participants should maintain a college-appropriate standard while preserving creative freedom.",
    "Time limit must be followed. Props and audio may be used only if approved.",
    "Judging may consider writing, timing, delivery, originality and audience engagement."
  ],criteria:["Writing","Timing","Delivery","Originality","Audience connect"]},
  mono:{title:"Mono Act",sub:"CONFERENCE HALL NO. 40",items:[
    "One performer portrays one or more characters within a single continuous act.",
    "Performance should follow the announced time limit and stage restrictions.",
    "Voice modulation, character transitions, expressions and storytelling are important.",
    "Props should be minimal, safe and easy for the participant to manage.",
    "Content must remain appropriate for a college cultural event."
  ],criteria:["Characterization","Voice","Expression","Storytelling","Stage craft"]}
};

const rulePanel = document.getElementById("rulePanel");
function renderRule(key){
  const d = ruleData[key];
  rulePanel.innerHTML = `<span class="rule-sub">${d.sub}</span><h3>${d.title}</h3><ul>${d.items.map(x=>`<li>${x}</li>`).join("")}</ul><div class="criteria">${d.criteria.map(x=>`<span>${x}</span>`).join("")}</div>`;
}
renderRule("general");

document.querySelectorAll(".rule-tab").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".rule-tab").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active"); renderRule(btn.dataset.rule);
  });
});

document.querySelectorAll(".filter").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const f=btn.dataset.filter;
    document.querySelectorAll(".event-card").forEach(card=>{
      card.classList.toggle("hide",f!=="all" && card.dataset.cat!==f);
    });
  });
});

const modal=document.getElementById("modal");
const modalTitle=document.getElementById("modalTitle");
const modalBody=document.getElementById("modalBody");
document.querySelectorAll(".details-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const keyMap={"Group Dance":"group-dance","Solo Dance":"solo-dance","Solo Singing":"singing","Fashion Show":"fashion","Photography":"photography","Mehendi":"mehendi","Sketch":"sketch","Caricature":"caricature","Street Play":"street-play","Poetry":"poetry","Stand-up Comedy":"standup","Mono Act":"mono"};
    const d=ruleData[keyMap[btn.dataset.event]];
    modalTitle.textContent=d.title;
    modalBody.innerHTML=`<p class="rule-sub">${d.sub}</p><ul>${d.items.map(x=>`<li>${x}</li>`).join("")}</ul>`;
    modal.classList.add("open");
  });
});
document.getElementById("modalClose").addEventListener("click",()=>modal.classList.remove("open"));
modal.addEventListener("click",e=>{if(e.target===modal) modal.classList.remove("open")});

const menuBtn=document.querySelector(".menu-btn"), nav=document.querySelector(".nav");
menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>topBtn.classList.toggle("show",window.scrollY>700));
topBtn.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

// Optional event-specific Google Form prefill:
// If your Google Form question entry IDs are known, add them below and build a prefilled URL.
// The current form URL is intentionally kept unchanged because entry IDs were not supplied.
document.querySelectorAll('a[href*="docs.google.com/forms"]').forEach(a=>a.href=registrationUrl);
