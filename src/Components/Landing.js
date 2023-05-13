import Image from 'next/image';
import './Landing.scss';


const Landing = () => {
  return (
    <section className='Landing vertical-section'>
      <div className='landingLeft'>
        <h2>Follow me on</h2>
        <div className='icons'>
          <a href='#'><Image src="assets/instagram.svg" height={30} width={30} alt='icons'/></a>
          <a href='#'><Image src="assets/linkedin.svg" height={30} width={30} alt='icons'/></a>
          <a href='#'><Image src="assets/twitter.svg" height={30} width={30} alt='icons'/></a>
        </div>
      </div>
      <div className='landingCenter'>
        <div className='text'>
          <h1>Welcome to my Portfolio My Self Neel Chotaliya</h1>
          <p>Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.</p>
          <button>Explore Now</button>
        </div>
        
        <div className='img'>

            <div className='landingLeftOnMd'>
              <h2>Follow me on</h2>
              <div className='icons'>
                <a href='#'><Image src="assets/instagram.svg" height={30} width={30} alt='icons'/></a>
                <a href='#'><Image src="assets/linkedin.svg" height={30} width={30} alt='icons'/></a>
                <a href='#'><Image src="assets/twitter.svg" height={30} width={30} alt='icons'/></a>
              </div>
            </div>

          <div className='imgContainer'>
            <Image src="/assets/main.jpg" layout='fill' alt='main'/>  
          </div>

        </div>

      </div>
    </section>
  )
}

export default Landing