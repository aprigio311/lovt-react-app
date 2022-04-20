import './style.css'
import R3 from './imagens/img/Rectangle 3.png'
import R7 from './imagens/img/Rectangle 7.png'
import R6 from './imagens/img/Rectangle 6.png'
import I1 from './imagens/img/image 1.png'
import Vec from './imagens/img/Vector.svg'
import Vec1 from './imagens/img/Vector (1).svg'
import Vec2 from './imagens/img/Vector (2).svg'

function Home(){
    return(
<>
    <header className='menu'>

        <div className='logo'>
            <h1>LOVT</h1>
            <h4>You Love,<br/>your loft</h4>
        </div>

        <div className='menuH'>
            <div>____</div>
            <div>____</div>
            <div>____</div>
        </div>
        
    </header>

    <main>
        <div className='carrossel'>
        <img src={R3}/>
        </div>

        <div className='products'>
            <div className='card'>
            <img src={R6}/>
                <div className='card-info'>
                    <div className='price'>$1,200</div>
                    <div className='stadt1'><p>New</p></div>
                </div>
                <div className='card-info-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis, sit doloremque fugiat voluptate pariatur! Consequatur iste totam labore, aperiam quaerat impedit quia fugit sint doloribus accusamus, quas ipsum ex.
                </div>

            </div>
            <div className='card'>
            <img src={R7}/>
                <div className='card-info'>
                    <div className='price'>$2,000</div>
                    <div className='stadt2'><p>Sale</p></div>
                </div>
                <div className='card-info-text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis, sit doloremque fugiat voluptate pariatur! Consequatur iste totam labore, aperiam quaerat impedit quia fugit sint doloribus accusamus, quas ipsum ex.
                </div>

            </div>
        </div>

        <div className='product-styles'>

            <h1>Your Style</h1>

            <div className='ps1'>
                <h1>Industrial</h1>
            </div>
            <div className='ps2'>
                <h1>Modern</h1>
            </div>
            <div className='ps3'>
                <h1>Classic</h1>
            </div>

        </div>
    </main>

    <footer>
        <div className='mapa'>
        <img src={I1}/>

        </div>
        <div className='street'>

            <p>LOVT - You love, your loft!<br/>
                <br/>
                Broad St,
                Newark, NJ 07102 - USA<br/>
                <br/>
                +1 (973) 854-555-548<br/>
                <br/>
                contact@lovtrealstate.com
            </p>

            <div className='social-media'>
                <h4>OUR SOCIAL MEDIAS:</h4>

                <div className='social-media-vect'>
                    <div>
                    <img src={Vec}/>
                    </div>
                    <div>
                    <img src={Vec1}/>
                    </div>
                    <div>
                    <img src={Vec2}/>
                    </div>
                </div>

            </div>

        </div>

    </footer>
    
    </>

    )
}

export default Home