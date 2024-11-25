const browserName="Chrome";
let browserVersion='6.8';
function getBrowserVersion()
    { 
if(browserName.startsWith("Chrome"))
{
   
   
    console.log('The browser version is '+browserName + 'and the browser version is ' +browserVersion);

}
else
{
    console.log("the browser name doesnt match Chrome")
}
}
// console.log(browserVersion);
console.log(browserName);
console.log(browserVersion);
console.log(typeof(browserName));
console.log(typeof(browserVersion));
getBrowserVersion();