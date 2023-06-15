<div align="center">
<h1>MegaAdsFront</h1>
<p>
Sales Advertisements
</p>
<hr>

<h4>
    <a href="https://wyso.networkmanager.pl/">View Demo</a>
</h4>
<hr>
</div>

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Screen](#screen)

## General info
The project made during the ***MegaK v2*** course. <br>
The goal of this application is to provide a user-friendly platform for selling and buying products or services, while also enabling easy geographical exploration of listings.

## Technologies
**Frontend** is created with:
* React.js
* Typescript
* mySQL  

### Setup

### Step 1
``
$ git clone https://github.com/MWyso/MegaAdsFront.git
``
### Step2
#### Combination of types with [BE].
In the **tsconfig.paths.json** file
````
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "types": [
        "../mega-ads-back/types"
      ]
    }
  }
}
````

Add the path location to the **/types** file from the MegaAdsBack.
<br>
***"../mega-ads-back/types"***

### Step3
Use script from package.json
<br>
````
 "scripts": {
    "start": "react-app-rewired start",
````

## Screen

![aplication](/src//assets/images/ads1.jpg "aplication")
![aplication](/src//assets/images/ads3.jpg "aplication")
![aplication](/src//assets/images/ads2.jpg "aplication")
