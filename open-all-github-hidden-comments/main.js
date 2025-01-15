document.getElementById("runScript").addEventListener("click", async () => {
  var d = document.getElementsByClassName("Details-element");
  Array.prototype.filter.call(d, (el) => {
    el.open = true;
  });
});
