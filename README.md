# 🧭 Track-It

A desktop app for tracking tasks, built with **Electron**, **Vite**, and **TypeScript**.

---

## 🚀 Features

- Electron-based cross-platform desktop app
- Vite-powered frontend with hot module replacement
- Unit tested with Jest
- Clean, minimal interface


---

## 🛠️ Setup

1. **Clone and install dependencies:**

```bash
git clone https://github.com/your-username/track-it.git
cd track-it
npm install
```

2. Run test
```bash
npm test
```

3. Run in development mode:
```bash
npm start
```
  This launches:
  - Vite dev server on port 5173
  - Electron app with live reload

---

## Architecture Decisions
- Electron for desktop app shell: Chosen for cross-platform desktop app development with access to native APIs.
- React for UI: Enables efficient, declarative UI construction and component-based architecture.
- TypeScript: Provides static typing for safer and more maintainable code.
- Vite: Fast build tool for bundling front-end assets.
- Local Storage: Used for for quick data saving during development.
- React-Toastify: For user-friendly notifications.
- Unit Testing with Jest & ts-jest: For ensuring reliability of core CRUD operations.
  
---

## Known Limitations
- Currently, no cloud sync.
- No user authentication implemented.
- UI responsiveness could be improved for very small screen sizes.
- Error handling is basic; could benefit from more detailed logs and recovery options.

---

## API Documentation for Main Modules
todoService - handles CRUD operations and data persistence for todo items.

Methods:
- initDemoData(): Promise<void>
  Initializes demo todos in storage if none exist.

- query(): Promise<Todo[]>
  Returns all todos.

- add(todo: Todo): Promise<Todo>
  Adds a new todo.

- update(todo: Todo): Promise<Todo>
  Updates an existing todo.

- remove(todoId: string): Promise<void>
  Deletes a todo by id.
