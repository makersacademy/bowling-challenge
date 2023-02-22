<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/terryhycheng/bowling-challenge">
    <img src="images/logo.png" alt="Logo" width="100" height="100">
  </a>

<h3 align="center">Bowling Challenge in <strong>Typescript</strong></h3>
<p>Count and sum the scores of a bowling game for one player</p>

[![circleci-build][circleci-build-shield]][circleci-build-url]

  <p align="center">
    <a href="https://github.com/terryhycheng/bowling-challenge/issues">Report Bug</a>
    ·
    <a href="https://github.com/terryhycheng/bowling-challenge/issues">Request Feature</a>
  </p>
</div>

## Table of Contents

- [Table of Contents](#table-of-contents)
- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running Tests](#running-tests)
  - [Production Build](#production-build)
- [Contributing](#contributing)
- [Contact](#contact)

<!-- ABOUT THE PROJECT -->

## About The Project

The aim of this project is to build an **interactive terminal programme** to count and sum the scores of a bowling game for one player.

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

### Built With

This project was built with the following tools:

- [![Typescipt][typescript-shield]][typescript-url]
- [![CircleCI][circleci-shield]][circleci-url]
- [![Jest][jest-shield]][jest-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This section shows you how to set up this project locally. First, get a local copy up and running follow these simple steps.

### Prerequisites

You have to make sure that `npm` and `node` have been installed in your local machine before running the project. If not, follow the steps below.

- npm

  ```sh
  npm install npm@latest -g
  npm -v
  ```

- nvm & node
  ```sh
    # visit https://github.com/nvm-sh/nvm on how to install nvm
    nvm install node
    node -v
  ```

---

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/terryhycheng/bowling-challenge.git
   cd bowling-challenge
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

---

### Running Tests

Before compiling the codes into production-ready Javascript, you should run the tests and make sure every line can be run without causing any errors.

1. Run the tests
   ```sh
   npm run test
   ```

Then, test coverage reports will be automatically generated in the folder `coverage`. You can modify the setting in `jest.config.js` to turn this coverage function off.

---

### Production Build

This project was built with `Typescript`. You have to covert all TS codes into JS before passing to deployment.

1. Build with Typescript
   ```sh
   npm run build
   ```

All production-ready Javascript codes will be put in the folder `dist`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Terry Cheng - [@terryhycheng](https://twitter.com/terryhycheng) - terryhycheng@gmail.com

Project Link: [https://github.com/terryhycheng/bowling-challenge](https://github.com/terryhycheng/bowling-challenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[typescript-shield]: https://img.shields.io/badge/Typescript-3178c6?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[circleci-shield]: https://img.shields.io/badge/circleci-000000?style=for-the-badge&logo=circleci&logoColor=white
[circleci-url]: https://circleci.com/
[jest-shield]: https://img.shields.io/badge/jest-c21325?style=for-the-badge&logo=jest&logoColor=white
[jest-url]: https://jestjs.io/
[circleci-build-shield]: https://dl.circleci.com/status-badge/img/gh/terryhycheng/bowling-challenge/tree/main.svg?style=svg
[circleci-build-url]: https://dl.circleci.com/status-badge/redirect/gh/terryhycheng/bowling-challenge/tree/main
