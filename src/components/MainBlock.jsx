import { useState } from "react";
import "./MainBlock.css";

function MainBlock() {
    const [selectedLegend, setSelectedLegend] = useState(null);

    const legends = [
        {
            name: "Billy Herrington",
            title: "THE ANIKI",
            phrase: "ANIKI!",
            image: "/BILLY-HERRINGTON.png"
        },
        {
            name: "Van Darkholme",
            title: "THE MASTER",
            phrase: "300 BUCKS!",
            image: "/VAN-DARKHOLME.png"
        },
        {
            name: "Ricardo Milos",
            title: "THE DANCER",
            phrase: "IT'S TIME TO DANCE!",
            image: "/RICARDO-MILOS.png"
        },
        {
            name: "Danny Lee",
            title: "THE LEGEND",
            phrase: "OH YEAH!",
            image: "/DANNY-LEE.png"
        }
    ];

    function selectLegend(legend) {
        setSelectedLegend(legend);
    }

    function enterGym() {
        document.getElementById("legends").scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <main>
            <section className="hero" id="home">
                <div className="hero-text">
                    <h1>
                        WELCOME TO<br />
                        THE GYM, BOY!
                    </h1>

                    <p>
                        Enter the legendary world of Gachimuchi.
                        <br />
                        Meet the legends and prove your strength!
                    </p>

                    <button onClick={enterGym}>
                        ENTER THE GYM
                    </button>
                </div>

                <div className="hero-image">
                    <img src="/Main-Billy.png" alt="Billy Herrington" />
                </div>
            </section>

            <section className="legends" id="legends">
                <h2>CHOOSE YOUR LEGEND</h2>

                <div className="legends-list">
                    {legends.map((legend) => (
                        <div className="legend-card" key={legend.name}>
                            <img
                                className="legend-photo"
                                src={legend.image}
                                alt={legend.name}
                            />

                            <h3>{legend.name}</h3>
                            <p>{legend.title}</p>

                            <button onClick={() => selectLegend(legend)}>
                                SELECT
                            </button>
                        </div>
                    ))}
                </div>

                {selectedLegend && (
                    <div className="selected-legend" key={selectedLegend.name}>
                        <img
                            className="selected-photo"
                            src={selectedLegend.image}
                            alt={selectedLegend.name}
                        />

                        <h2>{selectedLegend.name}</h2>
                        <p>{selectedLegend.phrase}</p>

                        <button onClick={() => setSelectedLegend(null)}>
                            CLOSE
                        </button>
                    </div>
                )}
            </section>
        </main>
    );
}

export default MainBlock;