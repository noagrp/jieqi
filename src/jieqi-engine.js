class JieqiEngine{
  constructor(data){
    this.data=data;
    this.terms=[...(data.terms||[])];
    this.byName=new Map(this.terms.map(x=>[x.name,x]));
    this.byId=new Map(this.terms.map(x=>[x.id,x]));
  }
  getMeta(){return this.data.meta;}
  list(){return this.terms.slice();}
  get(id){return this.byId.get(id)||this.byName.get(id)||null;}
  getByName(name){return this.byName.get(name)||null;}
  indexOf(id){return this.terms.findIndex(x=>x.id===id||x.name===id);}
  nextOf(id){const i=this.indexOf(id);return i<0?null:this.terms[(i+1)%this.terms.length];}
  search(q){
    const s=String(q||"").trim().toLowerCase();if(!s)return this.list();
    return this.terms.filter(x=>[
      x.name,x.season,x.type,x.meaning,x.definition,x.climate,x.agriculture,x.customs,x.food,x.culture,
      ...(x.pentads||[]),...(x.relatedFestivals||[])
    ].join(" ").toLowerCase().includes(s));
  }
}
async function loadJieqiEngine(url="./data/jieqi.json"){
  const r=await fetch(url,{cache:"no-cache"});
  if(!r.ok)throw new Error("Unable to load 二十四节气 data");
  return new JieqiEngine(await r.json());
}
if(typeof window!=="undefined"){window.JieqiEngine=JieqiEngine;window.loadJieqiEngine=loadJieqiEngine;}
if(typeof module!=="undefined"&&module.exports)module.exports={JieqiEngine,loadJieqiEngine};