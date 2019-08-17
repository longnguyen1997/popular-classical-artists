import React from "react";
import ReactAudioPlayer from "react-audio-player";
import posed from "react-pose";
import Tippy from "@tippy.js/react";
import "tippy.js/themes/light-border.css";
import { Box } from "grommet";

const chopinEFlatMajorNocturne =
	"https://ia802607.us.archive.org/0/items/Chopin-NocturneOp.9No.2/20120420_Chopin_Nocturne_op9-2_amplified.mp3";
const bachCMajorPrelude =
	"https://archive.org/download/tandgweb_gmail_Bach/Bach-Prelude_In_C_major.mp3";
const mozartCMajorSonata =
	"https://archive.org/download/Sonata.no.16InCMajor/Wolfgang_Amadeus_Mozart_sonata_no._16_in_c_major_k.545.mp3";
const beethovenMoonlightSonata =
	"https://archive.org/download/LudwigVanBeethovenMoonlightSonataAdagioSostenutogetTune.net/Ludwig_Van_Beethoven_-_Moonlight_Sonata_Adagio_Sostenuto_%28get-tune.net%29.mp3";

const selections = {
	chopin: chopinEFlatMajorNocturne,
	bach: bachCMajorPrelude,
	mozart: mozartCMajorSonata,
	beethoven: beethovenMoonlightSonata
};

const pieceDescriptions = {
	chopin:
		"Chopin composed his best-known Nocturne in E-flat major, Op. 9, No. 2 when he was around twenty years old. This well-known nocturne is in rounded binary form (A, A, B, A, B, A) with coda, C. The A and B sections become increasingly ornamented with each recurrence. The penultimate bar utilizes considerable rhythmic freedom, indicated by the instruction, senza tempo (without tempo). Nocturne in E-flat major opens with a legato melody, mostly played piano, containing graceful upward leaps which becomes increasingly wide as the line unfolds. This melody is heard again three times during the piece. With each repetition, it is varied by ever more elaborate decorative tones and trills. The nocturne also includes a subordinate melody, which is played with rubato.",
	bach:
		"The famous prelude opening Book I of the Well-Tempered Clavier is both wonderfully classical in its harmonic richness and wonderfully modern in its repetitive simplicity. It is also noteable for the smoothness of its voice leading and the tension built throughout its lengthy coda, which accounts for nearly half the entire prelude. Of course, as a piece from the common practice period, chordal sevenths are treated as dissonances requiring preparation and resolution.",
	mozart:
		"The Piano Sonata No. 16 in C major, K. 545, by Wolfgang Amadeus Mozart was described by Mozart himself in his own thematic catalogue as 'for beginners'. The first movement is written in sonata form and is in the key of C major. The familiar opening theme is accompanied by an Alberti bass, played in the left hand. According to Charles Rosen, the practice of beginning a recapitulation in the subdominant was 'rare at the time [the sonata] was written', though the practice was later taken up by Franz Schubert.",
	beethoven:
		"The adagio sostenuto has made a powerful impression on many listeners; for instance, Berlioz said of it that it 'is one of those poems that human language does not know how to qualify'. Beethoven's student Carl Czerny called it 'a nocturnal scene, in which a mournful ghostly voice sounds from the distance'. The movement was very popular in Beethoven's day, to the point of exasperating the composer himself, who remarked to Czerny, 'Surely I've written better things.'"
};

export default class MusicPlayer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const margins = {
			top: "15px",
			bottom: "50px"
		};
		return (
			<Box margin={margins}>
				<Tippy
					content={pieceDescriptions[this.props.artist]}
					placement="top"
					animation="scale"
					theme="spotify"
					animateFill={false}
					duration={[250, 175]}
					delay={[150, 0]}
					distance={8}
				>
					<span>
						<ReactAudioPlayer
							src={selections[this.props.artist]}
							// autoPlay
							controls
						/>
					</span>
				</Tippy>
			</Box>
		);
	}
}
