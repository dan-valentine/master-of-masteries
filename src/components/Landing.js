import React, { Component } from 'react';

export default class Landing extends Component {
    render() {
        console.log(process.env.REACT_APP_LOGIN);
        return (
            <div>
                <div>
                    <a href={process.env.REACT_APP_LOGIN}>
                        <button className='login_btn'>Login</button>
                    </a>
                </div>

                <section>
                    <h1>Very important thing</h1>
                    <img src="http://placekitten.com/200/300" id='image_to_left' />
                    <article>Lorem ipsum dolor sit amet, mollis consequat comprehensam te vel. Tibique copiosae percipit in sed. Eu nec eros intellegat, tempor urbanitas pri ad. In pro everti nostrud complectitur, ei rebum reprimique dissentias pri, amet definitiones eam eu.

Unum volumus forensibus pro eu, ex has fastidii voluptatibus, eum augue harum iusto cu. Sint malis dolore in mel, zril salutandi ex usu, erant aliquando ad mel. Et magna corpora incorrupte sed. Ea error quidam cum, ex usu fierent reprehendunt.

Eum cu viris alienum. Ea per vero debet, vidit admodum ut est. Ne pri amet justo adversarium, eu quot vulputate mel. Mel et everti definitiones, eligendi complectitur ut sed. Usu quando omnesque ei, eos ei malis dolor referrentur, labore eruditi impedit vis an.

Eum ea esse assum accommodare, duo ipsum phaedrum ex. Te duo nisl elit epicuri, ius te assueverit eloquentiam liberavisse. Eu ius debet verear facilis, sit ne eros partiendo, exerci insolens scripserit ne eum. Et pri solet veritus facilis, ut sea reque facilisis. No dolore molestiae cum, facilisis voluptaria vituperatoribus eam ea, fugit equidem sed ea. At nostro explicari accommodare eum, graeci timeam sententiae ut vel.

Eius constituto per eu. Sed an vidit labores volutpat, suas aeterno consulatu an mei, ferri oportere nam an. Usu dicit euismod assentior te, omittam deterruisset ne est. Nonumy ponderum qui at. Decore tacimates vis in.

Odio stet discere cum in, mel id labitur perfecto posidonium, quod habeo tempor ei nec. Vis an stet sanctus torquatos, virtute interpretaris concludaturque pri te, libris melius luptatum cum eu. Lorem imperdiet mea et, ius ea quodsi eripuit disputationi. Ut has reque consul electram, propriae invidunt verterem cum eu. Solum luptatum sadipscing eos ea, clita tantas repudiare id his, cibo cetero mnesarchum ea usu. Erant tractatos percipitur te pri, detracto petentium ei quo, elit exerci te his. Sit ad idque tantas detraxit, id vim meis assueverit.

Lobortis adolescens quaerendum ad pro. Euismod graecis senserit ut cum. Eum no nibh eripuit menandri, audire molestiae at nec. Vis ex timeam euismod, pro ne graeci vulputate. Eu alia partem fuisset vel.

Magna eruditi adipisci vix at, ea pri cetero voluptua signiferumque, no odio dicta est. Nibh wisi adipiscing et qui, an mei vidisse urbanitas voluptatibus. Mea et accusata sensibus, veri officiis mel no. Vix veri voluptaria ei, cu graecis blandit omnesque has.

Vidit facilisis te usu. Vix ne mutat illum delenit, et nostrum appetere ius. Ei latine feugait his. Appetere luptatum adipisci ut nec. Et mei modo eruditi, brute sapientem eu has. Choro affert assueverit ea mel, in erat falli assueverit quo, suscipit temporibus at eos.

Legere diceret no nam, ex etiam alterum interesset quo. In essent deseruisse cum. Duis nusquam mei id. At timeam qualisque disputando nam, mazim phaedrum splendide ut est, ut tamquam omnesque necessitatibus sea. Duis inimicus est id. Mei ullum laoreet et, regione nostrum his cu.
</article>
                </section>
                <section>
                    <h2>LEss important but still important</h2>

                    <ul>
                        <li>This</li>
                        <li>Is</li>
                        <li>a</li>
                        <li>Unordered</li>
                        <li>List</li>
                    </ul>
                    <article>
                        Eum cu viris alienum. Ea per vero debet, vidit admodum ut est. Ne pri amet justo adversarium, eu quot vulputate mel. Mel et everti definitiones, eligendi complectitur ut sed. Usu quando omnesque ei, eos ei malis dolor referrentur, labore eruditi impedit vis an.

Eum ea esse assum accommodare, duo ipsum phaedrum ex. Te duo nisl elit epicuri, ius te assueverit eloquentiam liberavisse. Eu ius debet verear facilis, sit ne eros partiendo, exerci insolens scripserit ne eum. Et pri solet veritus facilis, ut sea reque facilisis. No dolore molestiae cum, facilisis voluptaria vituperatoribus eam ea, fugit equidem sed ea. At nostro explicari accommodare eum, graeci timeam sententiae ut vel.

Eius constituto per eu. Sed an vidit labores volutpat, suas aeterno consulatu an mei, ferri oportere nam an. Usu dicit euismod assentior te, omittam deterruisset ne est. Nonumy ponderum qui at. Decore tacimates vis in.

Odio stet discere cum in, mel id labitur perfecto posidonium, quod habeo tempor ei nec. Vis an stet sanctus torquatos, virtute interpretaris concludaturque pri te, libris melius luptatum cum eu. Lorem imperdiet mea et, ius ea quodsi eripuit disputationi. Ut has reque consul electram, propriae invidunt verterem cum eu. Solum luptatum sadipscing eos ea, clita tantas repudiare id his, cibo cetero mnesarchum ea usu. Erant tractatos percipitur te pri, detracto petentium ei quo, elit exerci te his. Sit ad idque tantas detraxit, id vim meis assueverit.

                    </article>
                    <ol>
                        <li>This</li>
                        <li>Is</li>
                        <li>a</li>
                        <li>Ordered</li>
                        <li>List</li>
                    </ol>
                </section>
                <section>
                    <video width="320" height="240" controls>
                        <source src="https://www.youtube.com/embed/gb8SzwkM6Lo"/>
                    </video>
                </section>
                <dialog>This only works on firefox</dialog>
                <div className='content_box'>contnent example</div>
                <div className='background_image'></div>
                <footer></footer>
            </div>
        );
    }
}