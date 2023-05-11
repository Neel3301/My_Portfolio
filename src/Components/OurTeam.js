'use client';
import Image from 'next/image';
import './OurTeam.scss';


const OurTeam = () => {

    // window.onload=function(){
    //     const scrollContainer = document.querySelector(".OurTeam");

    //     scrollContainer.addEventListener("wheel", (evt) => {
    //         evt.preventDefault();
    //         scrollContainer.scrollLeft += evt.deltaY;
    //     });
    // };

  return (
    <section className='OurTeam sticky-container'>
        
        <div className='ourTeamContainer'>
            <div className='slab'>
                <div className='title'>
                    <h2>Let Me Introdice My Team Members</h2>
                </div>
                <Image src="/assets/images/teamMember-1.jpg" height={450} width={300} alt='tm-1'/>
            </div>
            <div className='slab'>
                <Image src="/assets/images/teamMember-2.jpg" height={450} width={300} alt='tm-1'/>
                <p>tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, <br/><br/>e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum"tornando-o com mais de 2000 anos. </p>
            </div>
            <div className='slab'>
                <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. <br/><br/> O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados.</p>
                <Image src="/assets/images/teamMember-3.jpg" height={450} width={300} alt='tm-1'/>
            </div>
            <div className='slab'>
                <Image src="/assets/images/teamMember-4.jpg" height={450} width={300} alt='tm-1'/>
                <p>tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, <br/><br/>e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum"tornando-o com mais de 2000 anos. </p>
            </div>
            <div className='slab'>
                <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. <br/><br/> O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados.</p>
                <Image src="/assets/images/teamMember-5.jpg" height={450} width={300} alt='tm-1'/>
            </div>
            <div className='slab'>
                <Image src="/assets/images/teamMember-6.jpg" height={450} width={300} alt='tm-1'/>
                <p>tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, <br/><br/>e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum"tornando-o com mais de 2000 anos. </p>
            </div>
            <div className='slab'>
                <p>Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. <br/><br/> O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados.</p>
                <Image src="/assets/images/teamMember-7.jpg" height={450} width={300} alt='tm-1'/>
            </div>
            <div className='slab'>
                <Image src="/assets/images/teamMember-8.jpg" height={450} width={300} alt='tm-1'/>
                <p>tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, <br/><br/>e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum"tornando-o com mais de 2000 anos. </p>
            </div>
        </div>
    </section>
  )
}

export default OurTeam