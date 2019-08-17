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
		image: "https://medicitv-a.imgix.net/movie/the-art-of-chopin_d.jpg",
		bday: "1 Mar 1810"
	},
	mozart: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Wolfgang Amadeus Mozart (27 January 1756 – 5 December 1791) was
				a prolific and influential composer of the classical era. He
				composed more than 600 works, many of which are acknowledged as
				pinnacles of symphonic, concertante, chamber, operatic, and
				choral music. He is among the most enduringly popular of
				classical composers, and his influence is profound on subsequent
				Western art music.
			</Paragraph>
		),
		image:
			"https://media.wnyc.org/i/800/0/c/85/1/wolfgang_amadeus_mozart.gif",
		bday: "27 Jan 1756"
	},
	bach: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Johann Sebastian Bach (31 March 1685 – 28 July 1750) was a
				German Baroque composer. He is known for instrumental
				compositions such as the Art of Fugue, the Brandenburg
				Concertos, and the Goldberg Variations. Since the 19th-century
				Bach Revival, he has been generally regarded as one of the
				greatest composers of the Western art musical canon.
			</Paragraph>
		),
		image:
			"http://cdn.classical-music.com/sites/default/files/imagecache/623px_wide/bach_625.jpg",
		bday: "31 Mar 1685"
	},
	beethoven: {
		bio: (
			<Paragraph textAlign="center" margin="medium">
				Ludwig van Beethoven (/ˈlʊdvɪɡ væn ˈbeɪt(h)oʊvən/; German:
				[ˈluːtvɪç fan ˈbeːthoːfn̩]; baptised 17 December 1770 – 26 March
				1827) was a German composer. A crucial figure in the transition
				between the classical and romantic eras in music, he remains one
				of the most recognized and influential musicians of this period,
				considered to be one of the greatest composers of all time.
			</Paragraph>
		),
		image:
			"https://d15v4l58k2n80w.cloudfront.net/file/1396975600/30269233945/width=1280/height=720/format=-1/fit=crop/crop=40x0+1421x800/rev=2/t=418622/e=never/k=cf46d046/BeethovensNinth.jpg",
		bday: "17 Dec 1770"
	}
};

class ArtistBios extends React.Component {
	constructor(props) {
		/* Should ever only contain size for
		responsive design as well as the artist
		currently selected (passed as state from
		the main application logic). */
		super(props);
		this.artists = {};
		["chopin", "mozart", "bach", "beethoven"].forEach(composer => {
			this.artists[composer] = (
				<React.Fragment>
					<Box height="medium" width="medium">
						<Heading level={1} textAlign="center">
							{composer.charAt(0).toUpperCase() +
								composer.slice(1)}
						</Heading>
						<Image
							fit="cover"
							src={artistData[composer]["image"]}
						/>
					</Box>
					<Box margin="small">
						<b>
							{(new Date() -
								new Date(artistData[composer]["bday"])) /
								31536000000}{" "}
							years old
						</b>
					</Box>
					<Box margin="small">{artistData[composer]["bio"]}</Box>
				</React.Fragment>
			);
		});
	}

	render() {
		return (
			<Box
				direction="column"
				background="linear-gradient(6deg, rgba(20,20,20,1) 0%, rgba(80,80,80,1) 100%)"
				flex
				align="center"
				justify="center"
				pad="medium"
			>
				{/* Display an artist based on the user's selection */}
				{this.artists[this.props.artist]}
				<MusicPlayer artist={this.props.artist} />
			</Box>
		);
	}
}

export default ArtistBios;
