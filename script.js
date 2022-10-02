const clipboardEle = document.querySelector("textarea");
const btnEle = document.querySelector("button");
const copyChecker = "false";
clipboardEle.addEventListener("input", function () {
  btnEle.innerHTML = "Copy Text";
});
btnEle.addEventListener("click", async function () {
  await navigator.clipboard.writeText(clipboardEle.value);
  btnEle.innerHTML = "Copied";

  //   copyChecker = true;
});
