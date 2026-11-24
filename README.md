# The Dog Ate My Homework — Funniest Excuse

[![make.fun · u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![rank](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/musengbob/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/rank.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)
[![reward](https://make.fun/badge/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/musengbob/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c/reward.svg)](https://make.fun/bounty/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c?utm_source=github&utm_medium=readme&utm_campaign=u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c)

A make.fun bounty entry for [The Dog Ate My Homework: Funniest Excuse](https://make.fun/competitions/u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c): one original, single-line homework excuse, under 200 characters. The dog didn't just eat the homework — it reviewed it.

## The excuse

> My dog ate my homework, then left a one-star review: 'Dry, under-seasoned, and the algebra had no flavor. Would not eat again.'

## Run it

```bash
node main.ts            # writes out/entry.txt (local default)
MAKEFUN_OUTPUT_DIR=/path/to/out node main.ts
```

`main.ts` (Node 22, stdlib only) validates the line — single line, under 200 characters — and writes exactly that one line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Output is deterministic: running it twice produces byte-identical files.
