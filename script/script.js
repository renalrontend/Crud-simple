class App {
     app() {
          window.addEventListener('click', function(parameter){
               const target = parameter.target;
               let number = target.parentElement.children[1];

               if(target.classList.contains('trash')){
                    new RemoveData(target).removeData();
               }else if(target.classList.contains('minus')){

                    if(number.innerHTML > 1) number.innerHTML--;

               }else if(target.classList.contains('plus')) number.innerHTML++;
               
          }) 

          return this;
     }

     inputProcess(){
          const input = document.querySelector('input');
          const button = document.querySelector('button');
          const emptyListInfo = document.querySelector('.emptyListInfo');
          const succsesInput = document.querySelector('#succsesInput');

          button.addEventListener('click', function(){
               if(input.value == '') alert('The input is empty');
               else {
                    const data = new GetData(input.value).render(); 
                    emptyListInfo.style.display = 'none';
                    succsesInput.style.display = 'block'

                    setTimeout(() => succsesInput.style.display = 'none', 2000);
               }
          })

          return this;
     }
     
}

class GetData {
     constructor(value){
          this.value = value;
     }

     render(){
          const element = document.createElement('tr');
          const table = document.querySelector('table');
          let data = this.value;

          element.innerHTML = `
               <td>${data}</td>
               <td><span class="minus">-</span> <span> 1 </span> <span class="plus">+</span></td>
               <td><i class="fa fa-trash-o trash"></i></td>
          `;

          table.appendChild(element);

          return this;
     }
}

class RemoveData {
     constructor(value) {
          this.value = value;
     }

     removeData(){
          const table = document.querySelector('table');
          const emptyListInfo = document.querySelector('.emptyListInfo');
          let question = confirm('Are you sure you want to delete this item?');
          
          if(question) {
               if(table.children.length == 2) emptyListInfo.style.display = 'table-cell';               
               table.removeChild(this.value.parentElement.parentElement);
          }

          return this;
     }
}


const apps = new App().app().inputProcess();