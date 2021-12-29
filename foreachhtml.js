dados = [
  {
    id: 1,
    nome: "joao",
    email: 'ok@ok.com',
    endereco: 'rua a - 3',
    cep: '321654', 
    celular: '8598784818'
  },
  {
    nome: "maria",
    id: 2,
    email: 'nok@ok.com',
    endereco: 'rua b - 4',
    cep: '82547', 
    celular: '2035689'
  },
  {
    nome:"rita",
    id: 3,
    email: 'maria@ok.com',
    endereco: 'rua c - 5',
    cep: '00800', 
    celular: '357597'
  }
]

function rep(a,data){
  div = a
  for(i of data){
    est_clone = div.children[0].cloneNode(true)
    Object.keys(i).map(e=>{
      r = new RegExp("\\$"+e,"g")
      est_clone.innerHTML = est_clone.innerHTML.replace(r,i[e])
      div.appendChild(est_clone)
    })
    est_clone.innerHTML = est_clone.innerHTML.replace(/\$\w+/g,"")
  }
  a.children[0].remove()
}

for(i of document.querySelectorAll("[foreach]")){
  dt = i.getAttribute('foreach')
  dt = eval(dt)
  rep(i,dt)  
}

/* html

<div foreach="dados">
  <button type="button" class="btn btn-outline-primary btn-sm bt_editar">$id - $nome</button>
</div>

*/