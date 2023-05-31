import React, {useState} from "react";

function Obrazek() {

    const [odpoved, setOdpoved] = useState();

    const initialData = {
        obrazek: "https://ibobr.pf.jcu.cz/test/assets/dynamic/tasks/2023/1541-dbcff2e6d7b5c94ec278/snehulak-a-kabat.png",
        odpoved: 1,
        prvniJmeno: "Pavel",
        druheJmeno: "Petr",
        tretiJmeno: "Tereza",
        ctvrteJmeno: "Lucie"
    }

    function handleChange(e) {
        setOdpoved(e.target.value);
    }

    function saveAnswer(){
        if (odpoved == initialData["odpoved"]){
            alert("Správně");
        } else {
            alert("špatně");
        }
    }

    return(
        <div>
            <img src={initialData["obrazek"]} alt={"obrazek"}/>

            <h1>Kdo má pravdu ?</h1>
            <br/>
            <input type={"checkbox"} value={1} onChange={handleChange}/>{initialData["prvniJmeno"]}
            <input type={"checkbox"} value={2} onChange={handleChange}/>{initialData["druheJmeno"]}
            <input type={"checkbox"} value={3} onChange={handleChange}/>{initialData["tretiJmeno"]}
            <input type={"checkbox"} value={4} onChange={handleChange}/>{initialData["ctvrteJmeno"]}
            <br/>
            <br/>
            <button type={"submit"} onClick={saveAnswer}>Uložit odpověď</button>
        </div>
    )
}

export default Obrazek;