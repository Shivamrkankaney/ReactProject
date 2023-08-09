import { HeaderComponenent } from "./header";
import BasicExample from "./header2";
import { MainComponent } from "./main";

export function IndexComponent(){

    return(

        <div>
            <header>
                <BasicExample/>
            </header>
            <section>
                <MainComponent/>
            </section>
        </div>
    )
}
