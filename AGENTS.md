# Agent Instructions

Read this file before performing any repository task. Follow more specific nested AGENTS.md files when working in their directories.

## Workflow and Git safety

- Inspect the current branch, working tree, relevant files, and existing documentation before editing.
- Do not work directly on `main`. Create or use a task-specific branch; never assume an unrelated worktree is safe to modify.
- Preserve unrelated and uncommitted changes. Never reset, clean, force-push, delete branches/worktrees, or merge without explicit authorization.
- Keep changes narrowly scoped. Prefer small, reviewable pull requests with clear acceptance criteria.
- Do not commit, push, or open a PR unless the task authorizes those actions. Report any permission or read-only filesystem issues rather than working around them destructively.
- Before implementation, briefly state the intended files and approach; ask when scope or destructive consequences are unclear.

## Application and quality

- This repository is an existing Next.js personal portfolio. Inspect its actual package scripts, dependencies, routes, data access, and configuration; do not assume versions or architecture from prior discussions.
- Follow existing conventions and avoid unrelated refactors or dependency upgrades.
- Run the relevant lint, tests, type checks, and build supported by the repository. Report what passed, failed, or was skipped; do not conceal pre-existing failures.
- Update documentation when behavior, setup, or configuration changes.

## Secrets and infrastructure

- Never open, print, commit, or expose secrets or real environment files. Consult safe examples and documented variable names only.
- Use environment variables for credentials. Do not hardcode tokens, database URLs, or API secrets.
- Do not change cloud resources, databases, authentication settings, or deployment configuration without explicit task authorization.
- Do not run destructive database operations or delete existing data.

## Planned CMS migration

- The goal is to keep the existing Next.js website and introduce Sanity as a headless CMS for portfolio content.
- Work incrementally: (1) Sanity setup, Studio, schemas, and safe configuration; (2) content migration and frontend integration; (3) remove MongoDB only after parity is verified.
- Preserve existing MongoDB behavior until the replacement is validated. Never delete the MongoDB collection or credentials as part of initial setup.
- Inspect existing content shapes before designing Sanity schemas; avoid inventing unnecessary collections or adding Neon without a demonstrated requirement.
- Prefer a simple static or cached publishing model with a documented revalidation strategy.
- Treat migration scripts as potentially destructive: design for dry runs, idempotency, and validation before any live write.

## Communication

- Provide concise progress and a final summary of changed files, validation results, remaining risks, and next steps.
- Distinguish observed repository facts from assumptions or recommendations.
