# ADVANCE BACKEND — Workspace Rules

## Project Context
- Shubham is following the "Virtual Code" YouTube channel for learning Backend Development.
- This workspace contains multiple levels (Level 1, Level 2, Level 3, Level 4...) — each level is a separate mini-project.
- Tech stack: Node.js, Express, ES Modules (`"type": "module"` in package.json).

## Backend-Specific Rules

### Code Style
- Always use ES Module syntax (`import/export`), NOT CommonJS (`require/module.exports`).
- Use `dotenv` for environment variables — never hardcode API keys or secrets.
- Always add error handling with `try/catch` in async route handlers.

### API & Express
- Express 5 is being used — be aware of differences from Express 4 (e.g., async error handling is built-in).
- Always validate request body before processing — check if required fields exist.
- Use proper HTTP status codes: 200 (success), 400 (bad request), 404 (not found), 500 (server error).

### Gemini API (@google/genai)
- Use the `@google/genai` SDK (NOT the older `@google/generative-ai` package).
- System instructions go in `config.systemInstruction`, NOT as `role: "system"` in contents.
- Contents array only supports `role: "user"` and `role: "model"`.
- If a model gives 503 error, suggest switching to an alternative model temporarily.

### File Structure Best Practices
- Keep system instructions in a separate `.txt` file, loaded with `fs.readFileSync()`.
- Always have a `.gitignore` with `node_modules/` and `.env`.
- Each Level folder should be independent — its own `package.json`, its own `.env`.

### When Reviewing Code Before Push
- Check for hardcoded API keys — should be in `.env`.
- Check for missing error handling in async functions.
- Check for `console.log` statements that should be removed before pushing.
- Verify `.gitignore` includes `node_modules/` and `.env`.
