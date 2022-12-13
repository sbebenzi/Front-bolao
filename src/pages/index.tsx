
// interface HomeProps{ //tipo da constante
//   qtdpools : number
// }

//  jsx = javascript + xml (xmp é o q tá por tras do html)
// react nada mais é do que uma forma de vc dividir sua aplicacao em varias partes menores
import Image from 'next/image'//importa lugar para botar Image para o next (é só substituir a tag img por Image)
import iconeUsuario from '../assets/usuario.png'
import logo from '../assets/logo.png'
import check from '../assets/check.png'

export default function Home() {

  return (
   <div className= "max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center">
    <main>
      <Image src={logo} alt = "logo"/>

      <h1 className="mt-14 text-5xl text-white-900 font-bold leading-tight">Crie seu prórprio bolão da copa e compartilhe entre amigos!</h1>
    
    <div className="mt-10 flex items-center gap-2">
      <Image src={iconeUsuario} alt="" className="border-solid rounded-full bg-white-1 max-w-[60px] max-h-[60px]"/>
      <strong className="text-gray-100 text-[20px]">
        <span className="text-green-500">+12.592</span> pessoas jé estao usando 
      </strong>
    </div>

    <form className="mt-10 flex gap-2">
      <input 
      className="flex-1 px-6 py-4 rounded-[4px] bg-gray-600 border border-gray-800 text-sm"
      type="text" required 
      placeholder='Qual nome do seu boão?' 
      />
      <button
      className="bg-yellow-500 px-6 py-4 rounded-[4px] font-bold text-gray-900 text-sm uppercase hover:bg-yellow-700" 
      type='submit'
      >
        Criar Bolao</button>
    </form>
    <p className="mt-4 text-sm text-gray-300">Após criar seu boão, voce receberá um codigo unico que poderá usar para convidar outras pessoas</p>

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
