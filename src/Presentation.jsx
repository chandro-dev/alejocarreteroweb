
import './Presentation.css'
import foto from './assets/image.png'
export default function Presentation() {


    return (
        <section id='sectionInformation'>

            <h1 className='textoAnimado'>Soy Alejandro Carretero</h1>
            <div id='containerInfo'>
                <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt laboriosam hic fugit delectus architecto odit neque accusamus nesciunt minus cumque nisi aperiam ducimus magni optio, exercitationem, voluptatum aliquid doloremque eius!</h2>
                <img className='imagen-enmarcada ' src={foto} alt="iamgen de perfil" />
            </div>

        </section>
    )
}