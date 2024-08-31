import React from "react";

const SpotifyPlayer = () => {
    return (
        <div className="container-fluid p-0 col-md-8 bg-dark">
			<p className="bg-white"></p>
			<ol className="list-group mh-100 list-group-flush">
                <li className="list-group-item list-group-item-action list-group-item-dark text-white fs-4 bg-gray">
					<span className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
				</li>
                <li className="list-group-item list-group-item-action list-group-item-dark text-white fs-4 bg-black">
					<span className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
				</li>
				<li className="list-group-item list-group-item-action list-group-item-dark text-white fs-4 bg-black">
					<span className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
				</li>
				<li className="list-group-item list-group-item-action list-group-item-dark text-white fs-4 bg-black">
					<span className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
				</li>
				<li className="list-group-item list-group-item-action list-group-item-dark text-white fs-4 bg-black">
					<span className="pe-5">Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
				</li>
			</ol>

			<div className="sticky-bottom bg-dark text-center p-2">
				<div className="row g-1">
					<div className="col-4 text-end pt-2">
						<button className="rounded border-0 px-2 m-2">
							<i class="fas fa-caret-left"></i>
						</button>
					</div>
					<div className="col-4">
						<button className="rounded border-0 p-2 m-2">
							<i class="fas fa-play"></i>
						</button>
						<button className="rounded border-0 p-2 m-2">
							<i class="fas fa-pause"></i>
						</button>
					</div>
					<div className="col-4 text-start pt-2">
						<button className="rounded border-0 px-2 m-2">
							<i class="fas fa-caret-right"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
    );
}

export default SpotifyPlayer;