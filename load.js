function getUrlParams(url) {
  const params = {};
  const queryString = url.substring(url.indexOf('?') + 1);
  const parts = queryString.split('&');

  for (let i = 0; i < parts.length; i++) {
      const pair = parts[i].split('=');
      const key = decodeURIComponent(pair[0]);
      const value = decodeURIComponent(pair[1] || '');
      if (key) {
          params[key] = value;
      }
  }

  return params;
}

//何番目の雑学か？
const currentUrl = window.location.href;
const params = getUrlParam(currentUrl);

const id = params.id;

//GASのURL
const WebAppURL = "https://script.google.com/macros/s/AKfycbyWLs-2-sjRDVGIIK-QKENNOsM5j5R8DsjO3c1kuNvLvzl4UCm_pHr_f0x2Ldz8Qsw_/exec";

//要素取得
const contentElement = document.getElementById("content");
const titleElement = document.getElementById("title")

//fetchして雑学を取得
const TargetURL = WebAppURL + "?id=" + id;
let fetchDate;
fetch(TargetURL)
  .then(function (date) {
    // レスポンス処理
    return date.json()
  })
  .then(function (json){
    //htmlにロード
    const date = JSON.parse(json);
    contentElement.innerHTML = date.html;
    titleElement.innerHTML = date.title;
  });