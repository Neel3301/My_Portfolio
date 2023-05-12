import Image from "next/image";
import './Footer.scss';

const Footer = () => {
  return (

    <section className='Footer'>
        <div className='left'>
            <h4>estabelecido</h4>
            <div className='links'>
                <a href="#">estabelecido</a>
                <a href="#">contrário</a>
                <a href="#">sobreviveu</a>
                <a href="#">variações</a>
                <a href="#">contém</a>
            </div>
            <h5>thanos@was.right</h5>
        </div>
        
        <div className='left center'>
            <h4>ferramentas</h4>
            <div className='links'>
                <a href="#">reproduzidos</a>
                <a href="#">pareçam razoáveis</a>
                <a href="#">injecção</a>
                <a href="#">verdadeiro</a>
                <a href="#">humorística</a>
            </div>
            <div className='icons'>
              <a href="#"><Image src="assets/twitter.svg" height={30} width={30}/></a>
              <a href="#"><Image src="assets/instagram.svg" height={30} width={30}/></a>
              <a href="#"><Image src="assets/linkedin.svg" height={30} width={30}/></a>
            </div>
        </div>
        
        <div className='left right'>
          <h4>McClintock</h4>
            <div className='links'>
                <a href="#">Finibus Bonorum</a>
                <a href="#">de Latim</a>
                <a href="#">atravessando</a>
                <a href="#">secções</a>
                <a href="#">suficientemente</a>
            </div>
            <h5>2023</h5>
        </div>
    </section>

  )
}

export default Footer