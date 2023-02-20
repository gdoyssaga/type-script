export class ListTemplate {
    constructor(ul) {
        this.ul = ul;
    }
    render(item, value) {
        const li = document.createElement('li');
        li.innerHTML = `<h4>${value}</h4> <p>${item.format()}</p> `;
        this.ul.append(li);
    }
}
