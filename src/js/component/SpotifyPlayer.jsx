import React from "react";
import { useState, useEffect, useRef } from "react";

const SpotifyPlayer = () => {
    const [allMusics, setAllMusics] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [selected, setSelected] = useState(0);
    const [urlMusic, setUrlMusic] = useState("");
    const audio = useRef(null);

    const URL_AUDIO_BASE = "https://playground.4geeks.com";

    useEffect(() => {
        getMusics();
        reproduceMusic();
    }, [selected, playing]);

    const playMusic = (id) => {
        if (id > allMusics.length) {
            id = 1;
        }

        if (id <= 0) {
            id = allMusics.length;
        }

        audio.current.pause();
        setSelected(id);
        setUrlMusic(allMusics[id - 1].url);
        setPlaying(true);
    };

    const playstopMusic = () => {
        setPlaying(!playing);
    };

    const reproduceMusic = () => {
        playing ? audio.current.play() : audio.current.pause();
    };

    const getMusics = () => {
        fetch('https://playground.4geeks.com/sound/songs', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
        .then(data => {
            if (selected === 0) {
                setSelected(data.songs[0].id);
                setUrlMusic(data.songs[0].url);
            } else {
                setUrlMusic(data.songs[selected - 1].url);
            }
            setAllMusics(data.songs);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const handleSongEnd = () => {
        playMusic(selected + 1);
    };

    return (
        <div className="container-fluid p-0 col-md-8 bg-dark">
            <p className="bg-white"></p>
            <ol className="list-group mh-100 list-group-flush">
                {
                    allMusics.map((item, index) => (
                        <li 
                            key={index} 
                            className={`list-group-item list-group-item-action list-group-item-dark text-white fs-3 ${selected === index + 1 && playing ? "bg-gray" : "bg-dark"}`} 
                            onClick={() => playMusic(item.id)}>
                            <span className="pe-5">
                                <b>{item.id}</b>
                            </span>{item.name}
                        </li>
                    ))
                }
            </ol>

            <audio 
                src={URL_AUDIO_BASE + urlMusic} 
                ref={audio}
                onEnded={handleSongEnd}>
            </audio>

            <div className="sticky-bottom bg-dark text-center p-2">
                <div className="row g-1">
                    <div className="col-4 text-end pt-2">
                        <button className="rounded border-0 px-2 m-2" onClick={() => playMusic(selected - 1)}>
                            <i className="fas fa-caret-left"></i>
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="rounded border-0 p-2 m-2" onClick={playstopMusic}>
                            {playing ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}
                        </button>
                    </div>
                    <div className="col-4 text-start pt-2">
                        <button className="rounded border-0 px-2 m-2" onClick={() => playMusic(selected + 1)}>
                            <i className="fas fa-caret-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotifyPlayer;
