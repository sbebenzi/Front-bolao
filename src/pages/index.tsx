
// interface HomeProps{ //tipo da constante
//   qtdpools : number
// }

//  jsx = javascript + xml (xmp é o q tá por tras do html)
// react nada mais é do que uma forma de vc dividir sua aplicacao em varias partes menores

export default function Home() {//tá dizendo que props segue a tipagem do homeProps

  return (
   <div>
    
   </div>
    )

} 
//   export const getServerSideProps =async () => {
//    const response = await fetch('http://localhost:3333/count/pools')    // faz a requisicao lá p back
//    const data = await response.json() // transforma a requisicao em dados
//    //retorna como propriedades o dado
//    return{
//     props:{
//       qtdpools: data.qtdpools,
//     }
//  //teste
//    }
// }
