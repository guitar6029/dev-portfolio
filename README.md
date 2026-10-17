# Dev Portfolio

## Sanity CMS

The portfolio reads published `project` documents from the Sanity project
`pvz78ini` in the `production` dataset. The embedded Studio is available at
`/studio` and requires Sanity authentication to edit content.

Copy `.env.example` to a local environment file when overriding the defaults:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — public project ID; defaults to `pvz78ini`.
- `NEXT_PUBLIC_SANITY_DATASET` — public dataset name; defaults to `production`.

Published reads use the public Sanity API and do not require a token. Drafts are
excluded from portfolio queries. Responses are cached for 60 seconds, so a
published change appears without a full rebuild after the cache window expires.

No Sanity documents are created or published by this repository.
