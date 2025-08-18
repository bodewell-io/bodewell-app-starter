# DESIGNER_GUIDE.md

## 1. What is the Bodewell App Starter?

Welcome to the Bodewell App Starter! Think of this as your pre-built, fully-wired canvas for creating interactive prototypes. It's designed specifically for product designers, founders, and creators who want to build and test high-fidelity ideas without getting stuck on complex technical setup.

The starter kit comes with our entire `@bodewell/ui` component library, a dynamic theming system, and a modern development environment already configured. This lets you skip the tedious setup and jump straight into bringing your vision to life.

## 2. Before You Start: Prerequisites

You only need two things on your computer to get started:

* **Node.js**: This is the underlying engine that runs the development environment. You can download the latest "LTS" (Long-Term Support) version from the official [Node.js website](https://nodejs.org/).
* **A Code Editor**: We highly recommend using [Visual Studio Code](https://code.visualstudio.com/), as it's free and has excellent support for the technologies in this project.

## 3. The One-Command Setup (Sub-5-Minute Goal ⏱️)

Our primary goal is to get you from zero to a running prototype in under five minutes. The entire setup process is handled by a single command.

Open your computer's terminal (on Mac, you can search for "Terminal"; on Windows, "PowerShell" or "Command Prompt"), and run the following command:

```bash
npm create bodewell-app@latest
```

This command will ask you for a project name (e.g., ```my-new-prototype```). It will then automatically:

1. Create a new folder with your project's name.

2. Install all the necessary dependencies, including React and ```@bodewell/ui```.

3. Set up all the required configuration files.

## 4. Running Your Prototype
Once the installation is complete, navigate into your new project directory and start the development server.

```Bash
cd <your-project-name>
pnpm run dev
```

Your new Bodewell application will now be running at [[http://localhost:5173](http://localhost:5173)]. Open this link in your web browser, and you will see the interactive style guide.

## 5. Exploring the Style Guide
The application that's running is a complete, interactive style guide for the @bodewell/ui component library. This is your primary resource for discovering what you can build.

* Live Components: Every component you see is a live, interactive example. You can click buttons, open menus, and interact with forms to see exactly how they look and feel.

* Side Navigation: Use the navigation on the left to jump between different categories of components, such as "Forms," "Charts," or "Navigation."

* Dynamic Theming: Use the "Switch Theme" dropdown in the "Layout" section to see how all components instantly adapt to different visual styles (like Dark Mode).

## 6. Making Your First Change
The best way to get started is to make a small change and see it update live in your browser. Let's change the title of the "Colors" section.

1. Open the Project in Your Code Editor: Open the folder you created (e.g., ```my-new-prototype```) in VS Code.

2. Find the File: In the file explorer on the left, navigate to ```src``` > ```pages``` > ```styleguide``` > ```sections``` > ```colors``` and open the ```ColorsSection.tsx`` file.

3. Edit the Title: On or around line 100, you will find a line that looks like this:

```Typescript
<SectionHeader title="Color Palette" />
```

4. Change the Text: Change the ```title`` to something new, for example:

```Typescript
<SectionHeader title="Our Brand Colors" />
```

5. Save the File: Save the file (Ctrl+S or Cmd+S). As soon as you save, the browser will automatically refresh, and you will see your new title on the page.

You've just made your first customization! You can now use this same process—finding a component in the style guide and editing its source code—to build out any feature or screen you can imagine.