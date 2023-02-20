export class ListTemplate {
    constructor(private ul:HTMLUListElement) {}

   render(item:Hasformatter, value: string): void{
    const li = document.createElement('li');
    li.innerHTML = `<h4>${value}</h4> <p>${item.format()}</p> `
    this.ul.append(li); 
        }   
    
}