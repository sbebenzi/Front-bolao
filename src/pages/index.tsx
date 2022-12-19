
interface HomeProps{ //tipo da constante
  qtdpools : number
  qtdGuesses: number
}

//  jsx = javascript + xml (xmp é o q tá por tras do html)
// react nada mais é do que uma forma de vc dividir sua aplicacao em varias partes menores
import Image from 'next/image'//importa lugar para botar Image para o next (é só substituir a tag img por Image)
import iconeUsuario from '../assets/usuario.png'
import logo from '../assets/logo.png'
import check from '../assets/check.png'
import { api } from '../lib/axios'

export default function Home(props: HomeProps) {

  return (
   <div className= "max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-4">
    <main>   
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
    <p className="mt-4 text-sm text-gray-300 leading-relaxed">Após criar seu boão, voce receberá um codigo unico que poderá usar para convidar outras pessoas</p>

    <div className="mt-10  pt-10 border-t border-gray-800 items-center justify-between flex text-gray-100">
      <div className="flex items-center gap-6">
        <Image  className="max-w-xs" src={check} alt= ""/>
        <div className="flex flex-col" >
          <span className="text-[24px] font-bold">+{props.qtdpools}</span>
          <span>Bolões criados</span>
        </div>
      </div>
      <div className="w-px h-14 bg-gray-800"/>
     
      <div className="flex items-center gap-6">
        <Image src={check} alt= ""/>
        <div className="flex flex-col">
          <span className="text-[24px] font-bold ">+{props.qtdGuesses}</span>
          <span>Palpites enviados</span> 
          </div>     
      </div>
    </div>
    </main>
    <Image className="max-w-lg mx-16" src={logo} alt = "logo"/>
  </div>
    )

} 
  export const getServerSideProps =async () => {
   const countPoolResponse = await api.get('count/pools')    // faz a requisicao lá p back
   const countGessesResponse = await api.get('count/guesses')
   //retorna como propriedades o dado
   return{
    props:{
      qtdpools: countPoolResponse.data.qtdpools,//qtdpools é o que eu to retornando lá no back <3
      qtdGuesses: countGessesResponse.data.qtdGuess 
    }
 //teste
   }
}
