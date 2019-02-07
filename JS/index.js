class Tab {
    constructor(element) {
        this.element = element;
        this.data = this.element.dataset.tab;
        this.itemElement = document.querySelector(`.tabcontent[data-tab='${this.data}']`);
        this.tabItem = new TabItem(this.itemElement);
        this.element.addEventListener('click', () => this.select())
    };

    select() {
        const links = document.querySelectorAll('.tablinks');
        links.forEach(links => links.style.background = "#f1f1f1");
        links.forEach(links => links.style.color = "black");
        this.element.style.background = "#9fa3a8";
        this.element.style.color = "white";
        this.tabItem.select();
      }
}

class TabItem {
    constructor(element) {
      this.element = element;
    }
  
    select() {
      const items = document.querySelectorAll(".tabcontent");
      items.forEach(item => item.style.display = "none");
      this.element.style.display = "block";
    }
}

const links = document.querySelectorAll('.tablinks');
links.forEach( link => new Tab(link));


