const box=document.querySelector('.box')
async function getProducts(){
      try{
        let res=await fetch('https://jsonplaceholder.typicode.com/comments')
        let products=await res.json()
        console.log(products)

        products.forEach(product => {

        let card=document.createElement('div'),
            h2=document.createElement('h2'),
            a=document.createElement('a'),
            p=document.createElement('p')
        card.classList.add('card')
        h2.classList.add('title')
        a.classList.add('link')
        p.classList.add('text')
        h2.innerHTML=product.name
        a.innerHTML=product.email
        p.innerHTML=product.body
        card.append(h2,a,p)
        box.appendChild(card)
            
        });
     }catch(eror){

      }
}
getProducts()
