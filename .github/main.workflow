workflow "Lint and Test" {
  on = "push"
  resolves = ["Run Unit Tests"]
}

action "Lint Code" {
  uses = "actions/npm@e7aaefe"
  runs = "npm run lint"
}

action "Run Unit Tests" {
  uses = "actions/npm@e7aaefe"
  needs = ["Lint Code"]
  runs = "npm test"
}
