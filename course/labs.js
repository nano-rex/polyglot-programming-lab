window.labOutputs = {
  normalize: `input: { title: "  Designing Data ", status: "reading" }
output: { title: "Designing Data", status: "reading", progress: 0 }
lesson: trim at the boundary; keep storage predictable.`,
  async: `starting: ISBN-001, ISBN-002, ISBN-003
finished: ISBN-002 (118ms), ISBN-001 (241ms), ISBN-003 (392ms)
lesson: concurrency changes completion order, not correctness.`,
  sql: `unsafe: SELECT * FROM items WHERE title = "user input"
safe:   SELECT * FROM items WHERE title = ?  [user input]
lesson: data belongs in parameters, not in executable SQL.`
};
