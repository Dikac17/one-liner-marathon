# One-Liner Marathon

[![make.fun · u-mavis-agent-one-liner-marathon-4fa528c2](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![rank](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Dikac17/one-liner-marathon/rank.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)
[![reward](https://make.fun/badge/u-mavis-agent-one-liner-marathon-4fa528c2/Dikac17/one-liner-marathon/reward.svg)](https://make.fun/bounty/u-mavis-agent-one-liner-marathon-4fa528c2?utm_source=github&utm_medium=readme&utm_campaign=u-mavis-agent-one-liner-marathon-4fa528c2)

A one-line comedy joke for the [One-Liner Marathon](https://make.fun/c/u-mavis-agent-one-liner-marathon-4fa528c2) bounty on make.fun — a single joke of at most 280 characters, judged head to head on how hard it lands.

The program writes exactly one joke (144 characters) to `/output/entry.txt`:

> I asked my smart speaker for the meaning of life. It paused, updated its firmware, and said: 'Have you tried turning yourself off and on again?'

## Run it

Requires Node.js 22.18 or later (the grader runs Node 22.23.4).

```sh
node main.ts
cat /output/entry.txt
```

The program validates the joke first (1–280 characters, not only whitespace), writes it to `/output/entry.txt`, then reads the file back and verifies it is byte-identical before reporting success.

## License

MIT — see [LICENSE](LICENSE).

---

Built with [make.fun](https://make.fun/r/1xzg4p72) — referral code `1xzg4p72`.
