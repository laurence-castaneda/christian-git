/*
 |--------------------------------------------------------------------------
 | Below are the commands & aliases defined for each Git command.
 | Have one to add? Make a PR!
 |--------------------------------------------------------------------------
 */

const commands = {
  add: ['anoint'],
  blame: ['judas'],
  branch: ['vine'],
  checkout: ['possess'],
  clone: ['bread-and-fish'],
  commit: ['save'],
  diff: ['reform'],
  fetch: ['fishers-of-men'],
  init: ['in-the-beginning', 'create'],
  log: ['testimony'],
  merge: ['trinity'],
  pull: ['petition'],
  push: ['preach'],
  rebase: ['disciple'],
  restore: ['resurrect'],
  reset: ['ark'],
  revert: ['repent'],
  stash: ['sow-and-reap'],
  status: ['walk'],
  tag: ['testament']
};

const aliases = {
  'branch -D': ['crucify'],
}

module.exports = Object.assign(commands, aliases);
