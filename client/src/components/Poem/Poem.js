import React from "react";
import "./Poem.css";

function Poem() {
    return (
        <div
            style={{ height: 400, clear: "both", paddingTop: 20, textAlign: "center" }}
            className="poem">
            <h2 className="poemTitle">Baking Bread</h2>
            <h3 className="byLine"> by Roann Mendriq</h3>
            <p>I baked a bit of bread today,
            Seasoned it with herb and spice;
            I placed it in the oven tray,
            Set the timer to be precise.</p>
            <p>Soon, the fragrance of fresh bread,
            wafted around me like a shawl;
            Childhood memories in my head
            danced in sweet lilting recall.</p>
            <p>I could hear my Grandma's voice,
            singing hymns in gentle verse;
            My heart sang with her to rejoice,
            No need to practice or rehearse!</p>
            <p>How wonderful that homely scents,
            Heals us whole like sweet incense.</p>
        </div>
    );
}

export default Poem;
