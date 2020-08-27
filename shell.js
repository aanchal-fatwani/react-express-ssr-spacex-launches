module.exports = function shell(initialData = {}, content = "") {
  let scripts = "";
  if (content) {
    scripts = `<script>
                   window.__STATE__ = ${JSON.stringify(initialData)}
               </script>
               <script src="assets/client.js"></script>`;
  } else {
    scripts = `<script src="assets/bundle.js"> </script>`;
  }
  let page = `<!DOCTYPE html>
              <html lang="en">
              <head>
                <meta  charset="utf-8" name="viewport" content="width=device-width, initial-scale=1.0"> 
                <meta name="Description" content="Space Exploration Technologies Inc (SpaceX) launches and relevant data (We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with Space Exploration Technologies Inc (SpaceX), or any of its subsidiaries or its affiliates. The names SpaceX as well as related names, marks, emblems and images are registered trademarks of their respective owners.)">
                <title>SpaceX Launches</title>
                <link rel="icon" href="data:,">
                <link rel="preload" as="script" href="assets/client.js">
                <link rel="preconnect" href="https://images2.imgbox.com" crossorigin>
              </head>
              <style>
                html{font-size:1vw}body,html{margin:0;padding:0;border:0;vertical-align:baseline;width:fit-content;max-width:100%;overflow-x:hidden}body{font-family:"San Fransisco",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvatica Neue",Helvatica,sans-serif;font-size:1rem;line-height:1.65;color:#333;background-color:#f2f2f2;max-width:100%;overflow-x:hidden}a{text-decoration:none}ul{margin-block-start:0;margin-block-end:0}@media screen and (max-width:700px){html{font-size:1vw}.df{display:flex;flex-direction:column}.filterAr{width:100%}}@media screen and (min-width:700px) and (max-width:1024px){html{font-size:.35vw}.df{display:flex;flex-direction:row;justify-content:space-between}.filterAr{width:30%}.launchAr{width:68%;display:flex;flex-direction:row;flex-wrap:wrap}}@media screen and (min-width:1024px){html{font-size:.2vw}.df{display:flex;justify-content:space-around}.filterAr{width:18%}.launchAr{width:78%}}.mainHead{font-size:12rem;font-weight:700;letter-spacing:.2rem;margin-top:-3rem;display:inline-block;margin-left:5px}.subHead{font-size:10rem;margin:0 4rem;font-weight:700;padding-top:5px;letter-spacing:0}.content{margin:3rem}.filterAr{border-radius:1rem;margin-bottom:1rem}.bgLayer{background-color:#fff;padding-bottom:18rem;margin-bottom:8rem}.launchAr{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.launchAr>div{background-color:#fff;border-radius:2rem;color:#424794;padding:7rem;margin-bottom:8rem;max-width:76rem;max-height:155rem}.launchAr>div .imgBg{background-color:#f2f2f2;text-align:center;margin-bottom:6rem;width:72rem;height:72rem;padding:2rem}img{width:74rem;height:74rem}.filtOptions a{background-color:#c3e09d;padding:0 7rem;border-radius:1rem;font-size:7rem;color:#000;font-weight:500;margin:4rem 3rem;text-transform:capitalize;max-width:14rem}.filtOptions a.selTab{background-color:#7abb00}.filtHeads{border-bottom:.5rem solid #cbcbcb;text-align:center;font-size:7rem;font-weight:600;width:74%;color:#000;margin:auto;padding-top:2rem}.filtOptions{margin:2rem 6rem;display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between}.launchName{font-weight:700;font-size:6rem;margin-bottom:2rem}.launchInfo span:nth-child(1){font-size:6rem;color:#000;font-weight:800;margin-top:5rem}.missions{font-size:6rem;color:#000;font-weight:800;margin-top:4rem}.launchInfo span:nth-child(2),.missions li{font-size:6rem;color:#424794;font-weight:500}.name{text-align:center;font-size:7rem;padding:4rem;color:#000;display:flex;flex-wrap:wrap;justify-content:center}.name div:nth-child(1){font-weight:700;margin:.5vw}.name div:nth-child(2){font-weight:500;margin:.5vw}
              </style>
              <body>
                <div class="content">
                <h1>
                <div class="mainHead">SpaceX Launch </div><div class="mainHead">Programs</div>
                </h1>
                   <div id="app" class="wrap-inner">${content}</div>
                </div>
                  ${scripts}
              </body>
              `;

  return page;
};
