// ... existing code ...
## Reference Documentation Index
This file serves as the primary index for all agent instructions and architectural standards within the project. LLMs must refer to this document first when determining appropriate behavior or coding patterns.

- **General Coding Standards:** For absolute, mandatory rules regarding Next.js structure, Authentication (Clerk), and general style guide adherence, you MUST read the relevant individual instructions files within the `/docs` directory BEFORE generating any code. Always consult: [`/docs/LLM_CODING_STANDARDS.md`](/docs/LLM_CODING_STANDARDS.md) for baseline standards.
- **Specific Clerk Patterns:** Consult the dedicated skill modules within `.agents/skills/` for context on specific feature implementations (e.g., `clerk-webhooks`, `clerk-orgs`).

Before generating any code, you MUST:
1. ** READ the relevant documentation files** in the /docs directory that apply to your task
2. **Follow the patterns and guidelines** specified in those files
3. **DO NOT proceed** with code generation until you have received the applicable documentation

This is **THIS IS NOT OPTIONAL**. Failure to read the relevant documentation before generating code will result in:
 

- **Middleware deprecation warning:** NEVER use `middleware.ts` in new code for this project. The `middleware.ts` approach is deprecated in later Next.js releases (including the Next.js version used by this repository) and can cause unexpected behavior. Use `proxy.ts` for routing/proxying and request protection instead — follow the patterns in `proxy.ts` and related docs in `/docs`.

// ... rest of file ...
