# Sermon Nuggets App - Copilot Instructions

This document provides guidance for AI coding agents to effectively contribute to the Sermon Nuggets App codebase.

## Project Overview

This is a [Next.js](https://nextjs.org/) application (version 15) built with the App Router and React. The primary purpose of this app is to present "sermon nuggets" which can be composed of audio, video, and text content.

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Linting**: ESLint with the `eslint-config-next` configuration.

## Architecture and Conventions

### Directory Structure

- **`src/app`**: Contains all the pages and layouts for the Next.js App Router. The main entry point for the UI is `src/app/page.js`.
- **`src/assets`**: This is the central location for all media content.
  - **`src/assets/audio`**: For audio files.
  - **`src/assets/video`**: For video files.
  - **`src/assets/images`**: For general images.
  - **`src/assets/text`**: For textual content, likely imported as modules into components (e.g., `src/assets/text/content.js`).
- **`public`**: For static assets that are served directly, such as logos and icons.

### Component and Styling Patterns

- **Components**: The application uses functional React components.
- **Styling**: Follow the Tailwind CSS utility-first approach. All styling should be done using utility classes directly in the JSX of the components. Avoid writing custom CSS files.
- **Fonts**: The project uses `next/font` to load the "Geist" font family, which is configured in `src/app/layout.js`.

### Data and Content

- Content is currently managed within the `src/assets` directory. When adding new content (e.g., text for a sermon), it should be placed in the appropriate subdirectory, likely within a JavaScript file, and then imported into the relevant component.

## Developer Workflow

### Running the Application

1.  Install dependencies:
    ```bash
    npm install
    ```
2.  Run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

### Key Scripts

- **`npm run dev`**: Starts the development server with hot-reloading.
- **`npm run build`**: Creates a production-ready build of the application.
- **`npm run start`**: Starts the production server (requires a build first).
- **`npm run lint`**: Runs ESLint to check for code quality and style issues. Please run this before committing changes.
