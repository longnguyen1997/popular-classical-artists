import React from "react";
import { Grommet, Heading, Paragraph, Image, Box } from "grommet";
import MusicPlayer from "./MusicPlayer";

const artistData = {
	chopin: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Frédéric François Chopin (/ˈʃoʊpæ̃/, also UK: /ˈʃɒpæn/, US:
				/ˈʃoʊpæn, ʃoʊˈpæ̃/, French: [ʃɔpɛ̃], Polish: [ˈʂɔpɛn]; 1 March
				1810 – 17 October 1849) was a Polish composer and virtuoso
				pianist of the Romantic era who wrote primarily for solo piano.
				He has maintained worldwide renown as a leading musician of his
				era, one whose "poetic genius was based on a professional
				technique that was without equal in his generation."
			</Paragraph>
		),
		image: "https://live.staticflickr.com/2541/4225372582_483fcd0ea4_b.jpg"
	},
	mozart: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791),
				baptised as Johannes Chrysostomus Wolfgangus Theophilus Mozart,
				was a prolific and influential composer of the classical era. He
				composed more than 600 works, many of which are acknowledged as
				pinnacles of symphonic, concertante, chamber, operatic, and
				choral music. He is among the most enduringly popular of
				classical composers, and his influence is profound on subsequent
				Western art music.
			</Paragraph>
		),
		image:
			"https://mediad.publicbroadcasting.net/p/kmuw/files/styles/x_large/public/201503/Mozart-small.jpg"
	},
	bach: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Johann Sebastian Bach (31 March [O.S. 21 March] 1685 – 28 July
				1750) was a German composer and musician of the Baroque period.
				He is known for instrumental compositions such as the Art of
				Fugue, the Brandenburg Concertos, and the Goldberg Variations,
				and for vocal music such as the St Matthew Passion and the Mass
				in B minor. Since the 19th-century Bach Revival he has been
				generally regarded as one of the greatest composers of the
				Western art musical canon.
			</Paragraph>
		),
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg"
	},
	beethoven: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Ludwig van Beethoven (/ˈlʊdvɪɡ væn ˈbeɪt(h)oʊvən/; German:
				[ˈluːtvɪç fan ˈbeːthoːfn̩]; baptised 17 December 1770 – 26 March
				1827) was a German composer and pianist. A crucial figure in the
				transition between the classical and romantic eras in classical
				music, he remains one of the most recognized and influential
				musicians of this period, and is considered to be one of the
				greatest composers of all time.
			</Paragraph>
		),
		image:
			"https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg"
	}
};

const artists = {};

["chopin", "mozart", "bach", "beethoven"].forEach(composer => {
	artists[composer] = (
		<React.Fragment>
			<Box height="medium" width="small">
				<Heading level={2} textAlign="center">
					{composer.charAt(0).toUpperCase() + composer.slice(1)}
				</Heading>
				<Image fit="cover" src={artistData[composer]["image"]} />
			</Box>
			<Box margin="small">{artistData[composer]["bio"]}</Box>
		</React.Fragment>
	);
});

class ArtistBios extends React.Component {
	constructor(props) {
		/* Should ever only contain size for
		responsive design as well as the artist
		currently selected (passed as state from
		the main application logic). */
		super(props);
	}

	selectArtist() {
		return artists[this.props.artist];
	}

	render() {
		return (
			<React.Fragment>
				<Box
					direction="column"
					background="linear-gradient(6deg, rgba(20,20,20,1) 0%, rgba(80,80,80,1) 100%)"
					flex
					align="center"
					justify="center"
					pad="medium"
				>
					{/* Display an artist based on the user's selection */}
					{this.selectArtist()}
					<MusicPlayer artist={this.props.artist} />
				</Box>
			</React.Fragment>
		);
	}
}

export default ArtistBios;