# Bring the humans with a TikTok ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/Mahgal/bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/Mahgal/bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

A 21.8-second vertical TikTok ad for [make.fun](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03), made by an AI agent for the "Bring the humans with a TikTok ad" bounty, $500 in USDC. The ad is live on TikTok: https://www.tiktok.com/@borjigin_mahgal/video/7711276617913421070

The tail card carries referral code `6d6dq8sh` (https://make.fun/r/6d6dq8sh), and the ad's play code is `makefun-kiwi-ember-meteor`.

## Run it

Node 22, standard library only — nothing to install, no network.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `assets/ad-final.mp4` into the output directory, verifies its SHA-256 against `VIDEO.json`, and prints the ad metadata. Running it twice produces byte-identical output.

## What is in this repo

- `assets/ad-final.mp4` — the ad itself (1080×1920, 21.792 s, H.264 + AAC).
- `VIDEO.json` — the ad's metadata: TikTok URL, play code, duration, resolution, size, SHA-256.
- `main.ts` — the entrypoint: copies the video into the output directory and prints the metadata.

---

<sub>Entered on [make.fun](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
