# Penpot Plugin Starter Template

This repository is designed to be your starting point for creating plugins for Penpot. Follow these instructions to set up your development environment and start building your own Penpot plugins.

## Getting Started

<figure>
  <video title="" muted="" playsinline="" controls="" width="100%" poster="plugin-starter-template.png" height="auto">
    <source src="plugin-starter-template.mp4" type="video/mp4">
  </video>
</figure>

### Use this template

Click the "Use this template" button at the top of the GitHub repository page. That'll create a new repository in your account with all the template files.

Now that your repository was created you can clone it in your machine to start working with it:
```bash
git clone <your-repository-url>
```

### Install Dependencies

After cloning the repository, navigate into the project directory and install the necessary dependencies by running:

```bash
cd <your-project-name>
npm install
```

This command installs all the required packages listed in the `package.json` file.

### Configure the Plugin

Next, you need to edit the plugin's configuration file:

1. Open the `manifest.json` file located in the `/public` folder.
2. Make any necessary changes to the configuration. Note that any modifications to this file require you to restart the development server for changes to take effect.

### Run the Development Server

To start the development server, run the following command in your terminal:

```bash
npm run dev
```

Once the server is running, open your web browser and go to `http://localhost:4400` to view your plugin in action. Now it is ready to be loaded in Penpot with the url `http://localhost:4400/manifest.json`.

## Development

### Technologies Used

This plugin template uses several key technologies:

- **TypeScript**
- **Vite**
- **Web Components**

### Libraries Included

The template includes two Penpot libraries to assist in your development:

- `@penpot/plugin-styles`: <a href="https://www.npmjs.com/package/@penpot/plugin-styles" target="_blank">This library </a>provides utility functions and resources to help you style your components consistently with Penpot's design system.
- `@penpot/plugin-types`: <a href="https://www.npmjs.com/package/@penpot/plugin-types" target="_blank">This library </a>includes types and API descriptions for interacting with the Penpot plugin API, facilitating the development of plugins that can communicate effectively with the Penpot app.

## Build Your Plugin

When you're ready to build your plugin for production, run the following command:

```bash
npm run build
```

This command compiles your TypeScript code and assets into JavaScript, creating a `dist` folder that contains all the files necessary to deploy your plugin.
