# Leon - Template 1 Buliding

==== **Session 1**

## Create Starter Folder and

- CSS folder
  - [index.css](css/index.css) file
  - [normalize.css](css/normalize.css) file
- images folder
- [index.html](index.html) file
- [Readme.md](readme.md) file

## Get normalize.css content

- Copy all the data from this file -> [Normalize](https://necolas.github.io/normalize.css/8.0.1/normalize.css)

- Paste all the data to [Normalize.css](CSS/normalize.css)

## Add starter data to index.css file

- Add /*Start Global Rules - box model in CSS3 for Chrome, Safari & Mozilla browsers*/

``` css
* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing:border-box;
}

body {
    font-family: 'Work Sans', sans-serif;   /*Generated using Google Fonts*/

}
```

## Add link refrences to [index.html](index.html)

```html
<!-- index.css - Main Template CSS -->
    <link rel="stylesheet" href="css/index.css">
    <!-- normalize.css - Reset the default styles & Render all elements normally-->
    <link rel="stylesheet" href="css/normalize.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet">
```

==== **Session 2**
