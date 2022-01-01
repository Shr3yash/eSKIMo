
 eSKIMo

<div id="top"></div>
<!--
*** Thanks for checking out. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

  
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Webpage][web]][web-url]

  
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/DrCybernotix/eSKIMo/blob/main/DemoImages/eSKIMo_Logo.png">
    <img src="DemoImages/eSKIMo_Logo.png" alt="Logo">
  </a>

  <h3 align="center">The Skimmer&Labelizer</h3>

  <p align="center">
    A text labelizing tool build using TensorFlow!
    <br />
    <a href="https://github.com/eSKIMo/blob/main/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/eSKIMo/blob/main/README.md">View Demo</a>
    ·
    <a href="https://github.com/DrCybernotix/eSKIMo/issues">Report Bug</a>
    ·
    <a href="https://github.com/DrCybernotix/eSKIMo/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project


  Whilst learning tensorflow I stumbled upon the concept of embedding which I found quite interesting and taking the motivation through it, here I tried to create an NLP model that categorises abstract statements according to their function (e.g., objective, techniques, results, etc.) so that researchers can diversify through the literature and dig further in depth when needed.

The problem statement :
* The number of RCT papers published is growing, and those without organised abstracts can be difficult to read, slowing researchers' progress through the literature.

Solution : 
* Creation of an NLP model that will do teh work of diversification of the input texts we provide and output the labels those suggest the intuitive information behind those chunks of literature.

Precisely, when we implement this in our own devices We'll be recreating and replicating better version of the deep learning model used in PubMed 200k RCT: a Dataset for Sequential Sentence Classification in Medical Abstracts, which was published in the year 2017.

Link of the paper for reference : <a href="https://arxiv.org/abs/1710.06071" target="_blank">PubMed 200k RCT</a>

Follow through to get started!

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

This section is the list of any major frameworks/libraries used to bootstrap the subsequent project. Leave any add-ons/plugins for the acknowledgements section. Here are a few assets to work with : 

* [Tensorflow](https://nextjs.org/)
* [Scikitlearn](https://reactjs.org/)
* [Keras](https://vuejs.org/)
* [Python3](https://svelte.dev/)
* [numpy](https://laravel.com)
* [Matplotlib](https://getbootstrap.com)
* [Pandas(DF)](https://jquery.com)
* [Local GPU(For optimum acceleration)](https://angular.io/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
Following are the instructions on setting up your project locally.
To get a local copy up and running, follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* pip 
  ```sh
  python -m pip install --upgrade pip
  ```
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Install TensorFlow with pip
  TensorFlow 2 packages are available
  * tensorflow —Latest stable release with CPU and GPU support (Ubuntu and Windows)
  * tf-nightly —Preview build (unstable). Ubuntu and Windows include GPU support.
  Older versions of TensorFlow
For TensorFlow 1.x, CPU and GPU packages are separate:

  * tensorflow==1.15 —Release for CPU-only
  * tensorflow-gpu==1.15 —Release with GPU support (Ubuntu and Windows)
System requirements
  * Python 3.7–3.9
  * Python 3.9 support requires TensorFlow 2.5 or later.
  * Python 3.8 support requires TensorFlow 2.2 or later.


1. Clone the repo
   ```sh
   git clone https://github.com/DrCybernotix/BlackLabelizer.git
  
   ```
   
   After cloning just open the project folder in any IDE, (Recommend: Pycharm or Visual Studio)
   Run the test.py first or either you can do this from the terminal.
   
   For terminal :
   ```sh
   cd (paste the directory location where you inported the repository)
   python test py
   ```
2. Install packages
   ```sh
   npm install
   ```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Useful examples of how the model actually works and what does it do when provided costum inputs

_For more examples, please refer to the (coming soon!) [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme


See the [open issues](https://github.com/DrCybernotix/BlackLabelizer/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create! Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Twitter/Email - [@DrCybernotix](https://twitter.com/DrCybernotix) - 12shreyashh@gmail.com

Project Link: [BlackLabelizer](https://github.com/DrCybernotix/BlackLabelizer)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

The list of resources I found helpful whilst makingg this project and would like to give credit to :

* [Choose an Open Source License](https://choosealicense.com)
* [Choosing the Estimator](https://scikit-learn.org/stable/tutorial/machine_learning_map/index.html)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/DrCybernotix/BlackLabelizer.svg?style=for-the-badge
[contributors-url]: https://github.com/DrCybernotix/BlackLabelizer/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/DrCybernotix/BlackLabelizer.svg?style=for-the-badge
[forks-url]: https://github.com/DrCybernotix/BlackLabelizer/network/members
[stars-shield]: https://img.shields.io/github/stars/DrCybernotix/BlackLabelizer.svg?style=for-the-badge
[stars-url]: https://github.com/DrCybernotix/BlackLabelizer/stargazers
[issues-shield]: https://img.shields.io/github/issues/DrCybernotix/BlackLabelizer?style=for-the-badge
[issues-url]: https://github.com/DrCybernotix/BlackLabelizer/issues
[license-shield]: https://img.shields.io/github/license/DrCybernotix/BlackLabelizer.svg?style=for-the-badge
[license-url]: https://github.com/DrCybernotix/eSKIMo/blob/main/LICENSE
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://in.linkedin.com/in/shreyash-bhatkar-5bb904194
[product-screenshot]: images/screenshot.png
[web]: https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=blue&up_message=Click%20for%20Live%20Demo&url=https%3A%2F%2Feskimobyshrysh.netlify.app%2Findex.html
[web-url]: https://eskimobyshrysh.netlify.app/index.html
