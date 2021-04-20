const list = document.getElementById("list");

Sortable.create(list, {
  Animation: 150,
  chosenClass: "selected",
  ghostClass: "ghost",
  dragClass: "drag",

  onEnd: () => {
    console.log("moved element");
  },

  group: "list-persons",
  store: {
    // guardar ordem da lista
    set: (sortable) => {
      const orderList = sortable.toArray();
      localStorage.setItem(sortable.options.group.name, orderList.join("|"));
    },
    //obter a ordem da lista
    get: (sortable) => {
      const orderList = localStorage.getItem(sortable.options.group.name);
      return orderList ? orderList.split("|") : [];
    },
  },
});
