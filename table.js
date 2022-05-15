const body=document.body
const form=document.createElement('form')
form.setAttribute('name','form1')
const div=document.createElement('div')
div.setAttribute("class",'container')
const table=document.createElement('table')
table.setAttribute('id','mytable')
table.setAttribute('border','4')
const tr=document.createElement('tr')
const td=document.createElement('td')
td.textContent="Name"
const td1=document.createElement('td')
td1.textContent="Mobile Number"
const td2=document.createElement('td')
td2.textContent="Gmail"
const input=document.createElement('input')
input.setAttribute('id','name')
input.setAttribute('type','text')
const user_name=document.createElement('h4')
user_name.textContent="Name"
const number=document.createElement('input')
number.setAttribute('id','number')
number.setAttribute('type','text')
const user_number=document.createElement('h4')
user_number.textContent="Number"
const gmail=document.createElement('input')
const title3=document.createElement('h4')
title3.textContent="gmail"    
gmail.setAttribute('id','gmail')
gmail.setAttribute('type','email')
const submit=document.createElement('button')
submit.setAttribute('id','submit')
submit.setAttribute('type','button')
submit.textContent="Submit"
const card=document.createElement('div')
card.setAttribute('id','card')
form.append(user_name)
form.append(input) 
form.append(user_number)
form.append(number)
form.append(title3)
form.append(gmail)
form.append(submit)  
tr.append(td)
tr.append(td1)
tr.append(td2)
table.append(tr)
div.append(form)
div.append(table)
body.append(div)
let nameinput = document.getElementById('name');
let numberinput = document.getElementById('number');
let gmailinput = document.getElementById('gmail');
submit.addEventListener('click', () => {
    let name = nameinput.value;
    let number = numberinput.value;
    let gmail = gmailinput.value;
    let template = `
                <tr>
                    <td id ='tablename' >${name}</td>
                    <td id='tablenumber'>${number} </td>
                    <td id ='tablegmail'>${gmail}</td>
                    <td><button onclick="Edit()">Edit</button></td>
                    <td><button onclick="Delete()">Delete</button></td>
                    <td><button onclick="Save()" id='save'>Save</button></td>

                </tr>`
    table.innerHTML += template;
    document.getElementById('name').value = ''
    document.getElementById('number').value = ''
    document.getElementById('gmail').value = ''
});
function Delete(){
    var index, table = document.getElementById('mytable');            
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].cells[4].onclick = function()
        {
            index = this.parentElement.rowIndex;
            table.deleteRow(index);
            }
        }; 
    }
function Edit(){    
    var table = document.getElementById('mytable');          
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
             document.getElementById("name").value = this.cells[0].innerHTML;
             document.getElementById("number").value = this.cells[1].innerHTML;
             document.getElementById("gmail").value = this.cells[2].innerHTML;
             console.log(i)
             update.setAttribute('style','visibility:visibil')
        }
    }
}
function Save(){        
    var table = document.getElementById('mytable');          
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            this.cells[0].innerHTML = document.getElementById("name").value;
            this.cells[1].innerHTML = document.getElementById("number").value; 
            this.cells[2].innerHTML = document.getElementById("gmail").value;
            document.getElementById('name').value = ''
            document.getElementById('number').value = ''
            document.getElementById('gmail').value = ''
        }
    }
}


