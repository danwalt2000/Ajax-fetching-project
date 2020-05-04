<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <style>
  	
  	@font-face {
  font-family: OpenSans;
  src: url("style/fonts/OpenSans-Regular.ttf");
  src: url("style/fonts/OpenSans-Regular.eot");
  src: url("style/fonts/OpenSans-Regular.woff");
  src: url("style/fonts/OpenSans-Regular.woff2");

}
@font-face {
    font-family: garamond;
    src: url("style/fonts/AdobeGaramondProRegular.ttf")
}

@font-face {
    font-family: nevis;
    src: url(style/fonts/nevis.ttf)
}

@font-face {
    font-family: Montserrat;
    src: url(style/fonts/Montserrat-Regular.ttf)
}

@font-face {
    font-family: Kievit;
    src: url(style/fonts/kievit-regular.otf)
}

@font-face {
    font-family: Roboto;
    src: url(style/fonts/Roboto-Regular.ttf)
}

@font-face {
    font-family: Roboto-Italic;
    src: url(style/fonts/Roboto-Italic.ttf)
}

@font-face {
    font-family: Merriweather;
    src: url(style/fonts/Merriweather-Regular.ttf)
}

@font-face {
    font-family: ProximaSansRegular;
    src: url(style/fonts/ProximaSansRegular.ttf)
}

@font-face {
    font-family: MYRIADPRO;
    src: url(style/fonts/MYRIADPRO-REGULAR.otf)
}

@font-face {
    font-family: pier;
    src: url(style/fonts/pier-regular.otf)
}

@font-face {
    font-family: Lato;
    src: url(style/fonts/Lato-Regular.ttf)
}



@font-face {
  font-family: "Lato";
  src: url("danwalt.000webhostapp.com/content/Lato-Regular.ttf");
}

body{
  background: grey;
}
h1 {
  border: white solid;
  font-size: 50px;
  font-family: pier sans-serif;
  color: rgb(255, 255, 255);
  text-transform: uppercase;
  line-height: 1.08;
  text-align: left;
  width: 700px;
}
h3 {
    font-size: 16px;
    font-family: "OpenSans" sans-serif;
    color: rgb(255, 255, 255);
    text-align: left;
    left: 30.937px;
    top: 381.546px;
    width: 529px;
    z-index: 170;
}

  </style>
</head>
<body>
        <h1 id="write">Test assignment  for Frontend Developer position</h1>
        <h3>We kindly remind you that your test assignment should be submitted</h3>
        <h3> as a link to github/bitbucket repository. Please be patient, we consider</h3>
        <h3> and respond to every application that meets minimum requirements.</h3>
        <h3> We look forward to your submission. Good luck! The photo has to scale</h3>
        <h3> in the banner area on the different screens</h3>
        <p id="iffont" style="colior: white;">No!</p>
        

        <script type="text/javascript">
          document.fonts.ready.then(function() {
  //Пишите условие, которое должно выполниться, после загрузки шрифтов...
  //Например текст opacity: 1 (предварительно указав в стилях opacity: 0)
  //Это предотвратит "скакание" шрифта при загрузке страницы.
  var iffpnt = document.getElementById('iffpnt');
  iffont.innerHTML = document.getElementById("write").style.fontFamily;
});
        </script>
</body>
</html>