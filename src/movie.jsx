import { useState } from "react";

import peter from "./assets/peter.jpg";
import jean from "./assets/jean.jpeg";
import mj from "./assets/mj.jpg";
import ned from "./assets/ned.jpg";
import punisher from "./assets/punisher.jpg";
import bruce from "./assets/bruce.jpg";
import scorpion from "./assets/scorpion.jpg";
import mainVillain from "./assets/main-villain.jpg";
import tombstone from "./assets/tombstone.jpg";
import otherVillain from "./assets/other-villain.jpg";

function Movie() {

    const [activeCharacter, setActiveCharacter] = useState(null);

    const characters = [
        {
            name: "Peter Parker",
            role: "THE HERO",
            image: peter,
            description:
                "Tom Holland returns as Peter Parker, stepping into a more mature chapter of his Spider-Man story."
        },

        {
            name: "Jean Grey",
            role: "X-MEN",
            image: jean,
            description:
                "Jean Grey brings another powerful presence into the expanding Marvel world."
        },

        {
            name: "MJ",
            role: "PETER'S CONNECTION",
            image: mj,
            description:
                "Zendaya returns as MJ, one of the most important people in Peter Parker's life."
        },

        {
            name: "Ned Leeds",
            role: "THE FRIEND",
            image: ned,
            description:
                "Jacob Batalon returns as Ned Leeds, bringing the familiar friendship fans remember."
        },

        {
            name: "Punisher",
            role: "THE VIGILANTE",
            image: punisher,
            description:
                "Jon Bernthal returns as the Punisher, bringing a darker street-level energy."
        },

        {
            name: "Bruce Banner",
            role: "THE AVENGER",
            image: bruce,
            description:
                "Mark Ruffalo returns as Bruce Banner, adding another major Marvel connection."
        },

        {
            name: "Scorpion",
            role: "VILLAIN",
            image: scorpion,
            description:
                "The Scorpion represents another dangerous threat lurking around Spider-Man."
        },

        {
            name: "Main Villain",
            role: "PRIMARY THREAT",
            image: mainVillain,
            description:
                "A mysterious new threat stands between Peter Parker and his next chapter."
        },

        {
            name: "Tombstone",
            role: "STREET THREAT",
            image: tombstone,
            description:
                "A brutal street-level presence that fits perfectly into Spider-Man's darker world."
        },

        {
            name: "Unknown",
            role: "CLASSIFIED",
            image: otherVillain,
            description:
                "Another dangerous figure whose role remains hidden behind the shadows."
        }
    ];


    const handleCharacterClick = (index) => {

        setActiveCharacter(
            activeCharacter === index ? null : index
        );

    };


    return (

        <main className="movie-page">

            {/* =========================================
                MOVIE HERO
            ========================================= */}

            <section className="movie-hero">

                <div className="movie-hero-overlay"></div>

                <div className="movie-hero-content">

                    <span className="movie-kicker">
                        MARVEL • SPIDER-MAN • BRAND NEW DAY
                    </span>

                    <h1 className="movie-title">
                        Brand
                        <br />
                        New Day
                    </h1>

                    <p className="movie-subtitle">
                        Spider-Man enters a completely new chapter.
                        After the emotional events of No Way Home,
                        Peter Parker faces a world that has forgotten him.
                    </p>

                    <span className="spoiler-warning">
                        ⚠ SPOILERS AHEAD!
                    </span>

                </div>

            </section>


            {/* =========================================
                EXISTING SUMMARY
            ========================================= */}

            <section className="summary">

                <p className="ms">

                    Few superhero movies arrive with the kind of anticipation surrounding Spider-Man: Brand New Day. Starring Tom Holland as Peter Parker and directed by Destin Daniel Cretton, the film takes Spider-Man into a new chapter following the emotional events of Spider-Man: No Way Home. The official premise sees Peter living in a world where nobody remembers him, dedicating himself completely to being Spider-Man while facing a mysterious new threat.

                    What makes Brand New Day particularly interesting is that it feels like both a continuation and a reset. Peter is no longer simply the young hero trying to balance school, friendships and superhero responsibilities. He is older, more isolated and seemingly determined to make Spider-Man his entire life. That gives the movie a more mature emotional foundation while still leaving room for the humor, action and spectacle audiences expect from the character.

                    And the movie certainly hasn't been short on excitement. Reviews have been broadly positive, with a review roundup reporting a 90% Rotten Tomatoes score at the time of publication, although some critics felt the film was overlong and episodic. The contrast is interesting: while some reviewers have pointed to pacing issues, audiences have clearly embraced the larger-than-life Spider-Man experience.

                    The biggest story surrounding Brand New Day may be the reaction from Spider-Man fans themselves. Discussion threads across Marvel communities exploded around the film's release, with fans debating everything from the story and characters to the film's surprises and its place within the wider MCU.

                    There is also a sense that fans are watching this movie as the beginning of a completely new phase for Tom Holland's Spider-Man. After the enormous emotional payoff of No Way Home, expectations were always going to be difficult to meet. Instead of simply trying to recreate that film's nostalgia, Brand New Day attempts to move Peter forward.

                    That is arguably the movie's greatest strength. It asks what happens when Peter Parker loses the people and relationships that once defined his life but continues choosing to be Spider-Man anyway.

                    The hype has translated into serious box-office momentum as well. By its second weekend, the movie had grossed $1.67 billion worldwide in just 10 days, according to the Associated Press, making it the highest-grossing film of the year at that point. In India, the film has also performed exceptionally strongly, with reports putting its 14-day gross at around ₹523.64 crore.

                    Part of the excitement comes from the character of Peter Parker himself. Tom Holland has now played Spider-Man through several major stages of Peter's life, and Brand New Day gives audiences a chance to see what this version of the character looks like after everything he has lost.

                    The supporting cast also adds to the anticipation. Zendaya returns as MJ, while Jacob Batalon returns as Ned Leeds. The film also features Jon Bernthal, Sadie Sink, Michael Mando and Mark Ruffalo among its major cast members.

                    For Marvel fans, that combination is enough to fuel endless theories and online discussions. Every trailer frame, casting announcement and potential connection to the wider MCU has been examined intensely.

                    Indian fans, in particular, had plenty to celebrate even before release. Sony Pictures India moved the Indian theatrical release forward to July 30, one day before the previously announced global release, with advance bookings opening for premium formats such as IMAX, 4DX and MX4D.

                    Ultimately, Spider-Man: Brand New Day succeeds because it understands that fans don't just want another superhero movie. They want to see where Peter Parker goes next.

                    The film carries the weight of No Way Home without simply attempting to repeat it. It gives Peter a different emotional journey, surrounds him with new challenges and lets Tom Holland explore a more experienced version of the character.

                    Whether every fan will agree that it reaches the heights of No Way Home is another question. But the enthusiasm surrounding the movie proves something important: audiences are still deeply invested in this Spider-Man.

                    After years of multiverse madness, cameos and massive crossover events, Brand New Day feels like a chance to discover Spider-Man again and fans clearly aren't ready to let go of Peter Parker yet.

                </p>

            </section>


            {/* =========================================
                CHARACTER DATABASE
            ========================================= */}

            <section className="characters-section">

                <div className="characters-heading">

                    <span className="database-kicker">
                        CHARACTER DATABASE
                    </span>

                    <h2>
                        Meet the players.
                    </h2>

                    <p>
                        Move your cursor across a character to reveal
                        their identity. On mobile, tap a card to reveal
                        the character.
                    </p>

                </div>


                <div className="character-grid">

                    {characters.map((character, index) => (

                        <article
                            className={`character-card ${activeCharacter === index
                                ? "character-active"
                                : ""
                                }`}
                            key={character.name}
                            onClick={() =>
                                handleCharacterClick(index)
                            }
                        >

                            {/* CARD NUMBER */}

                            <span className="character-number">
                                {String(index + 1).padStart(2, "0")}
                            </span>


                            {/* CHARACTER IMAGE */}

                            <div className="character-visual">

                                <div className="spidey-cover">

                                    <div className="spider-logo">

                                        <div className="spider-body">

                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>

                                        </div>

                                    </div>

                                    <span className="reveal-text">
                                        MOVE TO REVEAL
                                    </span>

                                </div>


                                <img
                                    src={character.image}
                                    alt={character.name}
                                    loading="lazy"
                                />


                                <div className="image-gradient"></div>


                                <div className="reveal-label">
                                    CHARACTER
                                </div>

                            </div>


                            {/* CHARACTER INFORMATION */}

                            <div className="character-info">

                                <span className="character-role">
                                    {character.role}
                                </span>

                                <h3 className="character-name">
                                    {character.name}
                                </h3>

                                <p className="character-description">
                                    {character.description}
                                </p>

                            </div>

                        </article>

                    ))}

                </div>

            </section>


            {/* =========================================
                FOOTER
            ========================================= */}

            <footer className="movie-footer">

                <div className="footer-spider">
                    <div className="mini-spider"></div>
                </div>

                <p>
                    SPIDER-MAN • BRAND NEW DAY
                </p>

                <span>
                    CHARACTER DATABASE
                </span>

            </footer>

        </main>

    );
}


export default Movie;