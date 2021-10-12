/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-magic-numbers */
import { createCanvas, registerFont, loadImage } from 'canvas';
import fs from 'fs';

export const generateImage = (
	slug: string,
	titleText: string,
	date: string | undefined,
	locale: string,
	folder: string
) => {
	const width = 1200;
	const height = 630;
	const borders = {
		x: 108,
		y: 145
	};
	const title = {
		width: 830,
		lineHeight: 72
	};

	const text = {
		width: 700,
		lineHeight: 27,
		size: 18
	};

	registerFont('./public/fonts/Poppins/Poppins-Medium.ttf', {
		family: 'Poppins Medium'
	});
	registerFont('./public/fonts/Poppins/Poppins-Regular.ttf', {
		family: 'Poppins Regular'
	});

	const getLines = (text: string, maxWidth: number) => {
		const words = text.split(' ');
		const lines = [];
		let currentLine = words[0];

		words.shift();
		words.forEach((word) => {
			const width = context.measureText(`${currentLine} ${word}`).width;
			if (width < maxWidth) {
				currentLine += ` ${word}`;
			} else {
				lines.push(currentLine);
				currentLine = word;
			}
		});

		lines.push(currentLine);
		return lines;
	};

	const canvas = createCanvas(width, height);
	const context = canvas.getContext('2d');

	context.fillStyle = '#fff';
	context.fillRect(0, 0, width, height);

	context.textBaseline = 'top';
	context.fillStyle = '#0F111A';
	context.font = '48px "Poppins Medium"';

	getLines(titleText, title.width).forEach((line, i) => {
		context.fillText(
			line,
			borders.x,
			borders.y + title.lineHeight * i,
			title.width
		);
	});

	context.fillStyle = '#0F111A';
	context.font = `${text.size}px "Poppins Regular"`;
	if (date) {
		context.fillText(
			`Matheus Francisco (@imtheu) • ${new Date(date).toLocaleDateString(
				'en-US',
				{
					day: 'numeric',
					month: 'short',
					year: 'numeric'
				}
			)}`,
			201,
			424
		);
	} else {
		context.fillText('Matheus Francisco (@imtheu)', 201, 424);
	}

	context.font = `${text.size}px "Poppins Medium"`;
	context.fillStyle = '#06D6A0';
	context.fillText('matheusmorais', 201, 454);
	context.fillStyle = '#0F111A';
	context.fillText('.', 348, 454);
	context.fillStyle = '#E4B64B';
	context.fillText('dev', 353, 454);

	loadImage('./public/images/favicons/96x96.png').then((image) => {
		context.drawImage(image, 996, 398, 96, 96);

		loadImage('./public/images/memoji_3.png').then((image) => {
			context.drawImage(image, 90, 394, 120, 124);

			const buffer = canvas.toBuffer('image/png');
			fs.writeFileSync(process.cwd() + `${folder}/og_${locale}.png`, buffer);
		});
	});
};
