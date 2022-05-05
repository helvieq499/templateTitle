let setter = document.__lookupSetter__("title");
let original = document.title;
let template = "<original>";
document.__defineSetter__("title", function (value) {
  if (typeof value === "symbol")
    value = (template = value.description).replace(/<original>/gi, original);
  else value = template.replace(/<original>/gi, original = value);
  setter.call(this, value);
});
