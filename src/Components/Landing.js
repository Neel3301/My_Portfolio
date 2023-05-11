import Image from 'next/image';
import './Landing.scss';


const Landing = () => {
  return (
    <section className='Landing vertical-section'>
      <div className='landingLeft'>
        <h2>Follow me on</h2>
        <div className='icons'>
          <Image src="assets/instagram.svg" height={30} width={30} alt='icons'/>
          <Image src="assets/linkedin.svg" height={30} width={30} alt='icons'/>
          <Image src="assets/twitter.svg" height={30} width={30} alt='icons'/>
        </div>
      </div>
      <div className='landingCenter'>
        <div className='text'>
          <h1>Welcome to my Portfolio</h1>
          <h1>My Self Neel Chotaliya</h1>
          <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
          <button>Explore Now</button>
        </div>
        <div className='img'>
          <Image src="/assets/main.jpg" height={600} width={400} alt='main'/>
        </div>
      </div>
    </section>
  )
}

export default Landing