# Portfolio

Hi. This is my portfolio. Built with NodeJS and server side rendering with `PUG` template.
[Demo link](https://github.com/BeastyDSK/PortFolio/assets/53361004/25956988-c65e-4bb2-9bc6-ba81a4d83a91)


## Demo

To run the application locally, please follow the below steps:

1. First ensure that you have NodeJS >= 16 installed in your system by running `node -v`in any terminal.

2. Clone the repo and open it in any code editor that you prefer.

3. Open a terminal and cd to repo directory.

4. Now run `npm i` to install the dependencies.

5. Open another terminal and run `touch config.env` or replace the `touch` command with the code editor that you are using. For VS Code run `code config.env`.

6. Now paste the below content inside the config.env file.

NODE_ENV=development

PORT=8076

7. Once the installation is completed. Run `npm start` to start the server.

8. Open any browser and go to `http://localhost:8076`.

## Development

For development please complete the steps from 1 to 6 in the demo section.

-   Folder structure:

    -   sass (CSS logic)

    -   static (used for serving static files like css and js)

    -   views (UI logic)

-   The application contains both UI and backend logic.

    -   Backend is return using `NodeJS`.

    -   Front end is written using `PUG` template.

-   Below are the commands used for development

| command      | purpose                                                                                    | Used in    |
| ------------ | ------------------------------------------------------------------------------------------ | ---------- |
| css:watch    | To watch for changes in the SASS files and update the main CSS file when change occurs     | dev        |
| css:compile  | To generate the main CSS production file                                                   | production |
| css:prefix   | To provide backward browser compatibility for CSS                                          | production |
| css:compress | To minify CSS file by removing unwanted line breaks and spaces                             | production |
| start:dev    | To start the server in watch mode                                                          | dev        |
| start        | To start the server                                                                        | production |
| minify:js    | To minify client JS file by removing unwanted line breaks and spaces                       | production |
| run-all      | To generate the production CSS and JS build (involves all the production related commands) | production |

# 😀

