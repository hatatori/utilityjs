dados = [
  {
    nome:"Demons layer", 
    img: "https://img1.ak.crunchyroll.com/i/spire4-tmb/a185fe104556794d24af2164602f23d31639907206_wide.jpg"
  },
  {
    nome:"One piece", 
    img: "https://img1.ak.crunchyroll.com/i/spire3-tmb/42b6b8dba929b12af77df312e375e0c01639876517_wide.jpg"
  },
  {
    nome:"Boruto", 
    img: "https://img1.ak.crunchyroll.com/i/spire2-tmb/38b0099781a3905f4c38259fa69ab53f1639872130_wide.jpg"
  },
  {
    nome:"Sakugan", 
    img: "https://img1.ak.crunchyroll.com/i/spire1-tmb/38766716967399fd639b4dc63489bfe01639649308_wide.jpg"
  },
  {
    nome:"Digimon", 
    img: "https://img1.ak.crunchyroll.com/i/spire3-tmb/3ca0c8351d39123365c8f3274d5bf6d61639874856_wide.jpg"
  },
  {
    nome:"Restaurant", 
    img: "https://img1.ak.crunchyroll.com/i/spire4-tmb/5e581d26880d07893faa457d00abe7351639724593_wide.jpg"
  }
]

function rep(div, dados){
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