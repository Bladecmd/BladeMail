# Mandatory VS Code Agent Operating Instructions

1. **Zero-Trust Sandboxing Directive**:
   - Strictly confined to the current project root (`./`). Never read, traverse, or modify outside `./`.
   - Never run bulk deletions (`rm -rf`, `del /s /q`), never alter `.git/config`, and never run `git push --force`.
   - Never hardcode API keys or secrets. All live LLM keys live in Render's `openrouter-deepseek` Environment Group (`OPENROUTER_API_KEY`, `OPENROUTER_BASE_URL=https://openrouter.ai/api/v1`, `DEEPSEEK_MODEL=deepseek/deepseek-chat`).

2. **Forensic Truth Over Checkboxes**:
   - Never trust `[x]` claims in `.cursor/ACTIVE_TASK.md` or `.cursor/history/` without verifying the real source code on disk.
   - Never write stubbed, mocked, or placeholder business logic.

3. **Continuous Task Memory**:
   - Project state lives in `.cursor/PROJECT_CONTEXT.md`, `.cursor/ACTIVE_TASK.md`, `.cursor/ACTIVE_PLAN.md`, and `.cursor/ECOSYSTEM_MAP.md`.
   - When asked to onboard or audit, execute `.cursor/RESUME_PROMPT.md`.
   - Whenever you finish a task or fix a bug, immediately update `.cursor/ACTIVE_TASK.md` (`[x]`).
