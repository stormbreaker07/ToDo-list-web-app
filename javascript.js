var x = 0;
let mega = [];

function myFunction(event) {

    event.preventDefault();

    let inputList = document.querySelectorAll('input[type="text"]');
    let description = document.querySelectorAll('textarea[type="text"]')
    // let descriptionList = document
    var person = {
        fir: inputList[0].value,
        las: description[0].value,
        key: x,
    };

    x++;

    mega.push(person);

    nwFun(person, 0);

    document.getElementById('frm1').reset();

    //document.getElementById("frm1").submit();
}


function nwFun(person, flag) {


    console.log(mega);

    var lst = document.createElement('li');
    let key = person.key;


    console.log(lst);
    var element = document.getElementById('fi');
    // element.parentNode.removeChild(element);
    var name = person.fir;
    var w = document.createTextNode(name);

    lst.appendChild(w);
    descrip(lst,person);
    Dele(lst);
    upd(lst, person);
    document.getElementById('fi').appendChild(lst);

}

function descrip(lst,person) {
    var button3 = document.createElement('button');
    button3.classList.add('buttonstyle-cls4');


    button3.addEventListener('click', function () {
        alert(person.las);

        event.stopPropagation();
    });
    button3.innerText = 'Description';
    lst.appendChild(button3);
}

function Dele(lst) {
    var button = document.createElement('button');
    button.classList.add('buttonstyle-cls');


    button.addEventListener('click', function () {
        console.log(lst);
        lst.remove();

        event.stopPropagation();
    });
    button.innerText = 'Delete';
    lst.appendChild(button);
}

function upd(lst, person) {
    var button1 = document.createElement('button');
    button1.classList.add('buttonstyle-cls1');

    var flag = 0;
    if (flag == 0) {
        button1.innerText = 'update';

        lst.appendChild(button1);
    }


    button1.addEventListener('click', function () {
        console.log(button1);
        button1.style.display = 'none';
        
        var button2 = document.createElement('button');
        button2.classList.add('buttonstyle-cls1');
        button2.innerText = 'submit';
        button2.style.display = '';
        console.log(lst);
        event.stopPropagation();
        var para = document.createElement("input");
        para.style.display = '';
        para.addEventListener('click', function () {

            button2.addEventListener('click', function () {
                // event.preventDefault();
                let textinnernode = lst.childNodes[0];
                var asd = para.value;
                console.log(para);
                textinnernode.textContent = asd;
                para.removeAttributeNode;
                button1.style.display = '';
                button2.style.display = 'none';
                para.style.display = 'none';
                event.stopPropagation();

            });
             event.stopPropagation();

        });

        // lst.innerText = 'tanuj updated data';
        let textinnernode = lst.childNodes[0];
        console.log(textinnernode);
        // var takeValue = prompt('update it',textinnernode.textContent);
        // console.log(takeValue);
        // if(takeValue != null)
        // {
        //     var va =  takeValue;
        // }
        // else
        // {
        //     var va = textinnernode.textContent;
        // }
        // textinnernode.textContent = va;
        lst.appendChild(para);
        lst.appendChild(button2);
        lst.appendChild(button1);


    });
}


function darkMode() {
    var elemt = document.body;
    elemt.classList.toggle("dark-mode");

}