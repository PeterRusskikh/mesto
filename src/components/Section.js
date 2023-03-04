export class Section {
  constructor({ renderer }, container) {
    this._renderer = renderer;
    this._container = container;
  }
  clear() {
    this._container.innerHTML = '';
  }
  renderItems(items) {
    this.clear();
    items.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.prepend(element);
  }
}
