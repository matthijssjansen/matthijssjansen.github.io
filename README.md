# Matthijs Jansen personal website
This website is hosted at [matthijssjansen.github.io](matthijssjansen.github.io) which is forwarded to [msjansen.com](msjansen.com). For more information on how to use this repository, see [https://github.com/alshedivat/al-folio](https://github.com/alshedivat/al-folio). This repo uses release v0.12.0. 

How to test the repo locally:
```bash
docker compose pull
docker compose up
```

How to update the repo to a newer version of the upstream al-folio repository:
```bash
git remote add upstream https://github.com/alshedivat/al-folio.git
git fetch upstream

# Choose one version from fetch upstream
# -x ours will prefer their changes over our changes
git rebase -X ours v0.12.0

# Now solve all merge conflicts. This might take multiple rounds. When done, do:
git rebase --continue

# If this succeeded, force push
git push -f
```