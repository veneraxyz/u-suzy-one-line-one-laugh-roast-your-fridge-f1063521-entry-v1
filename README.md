[![make.fun](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![rank](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/veneraxyz/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521-entry-v1/rank.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
[![reward](https://make.fun/badge/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521/veneraxyz/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521-entry-v1/reward.svg)](https://make.fun/competitions/u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)

# One Line, One Laugh: Roast Your Fridge — v1

A one-line roast of a fridge, written from scratch: the fridge wears more
magnets than a souvenir shop, yet not one of them can attract a single fresh
idea for dinner. Specific detail (fridge magnets), twist payoff in the last
few words — all in a single line under 200 characters.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The program writes exactly one line plus a trailing newline to
`entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, default
`/output`), validates the line is 1–200 characters, and verifies the file
on disk matches the intended line via a read-back check.
