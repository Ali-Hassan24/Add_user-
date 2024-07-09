var myDatabase = [
    {name:'Ali Hassan',email:'hassan@gmail.com',age:20},
    {name:'Usman Khan',email:'Usman@gmail.com',age:22},
    {name:'Umer',email:'umer@gmail.com',age:26},
];
(function Avators(db){

    var init = function(){
        generateList();
        enterUser();
    }
    var generateList = function(){
       var parent = document.querySelector('#parent_avatars');
       var template = '';
       for(var i=0; i<db.length;i++){
             template += '    <div class="col-sm-4">';
             template += '     <div class="card p-3 mt-3"> ';
             template += '       <div class="close">'; 
             template += '          <div class="card-delete " data-card="'+i+'">X</div>'; 
             template += '       </div'; 
              template += '      <div class="card-block ">';
              template += '           <h3 class="card-title">'+ db[i].name +'</h3>';
              template += '             <p class="card-text">';
              template += '                  <strong class="text-danger">Email: </strong><br>'+ db[i].email +'</span>';
              template +=  '             </p>';
              template += '             <p class="card-text">';
              template +=  '                  <strong class="text-danger">Age:</strong><br><span>'+ db[i].age +'</span>';
              template += '              </p>';
              template += '        </div>';
              template += '    </div>';
              template += ' </div>';
       }
       parent.innerHTML='';
       parent.insertAdjacentHTML('afterbegin',template);
       deleteCard();
    }
    var enterUser = function(){
        function grabUser(){
            var name = document.querySelector('#user_name').value;
            var email = document.querySelector('#user_email').value;
            var age = document.querySelector('#user_age').value;
            var elements = [name,email,age];
            if(validateUser(elements)){
                document.querySelector('#myForm').reset();
               db.push({name:name,email:email,age:age})
               generateList();
            }else{
                document.querySelector('#error').style.display = 'block';
                setTimeout(function(){
                    document.querySelector('#error').style.display = 'none'; 
                },3000)
            }
        }
        document.querySelector('#myForm').addEventListener("submit",function(event){
            event.preventDefault();
            grabUser();
        })
    }

    var validateUser = function(elements){
        for(var i=0; i< elements.length; i++){
            if(elements[i] == ""){
                return false
            }
            return true
        }
    }

    var deleteCard = function(){
        var buttons = document.querySelectorAll('.card-delete');
        
        function deleteThis(element){
            var obj = parseInt(element.getAttribute('data-card'));
            db.splice(obj,1);
            generateList();
            confirm("Are you sure to Delete card");
        }

        for(var i =0; i<buttons.length; i++){
            buttons[i].addEventListener('click',function(e){
                deleteThis(this);
            })
        }
    }
    init();
}(myDatabase))