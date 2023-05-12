"use client";
import './Navbar.scss';
import { AiFillGitlab } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {

    function show_visible_nav(){
        document.getElementById('navbar').classList.toggle('active');
    }
    
    function nav_op_1(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_1').classList.add('active');

        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_1').classList.add('active');
    }
    function nav_op_2(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_2').classList.add('active');

        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_2').classList.add('active');
    }
    function nav_op_3(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_3').classList.add('active');
        
        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_3').classList.add('active');
    }
    function nav_op_4(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_4').classList.add('active');
        
        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_4').classList.add('active');
    }
    function nav_op_5(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_5').classList.add('active');
        
        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_5').classList.add('active');
    }
    function nav_op_6(){
        document.querySelectorAll('.nav_op_data').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_data_6').classList.add('active');
        
        document.querySelectorAll('.nav_op').forEach((Element) =>{Element.classList.remove('active')});
        document.getElementById('nav_op_6').classList.add('active');
    }

    return (
        <>

        {/* <!-- Navbar --> */}
        <nav className="navbar" id='navbar'>

            <div className='visible_navbar' >
                
                {/* <!-- Nav Toggle Btn --> */}
                <div className="nav_toggle_btn" onClick={show_visible_nav}></div>

                {/* <!-- Nav Title --> */}
                <div className="nav_title">

                    {/* <!-- Nav Title Decoration --> */}
                    <div className="title_decoration_container">
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                        <div className="title_decoration"></div>
                    </div>

                    {/* <!-- Nav Title --> */}
                    <h1>My Portfolio</h1>
                    
                </div>

                {/* <!-- Nav Else Part --> */}
                <div className="nav_else_part">

                    <a className='slab' href="#">
                        <AiFillGitlab  />
                        <span>Get Source Code</span>
                    </a>

                    <a className='slab' href="#">
                        <BiSearch />    
                        <span>Search</span>
                    </a>
                    
                </div>

            </div>

            <div className='hidden_nav' id='hidden_nav'>
                <div className='hidden_nav_container'>
                    <div className='left'>
                        <a href='#' className='nav_op active' id='nav_op_1' onClick={nav_op_1}>About Me</a>
                        <a href='#' className='nav_op' id='nav_op_2' onClick={nav_op_2}>My Project</a>
                        <a href='#' className='nav_op' id='nav_op_3' onClick={nav_op_3}>My Clients</a>
                        <a href='#' className='nav_op' id='nav_op_4' onClick={nav_op_4}>My Skills</a>
                        <a href='#' className='nav_op' id='nav_op_5' onClick={nav_op_5}>Reach Me</a>
                        <a href='#' className='nav_op' id='nav_op_6' onClick={nav_op_6}>Contact Me</a>
                    </div>

                    <div className='right'>
                        
                        <div className='nav_op_data active' id='nav_op_data_1'>
                            <p>
                            Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.
                            </p>
                            <p>
                            Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto
                            </p>
                        </div>

                        <div className='nav_op_data' id='nav_op_data_2'>
                            <p>
                            É um facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível. Muitas ferramentas de publicação electrónica e editores de páginas web usam actualmente o Lorem Ipsum como o modelo de texto usado por omissão, e uma pesquisa por "lorem ipsum" irá encontrar muitos websites ainda na sua infância. Várias versões têm evoluído ao longo dos anos, por vezes por acidente, por vezes propositadamente (como no caso do humor).
                            </p>
                        </div>

                        <div className='nav_op_data' id='nav_op_data_3'>
                            <p>
                            Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório. Tem raízes numa peça de literatura clássica em Latim, de 45 AC, tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), por Cícero, escrito a 45AC. Este livro é um tratado na teoria da ética, muito popular durante a Renascença. A primeira linha de Lorem Ipsum, "Lorem ipsum dolor sit amet..." aparece de uma linha na secção 1.10.32.                            
                            </p>
                           
                        </div>

                        <div className='nav_op_data' id='nav_op_data_4'>
                            <p>
                            Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum.
                            </p>
                            <p>
                            O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados. As secções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" do Cícero também estão reproduzidos na sua forma original, acompanhados pela sua tradução em Inglês, versões da tradução de 1914 por H. Rackham.
                            </p>
                        </div>

                        <div className='nav_op_data' id='nav_op_data_5'>
                            <p>
                            Existem muitas variações das passagens do Lorem Ipsum disponíveis, mas a maior parte sofreu alterações de alguma forma, pela injecção de humor, ou de palavras aleatórias que nem sequer parecem suficientemente credíveis. Se vai usar uma passagem do Lorem Ipsum, deve ter a certeza que não contém nada de embaraçoso escondido no meio do texto. Todos os geradores de Lorem Ipsum na Internet acabam por repetir porções de texto pré-definido, como necessário, fazendo com que este seja o primeiro verdadeiro gerador na Internet. Usa um dicionário de 200 palavras em Latim, combinado com uma dúzia de modelos de frases, para gerar Lorem Ipsum que pareçam razoáveis. Desta forma, o Lorem Ipsum gerado é sempre livre de repetição, ou de injecção humorística, etc.                            </p>
                            <p>
                            tornando-o com mais de 2000 anos. Richard McClintock, um professor de Latim no Colégio Hampden-Sydney, na Virgínia, procurou uma das palavras em Latim mais obscuras (consectetur) numa passagem Lorem Ipsum, e atravessando as cidades do mundo na literatura clássica, descobriu a sua origem. Lorem Ipsum vem das secções 1.10.32 e 1.10.33 do                            
                            </p>
                        </div>

                        <div className='nav_op_data' id='nav_op_data_6'>
                            <p>
                            facto estabelecido de que um leitor é distraído pelo conteúdo legível de uma página quando analisa a sua mancha gráfica. Logo, o uso de Lorem Ipsum leva a uma distribuição mais ou menos normal de letras, ao contrário do uso de "Conteúdo aqui, conteúdo aqui", tornando-o texto legível.                            
                            </p>
                            <p>
                            quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.                            
                            </p>
                            <p>
                            O pedaço mais habitual do Lorem Ipsum usado desde os anos 1500 é reproduzido abaixo para os interessados. As secções 1.10.32 e 1.10.33 do 
                            </p>
                        </div>

                    </div>
                </div>

            </div>

        </nav>
    
    </>
    );
}

export default Navbar