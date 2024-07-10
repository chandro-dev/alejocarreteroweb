
import './Presentation.css'
import foto from './assets/image.png'
export default function Presentation() {


    return (
        <section id='sectionInformation'>

            <div id='containerInfo'>
                <div>
                    <h1 className='textoAnimado'>Soy Alejandro Carretero</h1>
                    <h2 className='texto-presentacion'>Soy un entusiasta <strong className='textoAnimado '> desarrollador de software</strong> y apasionado por los sistemas. Me desempeño como <strong className='textoAnimado'>analista de datos</strong> y promuevo el aprendizaje dentro de mi equipo de trabajo </h2>
                </div>

                <img className='imagen-enmarcada ' src={foto} alt="iamgen de perfil" />
            </div>

        </section>
    )
}