document.__proto__ = new Proxy(document.__proto__, {
  __original: "",
  __template: "<original>",
  set: function (obj, prop, value, recv) {
    if (prop == "title")
      if (typeof value === "symbol")
        value = (this.__template = value.description).replace(/<original>/gi, this.__original);
      else value = this.__template.replace(/<original>/gi, this.__original = value);
    return Reflect.set(obj, prop, value, recv);
  },
  get: function (obj, prop, recv) {
    if (prop == "title")
      return this.__original;
    return Reflect.get(obj, prop, recv);
  }
});
