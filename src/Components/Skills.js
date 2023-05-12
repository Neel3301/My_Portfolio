'use client';
import Image from 'next/image';
import './Skills.scss';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Skills = () => {

  
    // window.onload=function(){
    //   const scrollContainer = document.querySelector("right");

    //   scrollContainer.addEventListener("wheel", (evt) => {
    //       evt.preventDefault();
    //       scrollContainer.scrollLeft += evt.deltaY;
    //   });
      
    // };

    function scroll_left(){
      document.getElementById('right').scrollBy(-500,0);
    };
    function scroll_right(){
      document.getElementById('right').scrollBy(500,0);
    };

  return (
    <section className='Skills'>

      <div className='left'>
        <h3>My Web & App Development Skills</h3>

        <div className='btns'>
          <button onClick={scroll_left}><AiFillCaretLeft /></button>
          <button onClick={scroll_right}><AiFillCaretRight /></button>
        </div>

      </div>
      <div className='right' id="right">
        <div className='cardContainer' 
        onMouseOver={()=> {
          // document.getElementById('card_1').classList.remove('active');
        }}
        onMouseOut={()=>{
          document.getElementById('card_1').classList.add('active');
        }}>

          <div className='card active' id='card_1' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_1').classList.remove('active');          
          }}>
            <h2>01</h2>
            <h4>HTML & CSS</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-4.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_2' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_2').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_2').classList.remove('active');
          }}>
            <h2>02</h2>
            <h4>Javascript</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-2.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_3' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_3').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_3').classList.remove('active');
          }}>
            <h2>03</h2>
            <h4>PHP</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-3.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_4' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_4').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_4').classList.remove('active');
          }}>
            <h2>04</h2>
            <h4>REACT.JS</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-4.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_5' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_5').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_5').classList.remove('active');
          }}>
            <h2>05</h2>
            <h4>NODE.JS</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-5.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_6' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_6').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_6').classList.remove('active');
          }}>
            <h2>06</h2>
            <h4>NEXT.JS</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-2.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_7' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_7').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_7').classList.remove('active');
          }}>
            <h2>07</h2>
            <h4>MONGO DB</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-3.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_8' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_8').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_8').classList.remove('active');
          }}>
            <h2>08</h2>
            <h4>JAVA</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-4.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_9' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_9').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_9').classList.remove('active');
          }}>
            <h2>09</h2>
            <h4>PYTHON</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-5.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_10' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_10').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_10').classList.remove('active');
          }}>
            <h2>10</h2>
            <h4>FLUTTER</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-2.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_11' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_11').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_11').classList.remove('active');
          }}>
            <h2>11</h2>
            <h4>DART</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-3.jpg" height={300} width={500} alt='Skills'/>
          </div>

          <div className='card' id='card_12' 
          onMouseOver={()=> {
            document.getElementById('card_1').classList.remove('active');
            document.getElementById('card_12').classList.add('active');
          }}
          onMouseOut={()=>{
            document.getElementById('card_12').classList.remove('active');
          }}>
            <h2>12</h2>
            <h4>C/C++</h4>
            <p>Ao contrário da crença popular, o Lorem Ipsum não é simplesmente texto aleatório.</p>
            <Image src="/assets/images/skill-5.jpg" height={300} width={500} alt='Skills'/>
          </div>

        
        </div>
      </div>

    </section>
  )
}

export default Skills