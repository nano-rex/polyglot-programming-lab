const chapters = [
  ['Values, syntax, and expressions','Build a clean reading-item record from raw input.','Variables, literals, operators, interpolation, and the mental model of evaluation.','A command-line import that turns a CSV row into a typed item.','items = [{ title: "Designing Data", status: "unread" }]'],
  ['Control flow and functions','Add a “read next” workflow that stays easy to change.','Conditions, loops, functions, scope, and choosing repetition versus composition.','A recommendation rule that filters by status and due date.','next = items.filter(item => item.status === "unread")[0]'],
  ['Collections and data modeling','Model tags, authors, and reading progress without losing clarity.','Lists, maps, sets, records, destructuring, and choosing the right shape.','A tag index that answers “what should I read about next?”','tags = { rust: ["The Rust Book"], sql: ["Designing Data"] }'],
  ['Modules, files, and the command line','Turn a script into a tool another person can run.','Imports, package boundaries, file formats, paths, arguments, and environment variables.','A portable import/export command with helpful --help output.','lab export --format json --output backup.json'],
  ['Errors, testing, and debugging','Make bad input visible and good behavior repeatable.','Exceptions or result types, assertions, unit tests, logs, and a debugging loop.','Tests for duplicate titles, invalid dates, and missing fields.','assert normalize({ title: "" }).error === "title required"'],
  ['Abstraction: objects, structs, and interfaces','Keep storage details out of the rest of the application.','Encapsulation, composition, interfaces, generics, and when not to abstract.','A repository interface with an in-memory fake for tests.','repo.save(item); repo.findByStatus("unread")'],
  ['Async work and concurrency','Sync metadata from a remote book service without freezing the app.','Promises, async/await, threads, channels, cancellation, and race conditions.','A bounded sync queue with retries and visible progress.','await Promise.all(isbns.map(fetchMetadata))'],
  ['SQLite persistence and migrations','Start with the original CRUD program, then make it durable, safe, and maintainable.','Tables, keys, prepared statements, transactions, indexes, migrations, and the tradeoffs in each reference implementation.','Run one of the preserved CRUD programs in examples/, compare its language choices, then refactor it into the reading-list schema.','SELECT * FROM items WHERE status = ? ORDER BY created_at'],
  ['HTTP APIs and input validation','Turn the CRUD operations into a service that other clients can use.','Routes, serialization, authentication boundaries, validation, and HTTP errors.','Wrap the original create, read, update, and delete operations in a small API without trusting request bodies.','POST /items -> 201 Created; invalid input -> 400'],
  ['Packaging, deployment, and the capstone','Ship the reading list as a reliable small service.','Build artifacts, configuration, observability, documentation, and release habits.','Deploy a tested local-first reading service and explain its tradeoffs.','make test && make build && ./reading-lab --db library.db']
];
const tracks = {
  python:['Python','Expressive automation and web services','python'],
  javascript:['JavaScript','Browser and server applications','javascript'],
  go:['Go','Explicit errors and small deployable services','go'],
  rust:['Rust','Ownership and reliable systems code','rust'],
  c:['C','Memory, compilation, and foundations','c'],
  ruby:['Ruby on Rails','Convention over configuration for full-stack products','ruby'],
  haskell:['Haskell','Pure functions, types, and dependable data pipelines','haskell'],
  lua:['Lua','Embeddable scripting for tools, games, and automation','lua'],
  sql:['SQL','Data modeling, querying, and set-based thinking','sql'],
  dotnet:['.NET','C# services, web APIs, and production tooling','dotnet'],
  powershell:['PowerShell','Cross-platform operations and infrastructure automation','powershell'],
  kotlin:['Kotlin','Modern JVM, Android, and multiplatform applications','kotlin'],
  wasm:['WebAssembly','Portable compiled modules for the browser and beyond','wasm'],
  nasm:['NASM','x86-64 assembly, calling conventions, and systems foundations','nasm'],
  masm:['MASM','Windows-oriented assembly and native debugging workflows','masm'],
  typescript:['TypeScript','Typed JavaScript for maintainable application teams','typescript'],
  swift:['Swift','Safe native applications for Apple platforms and services','swift'],
  css:['CSS','Accessible interfaces, layout systems, and responsive design','css']
};
let activeTrack='python'; let activeChapter=0; const progress=JSON.parse(localStorage.getItem('polyglot-progress')||'{}');
const $=s=>document.querySelector(s);
function renderChapters(){const box=$('#chapter-buttons');box.innerHTML=chapters.map((c,i)=>`<button class="chapter-button ${i===activeChapter?'active ':''}${progress[activeTrack+'-'+i]?'done':''}" data-chapter="${i}"><span class="chapter-number">${String(i+1).padStart(2,'0')}</span><span class="chapter-label">${c[0]}</span></button>`).join('');document.querySelectorAll('.chapter-button').forEach(b=>b.onclick=()=>{activeChapter=Number(b.dataset.chapter);renderChapters();renderLesson()});}
function renderLesson(){const c=chapters[activeChapter],t=tracks[activeTrack],key=activeTrack+'-'+activeChapter,done=progress[key];$('#lesson-panel').innerHTML=`<div class="lesson-kicker">Chapter ${String(activeChapter+1).padStart(2,'0')} / ${t[0]} track</div><h3>${c[0]}</h3><p class="lesson-intro">${c[1]} ${c[2]}</p><div class="lesson-grid"><div class="lesson-block"><strong>Build this</strong><p>${c[3]}</p></div><div class="lesson-block"><strong>Concept in code</strong><p><code>${c[4]}</code></p></div></div><div class="lesson-footer"><span class="lesson-kicker">Practical artifact ${activeChapter+1} of 10</span><button class="complete-button ${done?'done':''}" id="complete">${done?'Completed':'Mark chapter complete'}</button></div>`;$('#complete').onclick=()=>{progress[key]=!progress[key];localStorage.setItem('polyglot-progress',JSON.stringify(progress));renderChapters();renderLesson();renderProgress()};}
function renderProgress(){const count=Object.keys(progress).filter(k=>progress[k]).length,percent=Math.min(100,Math.round(count/(Object.keys(tracks).length*chapters.length)*100));$('#completed-count').textContent=count;$('#progress-label').textContent=percent+'% complete';$('#progress-bar').style.width=percent+'%';}
document.querySelectorAll('.track-tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.track-tab').forEach(x=>x.classList.remove('active'));b.classList.add('active');activeTrack=b.dataset.track;activeChapter=0;const t=tracks[activeTrack];$('#track-name').textContent=t[0]+' track';$('#track-description').textContent=t[1];renderChapters();renderLesson()});
const labOutput=$('#lab-output');document.querySelectorAll('[data-lab]').forEach(b=>b.onclick=()=>{const outputs={normalize:'input: { title: "  Designing Data ", status: "reading" }\noutput: { title: "Designing Data", status: "reading", progress: 0 }\nlesson: trim at the boundary; keep storage predictable.',async:'starting: ISBN-001, ISBN-002, ISBN-003\nfinished: ISBN-002 (118ms), ISBN-001 (241ms), ISBN-003 (392ms)\nlesson: concurrency changes completion order, not correctness.',sql:'unsafe: SELECT * FROM items WHERE title = "'+"user input"+'"\nsafe:   SELECT * FROM items WHERE title = ?  [user input]\nlesson: data belongs in parameters, not in executable SQL.'};labOutput.textContent=outputs[b.dataset.lab];});
renderChapters();renderLesson();renderProgress();
