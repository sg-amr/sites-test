//何番目の雑学か？
const id = 1;

//GASのURL
const WebAppURL = "https://script.google.com/macros/s/AKfycbyWLs-2-sjRDVGIIK-QKENNOsM5j5R8DsjO3c1kuNvLvzl4UCm_pHr_f0x2Ldz8Qsw_/exec";

//fetchして雑学を取得
const TargetURL = WebAppURL + "?id=" + id;
let fetchDate;
fetch(TargetURL)
  .then(response => {
    // レスポンス処理
    return.date.json
  })
  .catch(error => {
    
  });