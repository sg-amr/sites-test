//何番目の雑学か？
const number = 1;

//GASのURL
const WebAppURL = "";

//fetchして雑学を取得
const TargetURL = WebAppURL + "?num=" + number;
let fetchDate;
fetch(TargetURL).then(Response => {
    fetchDate = Response;
});
fetchDate.