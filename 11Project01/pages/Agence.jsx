import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imagedevref = useRef(null)
  const imageref = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(()=> {
    gsap.to(imagedevref.current,{
      scrollTrigger: {
        trigger: imagedevref.current,
        // markers: true,
        start:'top 26%',
        end:'top -120%',
        pin: true,
        onUpdate: (elem) => {
          let imageindex ;
          if( elem.progress < 1){
            imageindex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageindex = imageArray.length - 1
          }

          imageref.current.src = imageArray[imageindex]

        }
      }
    })
  })


  return (
    <div>
      <div className='section1' >
        <div ref={imagedevref} className='absolute top-50 rounded-3xl object-cover overflow-hidden left-115 w-[15vw] h-[20vw]'>
          <img ref={imageref} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="Carl" />
        </div>
        <div>
          <div className=' relative mt-[56vh]'>
            <h1 className='text-[20vw] font-[font2] leading-[34vh] uppercase text-center'>
              Soixan7e<br/>
              Douze
            </h1>
          </div>
          <div className='relative pl-[40%]'>
            <p className='text-5xl width-1/2 font-[font2]'>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit<br /> notre créativité. On reste humbles<br /> et on dit non aux gros egos, même<br /> le vôtre. Une marque est vivante.<br /> Elle a des valeurs, une personnalité,<br /> une histoire. Si on oublie ça, on<br /> peut faire de bons chiffres à court<br /> terme, mais on la tue à long terme.<br /> C’est pour ça qu’on s’engage à<br /> donner de la perspective, pour<br /> bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'></div>
    </div>
  )
}

export default Agence