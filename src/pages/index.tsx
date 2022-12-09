
// interface HomeProps{ //tipo da constante
//   qtdpools : number
// }

//  jsx = javascript + xml (xmp é o q tá por tras do html)
// react nada mais é do que uma forma de vc dividir sua aplicacao em varias partes menores
import Image from 'next/image'//importa lugar para botar Image para o next (é só substituir a tag img por Image)
import imageBackround from '../assets/campo_background.png'
import iconeUsuario from '../assets/imUsu.png'
import logo from '../assets/logo.png'
import check from '../assets/check.png'

export default function Home() {//tá dizendo que props segue a tipagem do homeProps

  return (
   <div>
    <main>
      <Image src={logo} alt = "logo"/>

      <h1>Crie seu pròrprio bolão da copa e compartilhe entre amigos!</h1>
    
    <div>
      <Image src={iconeUsuario} alt=""/>
      <strong>
        <span>+12.592</span> pessoas jé estao usando 
      </strong>
    </div>

    <form >
      <input type="text" required placeholder='Qual nome do seu boão?' />
      <button type='submit'>Criar Bolao</button>
    </form>

    <div>
      <div>
        <Image src={check} alt= ""/>
        <div>
          <span>+2.034</span>
          <span>Bolões criados</span>
        </div>
      </div>
      <div>
      <Image src={check} alt= ""/>
      <span>+192.847</span>
          <span>Palpites enviados</span> 
      </div>
    </div>
    </main>

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
