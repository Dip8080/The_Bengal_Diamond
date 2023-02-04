import React from 'react';
import('./know.css');

const Know = () => {
    return (
        <div className='know_main bg-cyan-50'>
          <div className=''>
                <h1 className=' text-2xl shadow-lg shadow-cyan-500/50 p-4 text-center antialiased font-bold uppercase'>Things you should know about Diamond. </h1>
                <img src=''></img>
                <h2 className='shadow p-2 antialiased subpixel-antialiased font-normal uppercase text-center '>diamond buying <span className='text-center'> guide </span></h2>
                <p> We know you’re here because you only want the best and we
                     would love to help you find the perfect diamond for you. 
                     We also know that buying diamonds can be a little overwhelming, 
                     but that doesn’t mean that you should ever settle or stress. 
                     So just sit back with a cup of coffee and let us walk you through 
                     everything you need to know before you buy that sparking diamond.</p>
               
                <h1>Back to the Basics-4Cs</h1>
                <h2 className='shadow p-1'>i. Cut    </h2>
                <p className='font-normal subpixel-antialiased'>We believe the cut is the most important aspect of choosing a diamond. It's basically what determines the proportion, symmetry and polish of a diamond. The right cut will enhance the sparke and the scintillation of the diamond. The better the cut, 
                    the more likely your diamond is to sparkle bright and look gorgeous.</p>
                <p className='font-bold py-2'><span className='shadow p-1 text-green-700 mx-2'> Hint: </span> Invest in the cut. It's the ultimate diamond hack you’ll not find it in the books. A beautifully cut
                     diamond can make the color and clarity appear better than they are.</p>

                <h2> ii. Clarity </h2>
                <p>When light passes through a diamond, it bounces back,
                     making the diamond sparkle. Some diamonds have imperfections
                      in the form of spots and blemishes. The more the imperfections,
                       the more difficult it is for light to pass through, thereby reducing
                        the sparkle. If you’re lost, here’s all you need to remember: Lesser 
                        imperfection and inclusions results in Better clarity.
                </p>
                <p className='font-bold'><span className='shadow p-1 text-green-700 mx-2'> Hint : </span> If you’re buying a diamond that’s under a carat, 
                    don’t obsess over the spots or blemishes because they aren’t really visible to an untrained eye. It’s better to invest in the cut and sparkle on.
</p>

                <h2> iii.Color</h2>
                <p>Ironically, the best color for a diamond would be colorless. 
                    The colors range from D colorless and go all the way to Z light yellow. To be honest, the colour difference in diamonds within a colour family is quite subtle to an untrained eye. Nevertheless, they do create a difference in the price and quality of the diamond.
                     Bottom line is, colorless diamonds are the most precious.</p>
                <p className='font-bold'><span className='shadow p-1 text-green-700 mx-2'>Hint : </span> As diamond size increases, colour becomes more noticeable. This is especially important to keep in mind if you are purchasing a diamond of two carats or greater. If you pick a slightly yellow colored diamond, you can pair it with a white gold or platinum band. The white gold will 
                complement the yellow hue of your diamond,
                 and they won’t clash with each other.</p>

                 <h2>iv. Carat</h2>
                 <p>A carat is measured based on the weight of the diamond. Two diamonds of equal carat will have different prices, depending on the other 3 Cs you go with. It's quite simple, really. Your ideal carat depends on: How big you want your stone and obviously, your budget.

</p>
            <p className='font-bold'> <span className='shadow p-1 text-green-700 mx-2 font-2xl'>Hint :</span> Save big bucks by picking a 0.90 carat over a 1 carat diamond.</p>

            </div> 
{/* shop by diamond shape */}
            <div>
                <h1 className='text-center font-bold shadow-lg shadow-cyan-500/50 my-6 p-4 text-2xl'>Shop by diamond shape</h1>
                <img src=''></img>
                <h1 className='text-2xl shadow p-2'>shape:</h1>
                <p className='subpixel-antialiased my-3'>Shape refers to the overall outline of the 
                    diamond when viewed from the top and that 
                    determines the price as well. The most expensive 
                    shape is the round diamond. 
                    That’s because they are best at reflecting light and 
                    shine like there’s no tomorrow. Although the choice of the
                     shape mostly depends on your personal style, a princess, cushion
                      or heart cut is what we would recommend if your diamond is bigger than one carat.
                    </p>
                
            </div> 

            <div>
                <h1 className='text-center font-bold shadow-lg shadow-cyan-500/50 my-6 p-4 text-2xl'>How to care of your diamond</h1>
                <ul className='list-disc py-4'>
                    <li>Once every week, clean your diamond jewellery in lukewarm soap water and rub it down gently with a brush, to remove the dirt and grime from the surface and ensure a long lasting shine.
</li>
                    <li>Remove your diamond jewellery when you go swimming or while doing household chores, so that the grime doesn’t make your jewellery look dull.
</li>
                    <li>Keep your jewellery in separate boxes to reduce the chances of scratches on the metal</li>
                    
                </ul>
            </div>
        </div>
);
};

export default Know; 