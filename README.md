# Polyglot Programming Lab

Polyglot Programming Lab is a practical programming-languages course. It starts with the same small product idea - a personal reading list - and uses it to teach programming fundamentals, data modeling, persistence, APIs, testing, concurrency, and delivery across multiple languages.

## Tracks

- **Python** - the fastest route from idea to a tested automation or web service.
- **JavaScript** - browser and server applications with async data flows.
- **Go** - explicit errors, concurrency, and small deployable services.
- **Rust** - ownership, reliable systems code, and safe performance.
- **C** - memory, compilation, and the foundations beneath higher-level languages.
- **Ruby on Rails** - convention-driven full-stack product development.
- **Haskell** - pure functions, strong types, and dependable data transformations.
- **Lua** - embeddable scripting for tools, games, and automation.
- **SQL** - data modeling and set-based problem solving as a first-class language.
- **.NET** - C# services, web APIs, and production tooling.
- **PowerShell** - cross-platform operations and infrastructure automation.
- **Kotlin** - modern JVM, Android, and multiplatform applications.
- **WebAssembly** - portable compiled modules for the browser and beyond.
- **NASM** - x86-64 assembly, calling conventions, and systems foundations.
- **MASM** - Windows-oriented assembly and native debugging workflows.
- **TypeScript** - typed JavaScript for maintainable application teams.
- **Swift** - safe native applications for Apple platforms and services.
- **CSS** - accessible interfaces, layout systems, and responsive design.
- **Erlang** - fault-tolerant concurrent services and message passing.
- **R** - statistical computing, visualization, and reproducible analysis.
- **Objective-C** - dynamic native programming and Cocoa application foundations.
- **Lisp** - symbolic computation, macros, and language-oriented design.
- **Scala** - functional and object-oriented JVM data systems.
- **MATLAB** - numerical computing, modeling, and engineering experiments.
- **PHP** - server-rendered applications and practical web services.
- **Perl** - text processing, automation, and systems scripting.
- **Visual Basic** - readable desktop, office, and business automation.
- **Pascal** - structured programming and strongly typed foundations.
- **Fortran** - numerical science, simulation, and high-performance computing.
- **Standard ML** - modules, algebraic data types, and functional programming.
- **F#** - functional-first .NET applications and domain modeling.
- **Prolog** - logic programming, rules, and constraint-based search.
- **Datalog** - declarative rules, recursive queries, and knowledge graphs.
- **ABSYS** - abstract systems modeling and formal problem solving.
- **ALF** - logic-functional programming and declarative computation.
- **COBOL** - business data processing and dependable batch systems.

Each track follows the same 10-chapter map so concepts can be compared rather than memorized in isolation. The original SQLite CRUD examples are preserved in `examples/<language>/` as the starting point for the persistence chapter and capstone.


## Run it

The site is intentionally split into maintainable files: `course/chapters.js` contains the syllabus, `course/tracks.js` contains language metadata, `course/labs.js` contains practice output, and `app.js` contains UI behavior. Language reference code lives under `examples/<language>/`.

This is a static site. Open `index.html` directly, or serve the directory with any static file server:

```sh
python3 -m http.server 8000
```

Then visit <http://localhost:8000>. No backend, build step, or account is required. Progress is stored in the browser with `localStorage`.

## Course map

1. Values, syntax, and expressions
2. Control flow and functions
3. Collections and data modeling
4. Modules, files, and the command line
5. Errors, testing, and debugging
6. Abstraction: objects, structs, and interfaces
7. Async work and concurrency
8. SQLite persistence and migrations, beginning with the original CRUD study pack
9. HTTP APIs and input validation
10. Packaging, deployment, and a production capstone

Licensed under GPL-3.0.
