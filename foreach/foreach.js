dados = [
  {nome:"nome A", "img":"https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/81f46a4161be895721f955bccec9ae15.jpeg"},
  {nome:"nome B", "img":"https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/f678cfd7bca9c04294d7b364dc5e7421.jpeg"},
  {nome:"nome C", "img":"https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/88b4e45069ce92f267d755152d559ff6.jpeg"},
  {nome:"nome D", "img":"https://beta.crunchyroll.com/imgsrv/display/thumbnail/240x360/catalog/crunchyroll/ad236ba09a9b3928db976342ae49805f.jpeg"},
]

function rep(div, dados){
  // const div = estrutura
  k = []
  dados.map(el=>{
    t = div.cloneNode(true)
    Object.keys(el).map(e=>{
      r = RegExp("\\$"+e,"g")
      t.innerHTML = t.innerHTML.replace(r,el[e])
    })
    k.push(t.innerHTML.trim())
  })
  k = k.join("")
  div.innerHTML = k
}

function renderforeach(){
  for(i of document.querySelectorAll("[foreach]")){
    f_name = eval(i.getAttribute('foreach'))
    rep(i, f_name)
  }
}

renderforeach()