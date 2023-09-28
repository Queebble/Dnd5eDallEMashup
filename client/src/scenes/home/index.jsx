import React from "react";
import Divider from "@mui/material/Divider";
import { Box, Typography, useTheme } from "@mui/material";
import userGuideOne from "../../assets/userguide1.png";
import userGuideTwo from "../../assets/userguide2.png";

const Home = () => {
  const theme = useTheme();

  return (
    <Box m="1.5rem 1rem" display="flex">
      <Box>
        <nav id="navbar">
          <Typography
            textAlign="center"
            variant="h3"
            marginTop="13px"
            marginBottom="10px"
          >
            Documentation
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "6px 15px -14px 15px", borderRadius: "1px" }}
          />
          <ul>
            <li>
              <a className="nav-link" href="#Executive Summary">
                Executive Summary
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Introduction">
                Introduction
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Technical Breakdown">
                Technical breakdown
              </a>
            </li>
            <li>
              <a className="nav-link" href="#User Guide">
                User guide
              </a>
            </li>
            <li>
              <a className="nav-link" href="#Appendices">
                Appendices
              </a>
            </li>
          </ul>
        </nav>
      </Box>
      <Box
        maxHeight="90vh"
        display="block"
        width="100%"
        p="1.25rem 1rem"
        backgroundColor={theme.palette.primaryblack.default}
        borderRadius="0.55rem"
        sx={{ overflowY: "scroll" }}
        margin="auto"
        marginLeft="15rem" // Add this line to set the margin
      >
        <section id="Executive Summary">
          <Typography variant="h2">Executive Summary</Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "5px 15px 10px 15px", borderRadius: "1px" }}
          />
          <Typography variant="h6" marginLeft="10px">
            The React app represents a unique fusion of the Dnd5e API and Dall E
            2 API, serving as an innovative solution to a longstanding need
            within the Dungeons and Dragons (DnD) community. By seamlessly
            generating images of player portraits, monsters, and providing an
            extensive monster and magic-item encyclopedia, this app enhances the
            DnD experience. It offers players a dynamic means to visualize
            characters and creatures in novel contexts, fostering creativity and
            engagement in the world of DnD. Its ability to bridge the gap
            between text-based information and vivid imagery is what sets this
            app apart, making it an essential tool for both seasoned adventurers
            and newcomers to the realm of tabletop role-playing games.
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "10px 15px 5px 15px", borderRadius: "1px" }}
          />
        </section>
        <section id="Introduction">
          <Typography variant="h2">Introduction</Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "5px 15px 10px 15px", borderRadius: "1px" }}
          />
          <Typography variant="h3" marginLeft="10px" marginBottom="5px">
            Description
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            My innovative React app serves as a bridge between the Dnd5e API and
            Dall E 2 API, addressing a significant need within the Dungeons and
            Dragons (DnD) community. It seamlessly generates player portraits
            and detailed monster images while offering an extensive monster and
            magic-item encyclopedia. In a realm traditionally dominated by
            text-based descriptions, my app introduces a transformative element,
            allowing DnD players to vividly visualize characters and creatures
            in entirely new contexts. This novel approach not only enhances
            gameplay but also sparks creativity, providing a refreshing
            dimension to the DnD experience. What sets my app apart is its
            ability to combine data and imagery effortlessly, making it an
            indispensable tool for both newcomers and seasoned adventurers in
            the world of tabletop role-playing games.
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
          />
          <Typography variant="h3" marginLeft="10px" marginBottom="5px">
            System Requirements
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>User Story 1:</strong> As an enthusiastic DnD player, I want
            the system to craft a unique player portrait for me through the Dall
            E 2 API. This will enable me to immerse myself in our Dungeons and
            Dragons sessions with vivid visual representations of my character.
            <ul>
              <li>
                The DnD5e API will be employed to provide an extensive selection
                of Classes, Alignments, Races, and Subraces, facilitating
                character creation for players.
              </li>
              <li>
                Leveraging the Dall E 2 API, our system will generate a spectrum
                of imaginative and distinct character portraits, enhancing the
                immersive quality of the gameplay.
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>User Story 2:</strong> In my role as Dungeon Master, I
            require the system to generate unique monster portraits using the
            Dall E 2 API. This feature will empower me to offer my players
            vibrant visual depictions of the creatures they encounter, elevating
            the overall experience of our Dungeons and Dragons sessions.
            <ul>
              <li>
                The DnD5e API will be harnessed to access a comprehensive array
                of monsters, enriching the variety of adversaries within the
                game.
              </li>
              <li>
                Employing the Dall E 2 API, our system will create captivating
                and distinct monster images, ensuring that each encounter is
                visually captivating and memorable for the players.
              </li>
            </ul>
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>User Story 3:</strong> As a dedicated DnD player, I seek a
            user-friendly monster and magic-item encyclopedia sourced from the
            Dnd5e API. This resource will empower me to swiftly access critical
            game information and make informed decisions during gameplay.
            <ul>
              <li>
                Integrating the Dnd5e API will enable the retrieval and display
                of comprehensive data on monsters and magic items, serving as an
                invaluable reference tool for players seeking deeper insights
                into the game's mechanics and lore.
              </li>
              <li>
                Additionally, the Dall E 2 API will be instrumental in producing
                captivating and diverse images for both monsters and magic
                items, further enriching the gaming experience.
              </li>
            </ul>
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
          />
          <Typography variant="h3" marginLeft="10px" marginBottom="5px">
            Resources
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>Dnd API (Dnd5e API):</strong>
          </Typography>
          <ul>
            <li>
              API Link: <a href="http://www.dnd5eapi.co/">DnD API</a>
            </li>
            <li>
              Documentation:{" "}
              <a href="http://www.dnd5eapi.co/docs/">DnD API Documentation</a>
            </li>
            <li>
              EndPoints:
              <ul>
                <li>
                  Get All DnD5e Classes:{" "}
                  <a href="https://www.dnd5eapi.co/api/classes/">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get All DnD5e Races:{" "}
                  <a href="https://www.dnd5eapi.co/api/races/">API Endpoint</a>
                </li>
                <li>
                  Get All DnD5e Sub-races:{" "}
                  <a href="https://www.dnd5eapi.co/api/subraces/">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get All DnD5e Alignments:{" "}
                  <a href="https://www.dnd5eapi.co/api/alignments/">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get All DnD5e Monsters:{" "}
                  <a href="https://www.dnd5eapi.co/api/monsters/">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get Detailed Information about a Specified Monster:{" "}
                  <a href="https://www.dnd5eapi.co/api/monsters/acolyte">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get All DnD5e Magic-Items:{" "}
                  <a href="https://www.dnd5eapi.co/api/magic-items/">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Get Detailed Information about a Specified Magic-Item:{" "}
                  <a href="https://www.dnd5eapi.co/api/magic-items/adamantine-armor ">
                    API Endpoint
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              API Link: <a href="https://openai.com/product">Dall E 2 API</a>
            </li>
            <li>
              Documentation:{" "}
              <a href="https://platform.openai.com/docs/guides/images">
                DnD API Documentation
              </a>
            </li>
            <li>
              EndPoints:
              <ul>
                <li>
                  Generate Images from Prompt:{" "}
                  <a href="https://api.openai.com/v1/images/generations">
                    API Endpoint
                  </a>
                </li>
                <li>
                  Description: This endpoint generates images based on
                  user-provided prompts. It requires an authentication header
                  with an API key and a request body that includes the prompt,
                  number of images to generate, and image size (256x256,
                  512x512, or 1024x1024). The generated images are returned as
                  URLs.
                </li>
              </ul>
            </li>
          </ul>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
          />
          <Typography variant="h3" marginLeft="10px" marginBottom="5px">
            Persistance Service
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>Cloud Services:</strong>
          </Typography>
          <Typography variant="h6">
            <ul>
              <li>
                Amazon EC2 (Elastic Compute Cloud): Amazon EC2 is utilized for
                hosting and running server-side code and applications. Link to{" "}
                <a href="https://aws.amazon.com/ec2/">EC2.</a>
              </li>
              <li>Amazon S3 Bucket:</li>
              <ul>
                <li>
                  Page View Counter: To maintain an accurate page view count, my
                  server-side code interacts with the designated S3 bucket. It
                  checks for the presence of a usercounter.json file within the
                  bucket. If this file does not exist, the server creates the
                  usercounter.json, initializing the counter at 1. In cases
                  where the file already exists, the server increments the
                  counter by one, ensuring an up-to-date count of page views.
                </li>
                <li>
                  Static Website Hosting: The S3 bucket acts as a hosting
                  platform for my client-side application. All client-side
                  assets, including HTML, JavaScript, CSS, and media files, are
                  securely stored within the bucket.
                </li>
                <li>
                  Link to <a href="https://aws.amazon.com/s3/">S3.</a>
                </li>
              </ul>
            </ul>
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <strong>Docker Image:</strong>
          </Typography>
          <Typography variant="h6" marginLeft="20px">
            <a href="https://hub.docker.com/r/quebble/server">
              Link to docker image.
            </a>
          </Typography>
          <Divider
            color={theme.palette.buttonborder.default}
            sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
          />

          <section id="Technical Breakdown">
            <Typography variant="h2">Technical Breakdown</Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "5px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h6" marginLeft="10px" marginBottom="10px">
              The application architecture is designed around a client-server
              model, with distinct client-side and server-side components.
            </Typography>
            <Typography variant="h3" marginLeft="20px">
              Client Side:
            </Typography>
            <Typography variant="h6">
              <ul>
                <li>
                  <strong>React:</strong> The client-side of the application is
                  developed using React, a popular JavaScript library for
                  building user interfaces. React provides a component-based
                  architecture that enables the creation of interactive and
                  dynamic web interfaces.
                </li>
                <li>
                  <strong>React-Redux:</strong> React-Redux is employed for
                  state management on the client side. It allows for efficient
                  handling of application state and data flow, ensuring that
                  components have access to the necessary data without prop
                  drilling.
                </li>
                <li>
                  <strong>React-DOM:</strong> React-DOM is used to render React
                  components in the web browser. It bridges the gap between
                  React and the Document Object Model (DOM), enabling the
                  display of React components in the HTML document.
                </li>
                <li>
                  <strong>Mui (Material-UI) Components:</strong> Material-UI is
                  a widely used library that provides pre-designed, customizable
                  React components following the Material Design principles.
                  These components are used for creating a visually appealing
                  and consistent user interface.
                </li>
              </ul>
            </Typography>
            <Typography variant="h3" marginLeft="20px">
              Server Side:
            </Typography>
            <Typography variant="h6">
              <ul>
                <li>
                  <strong>Express:</strong> The server-side of the application
                  is built using Express.js, a popular Node.js framework for
                  building web applications. Express simplifies the creation of
                  robust APIs and routing logic.
                </li>
                <li>
                  <strong>AWS (Amazon Web Services):</strong> AWS services are
                  leveraged for various functionalities such as hosting, and
                  cloud storage (S3 bucket for persistence). AWS offers
                  reliability for the server-side infrastructure.
                </li>
                <li>
                  <strong>Helmet & Morgan:</strong> The server-side of the
                  application is built using Express.js, a popular Node.js
                  framework for building web applications. Express simplifies
                  the creation of robust APIs and routing logic.
                </li>
              </ul>
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 15px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Implementation:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              The implementation of the project involves integrating the
              React-based client-side with the Express.js server-side. The
              client communicates with the server to fetch data from the Dnd5e
              API and to generate images using the Dall E 2 API.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              EC2 Server Hosting:
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  The Express.js server is hosted on an Amazon EC2 (Elastic
                  Compute Cloud) instance running Ubuntu. EC2 provides a
                  scalable and configurable virtual server environment.
                </li>
                <li>
                  Docker containers are utilized on the EC2 instance to
                  encapsulate the server-side application. Docker ensures
                  consistency in deployment across different environments.
                </li>
              </ul>
            </Typography>
            <Typography variant="h3" marginLeft="20px">
              Client-Side Hosting on S3:
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              <ul style={{ marginLeft: "-20px" }}>
                <li>
                  The client-side assets, including HTML, JavaScript, and CSS
                  files, are hosted on an Amazon S3 bucket. S3 offers a reliable
                  storage solution for static assets.
                </li>
                <li>
                  The S3 bucket can be configured for website hosting, making it
                  accessible via a public URL. This URL serves as the
                  client-side application's entry point.
                </li>
              </ul>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              In summary, the architecture combines the strengths of React for
              the client-side and Express.js for the server-side, with AWS
              services providing reliability.{" "}
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Architecture and Data Flow:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              My application's codebase is thoughtfully structured to enhance
              maintainability and modularity, promoting efficient development,
              and debugging. The organization is divided into server-side and
              client-side components, each with its own hierarchy.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Server-Side (Express.js Application):</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              index.js (Main Entry Point): This file serves as the entry point
              for the server-side application, where server setup, middleware
              configuration, and route handling are initiated. It acts as the
              orchestrator of the server-side logic.
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              Controllers Folder: The Controllers folder contains modules
              responsible for processing incoming requests, fetching data from
              external APIs, and preparing responses. Each controller
              corresponds to a specific route or resource.
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              Routes Folder: Within the Routes folder, route definitions are
              organized. These route files are designed to delegate incoming
              requests to the appropriate controllers for processing. This
              separation of routes and controllers enhances code readability and
              maintainability.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Client-Side (React Application):</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              index.js (Main Entry Point): The index.js file on the client side
              serves as the entry point for the React application. It is where
              the Redux store is configured, and where App.js is called
              rendering React components and setting up routing using React
              Router.
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              Scenes Folder: The Scenes folder is responsible for containing
              React components that represent the main pages or views of the
              application. Each scene typically corresponds to a distinct
              section or feature of the app, promoting modularity and
              reusability.
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              State Folder: Inside the State folder, I manage the application's
              state using Redux, a popular state management library. It includes
              two primary components:
              <ul>
                <li>
                  createApi: This module defines API endpoints and actions for
                  fetching and updating data from the server. It abstracts the
                  API communication logic, promoting code separation and
                  maintainability.{" "}
                </li>
                <li>
                  fetchBaseQuery: This module defines the base query logic for
                  making API requests. It is integrated into Redux Toolkit to
                  streamline data fetching and state management.
                </li>
              </ul>
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Assets Folder:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              The Assets folder houses static assets such as images used in the
              client-side application. This separation keeps the assets
              organized and easily accessible.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Deployment and the Use of Docker:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              In my project, Docker was used to encapsulate the server-side
              application and facilitate streamlined deployment. This section
              provides insights into how Docker was employed and discusses
              specific configuration choices.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Dockerfile (Server-Side):</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              I created a Dockerfile within the server folder to define the
              image for my server-side application. Here are the key components
              of the Dockerfile:
              <ul>
                <li>
                  <strong>Base Image:</strong> I utilized an official Node.js
                  runtime as the base image (Node.js version 18).
                </li>
                <li>
                  <strong>Working Directory:</strong> The working directory
                  within the container was set to /mashup.
                </li>
                <li>
                  <strong>Dependency Installation:</strong> I copied the
                  package.json and package-lock.json files to the container and
                  ran npm install to install server dependencies, ensuring that
                  the required packages were available within the container.
                </li>
                <li>
                  <strong>Application Files:</strong> Server-side application
                  files were copied into the container using COPY. This included
                  all necessary server scripts, configurations, and resources.
                </li>
                <li>
                  <strong>Port Exposure:</strong> Port 5000 was exposed within
                  the container.
                </li>
                <li>
                  <strong>Start Command:</strong> The Dockerfile specified the
                  command to start the Node.js server using CMD ["npm",
                  "start"].
                </li>
              </ul>
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Docker Compose:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              To facilitate Docker container management and orchestration, I
              used Docker Compose. The docker-compose.yml file allowed us to
              define the server service and its configuration. Key components of
              the Docker Compose configuration include:
              <ul>
                <li>
                  <strong>Service Definition:</strong> I defined a server
                  service within the Compose file, specifying the build context
                  and Dockerfile location.
                </li>
                <li>
                  <strong>Port Mapping:</strong> I mapped port 5000 within the
                  container to port 5000 on the host machine, enabling external
                  access to the server.
                </li>
                <li>
                  <strong>Neccessity:</strong> I understand that docker-compose
                  was not necessary for this project, but I thought I would use
                  this opportunity to learn more about the software.
                </li>
              </ul>
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Passing API Key to Docker Container:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              As the Dall E API required an API key for authentication, I
              utilized environment variables to securely pass the API key to the
              Docker container during runtime.
            </Typography>
            <Box
              backgroundColor={theme.palette.buttonborder.default}
              p="10px 10px 10px 10px"
              borderRadius="0.55rem"
              margin="10px"
            >
              <Typography variant="h6" marginLeft="10px">
                Docker Command:
              </Typography>
              <Box
                padding="15px"
                margin="10px"
                backgroundColor={theme.palette.primaryblack.default}
                borderRadius="0.55rem"
              >
                <Typography>
                  docker run -d -p 5000:5000 -e OPENAI_API_KEY=************
                  quebble/server:latest
                </Typography>
              </Box>
            </Box>
            <Typography variant="h6" marginLeft="20px">
              In this command:
              <ul>
                <li>-d runs the container in detached mode.</li>
                <li>
                  -p 5000:5000 maps port 5000 from the host to the container.
                </li>
                <li>
                  -e OPENAI_API_KEY=************ environment variable within the
                  container to authenticate with the Dall E API.
                </li>
              </ul>
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Challenges and Considerations:</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              While Docker provided an effective means of containerising my
              server-side application, challenges may arise related to
              environment variables, ensuring correct dependencies, and managing
              container networking when scaling or deploying in production.
              These aspects should be carefully addressed to ensure a seamless
              deployment process.
            </Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              <strong>Dockerfile (Server-Side):</strong>
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              For reference, the Dockerfile & docker-compose used for my
              server-side application is provided in the appendix of this
              report.
            </Typography>
          </section>
          <section id="User Guide">
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h2">User Guide</Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              Generating Portraits:
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              <ol>
                <li>
                  <strong>Character Portraits:</strong> - Click on the
                  "Portraits" button in the sidebar. - Select your desired
                  character traits, adjectives, and art styles. - Click
                  "Generate" to send your preferences to the Dall E 2 API. -
                  Your unique character portrait will be displayed.
                </li>
                <li>
                  <strong>Monster Portraits:</strong> - Navigate to the
                  "Portraits" tab. - Choose your preferred monster traits and
                  styles. - Click "Generate" to request a distinctive monster
                  image. - The generated monster portrait will be shown.
                </li>
              </ol>
            </Typography>
            <Box
              borderRadius="0.55rem"
              backgroundColor={theme.palette.buttonborder.default}
              padding="15px"
              maxWidth="1095px"
            >
              <Box borderRadius="0.55rem">
                <img
                  src={userGuideOne}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                  }}
                />
              </Box>
            </Box>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              Exploring the Encyclopedia:
            </Typography>
            <Typography variant="h6" marginLeft="20px">
              <ol>
                <li>
                  <strong>Monster Encyclopedia:</strong> - Click on the
                  "Encyclopedia" button in the sidebar. - Explore the table of
                  monsters, including their names and types. - Select a monster
                  to view its detailed statistics and descriptions. - To
                  generate an image of the selected monster, click the "Generate
                  Image" button.
                </li>
                <li>
                  <strong>Magic-Item Encyclopedia:</strong> - Access the
                  "Encyclopedia" tab. - Browse through a list of magic items
                  with names and properties. - Choose a magic item to view its
                  comprehensive information. - Click "Generate Image" to create
                  an image representation of the selected magic item.
                </li>
              </ol>
            </Typography>
            <Box
              borderRadius="0.55rem"
              backgroundColor={theme.palette.buttonborder.default}
              padding="15px"
              maxWidth="1095px"
            >
              <Box borderRadius="0.55rem">
                <img
                  src={userGuideTwo}
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "1080px",
                    maxHeight: "1920px",
                  }}
                />
              </Box>
            </Box>
          </section>
          <section id="Appendices">
            {" "}
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h2">Appendices</Typography>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              Dockerfile:
            </Typography>
            <Box
              backgroundColor={theme.palette.buttonborder.default}
              p="10px 10px 10px 10px"
              borderRadius="0.55rem"
              margin="10px"
            >
              <Typography variant="h6" marginLeft="10px">
                Dockerfile:
              </Typography>
              <Box
                padding="15px"
                margin="10px"
                backgroundColor={theme.palette.primaryblack.default}
                borderRadius="0.55rem"
              >
                <Typography>FROM node:18</Typography>
                <Typography>WORKDIR /mashup</Typography>
                <Typography>COPY ./server/package*.json ./</Typography>
                <Typography>RUN npm install</Typography>
                <Typography>COPY ./server/ ./</Typography>
                <Typography>EXPOSE 5000</Typography>
                <Typography>CMD ["npm", "start"]</Typography>
              </Box>
            </Box>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
            <Typography variant="h3" marginLeft="20px">
              Docker-compose file:
            </Typography>
            <Box
              backgroundColor={theme.palette.buttonborder.default}
              p="10px 10px 10px 10px"
              borderRadius="0.55rem"
              margin="10px"
            >
              <Typography variant="h6" marginLeft="10px">
                Docker-compose file:
              </Typography>
              <Box
                padding="15px"
                margin="10px"
                backgroundColor={theme.palette.primaryblack.default}
                borderRadius="0.55rem"
              >
                <Typography>version: "3"</Typography>
                <Typography>services:</Typography>
                <Typography>&nbsp;server:</Typography>
                <Typography>&nbsp;&nbsp;build:</Typography>
                <Typography>&nbsp;&nbsp;&nbsp;context: .</Typography>
                <Typography>
                  &nbsp;&nbsp;&nbsp;dockerfile: ./server/Dockerfile
                </Typography>
                <Typography>&nbsp;&nbsp;ports:</Typography>
                <Typography>&nbsp;&nbsp;&nbsp;- "5000:5000"</Typography>
              </Box>
            </Box>
            <Divider
              color={theme.palette.buttonborder.default}
              sx={{ margin: "10px 15px 10px 15px", borderRadius: "1px" }}
            />
          </section>
        </section>
      </Box>
    </Box>
  );
};

export default Home;
